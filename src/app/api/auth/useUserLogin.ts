import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebaseClient";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux-store/store"; // Adjust the path to your store file
import { postApi } from "@/app/utils/apiUtils";

const useUserLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Access the API status for the "authUser" model
  const apiStatus = useSelector((state: RootState) => state.api.status);
  const authUserObject = useSelector((state: RootState) => state.api.models.authUser || {});
  console.log('apiStatus',apiStatus);
  
  const login = async (email: string, password: string) => {
    try {
      console.log("Attempting to log in with email:", email);

      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCred.user.getIdToken();

      // Dispatch the thunk to send the token to the server
      const res = await dispatch(postApi("/auth/login/", "authUser", { idToken }));
      console.log("API Status:", apiStatus);

      // Check if the API call was successful
      console.log(apiStatus.authUser.success, "apiStatus.authUser.success");
      
      if (apiStatus.authUser.success===true) {
        console.log("Login successful, response:", authUserObject);
        
        const userSession = {
          isLoggedIn: true,
          token: authUserObject.access, 
          user: authUserObject.user, 
          refresh: authUserObject.refresh,
        };
        localStorage.setItem("userSession", JSON.stringify(userSession)); // Save session to localStorage

        console.log("Login successful:", res);
        router.push("/"); 
      } else if(apiStatus.authUser.error=== true) {
      console.log(apiStatus, "apiStatus.authUser.failure");
        alert(res?.error?.message|| "Login failed");
      } else {
        alert("Oops something went wrong please try again later.");
      }
      return res; // Return the response for further handling if needed
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred during login");
      return { error: "Login failed" }; // Return an error object for further handling
    }
  };

  return login; // Return both the login function and the API status
};

export default useUserLogin;

