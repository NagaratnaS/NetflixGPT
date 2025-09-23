import Header from "./Header";
import { useRef, useState } from "react";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const email = useRef(null);
  const passWord = useRef(null);
  const name = useRef(null);

  const handleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Handle button click logic here
    const message = validateData(email.current.value, passWord.current.value);
    setErrorMessage(message);
    if (message) return;
    if (isSignInForm) {
      // Handle sign-in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        passWord.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Handle sign-up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        passWord.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
  };

  return (
    <div>
      <Header />
      <form
        className="w-3/12 p-12 bg-zinc-400 my-36 mx-auto right-0 left text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <p className="text-xl text-red-800 text-center font-bold">
          {errorMessage}
        </p>
        <h1 className="font-bold text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 text-slate-950"
            ref={name}
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 m-2 text-slate-950"
        />
        <input
          ref={passWord}
          type="password"
          placeholder="Password"
          className="p-2 m-2 text-slate-950"
        />
        <button
          type="submit"
          className="p-4 m-4 bg-red-500 text-white"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <button
          type="button"
          className="bg-transparent text-white cursor-pointer"
          onClick={handleSignUp}
        >
          <p className="cursor-pointer">
            {isSignInForm
              ? "New to Netflix? Sign Up Now!!"
              : "Already have an account? Sign In"}
          </p>
        </button>
      </form>
    </div>
  );
};

export default Login;
