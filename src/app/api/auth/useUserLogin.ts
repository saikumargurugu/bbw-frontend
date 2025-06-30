import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebaseClient";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux-store/store"; // Adjust the path to your store file
import { postApi } from "@/app/utils/apiUtils";

const useUserLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();


  // Function to update local storage
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateLocalStorage = (authUserObject: any) => {
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
    localStorage.setItem("token", authUserObject.access);
    localStorage.setItem("user", JSON.stringify(authUserObject.user));
    localStorage.setItem("refresh", authUserObject.refresh);
  };

  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => userCred.user.getIdToken())
      .then((idToken) => {
        // Wait for the API call to finish and use the response directly
        return dispatch(postApi("/auth/login/", "authUser", { idToken }));
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((res: any) => {
        // Use the actual API response here
        if (res && res.access && res.user) {
          updateLocalStorage(res);
          router.push("/");
        } else if (res && res.error) {
          alert(res.error || "Login failed");
        } else {
          alert("Oops something went wrong please try again later.");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("An error occurred during login");
      });
  };

  return login; // Return the login function
};

export default useUserLogin;

