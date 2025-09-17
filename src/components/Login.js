import Header from "./Header";
import { useRef, useState } from "react";
import { validateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const passWord = useRef(null);

  const handleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Handle button click logic here
    const message = validateData(email.current.value, passWord.current.value);
    setErrorMessage(message);
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
          <p className="underline cursor-pointer">
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
