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
      if (!apiStatus.error && apiStatus.sucuss) {
        console.log("Login successful:", res);
        router.push("/"); // Redirect to the home page on success
      } else {
        alert(res.error.message|| "Login failed");
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

