"use client";

import { useFormState } from "react-dom";
import { signup } from "@/actions/signup";

export default function SignupPage() {
  const [state, dispatchSignup] = useFormState(signup, { message: "" });

  return (
    <main>
      <form action={dispatchSignup}>
        <label>
          Username
          <input name="username" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <p>{state.message}</p>
        <button type="submit">Sign up</button>
      </form>
    </main>
  );
}
