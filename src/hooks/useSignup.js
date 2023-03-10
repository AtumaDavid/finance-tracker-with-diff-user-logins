import { useState, useEffect } from "react";
import { projectAuthentication } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      //signup user
      const res = await projectAuthentication.createUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(res.user);

      if (!res) {
        throw new Error("could not complete signup");
      }

      //add display name to user
      await res.user.updateProfile({ displayName });
      //   await res.user.updateProfile({ displayName: displayName });

      //dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      //update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  //cleanup function
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, signup };
};
