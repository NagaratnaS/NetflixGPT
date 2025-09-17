import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <form className="w-3/12 p-12 bg-zinc-400 my-36 mx-auto right-0 left text-white">
        <h1 className="font-bold text-2xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 text-white"
          />
        )}
        <input type="text" placeholder="Email" className="p-2 m-2 text-white" />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 text-white"
        />
        <button type="submit" className="p-4 m-4 bg-red-500 text-white">
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
