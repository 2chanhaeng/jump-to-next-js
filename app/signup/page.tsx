"use client";

import { useFormState } from "react-dom";
import { State, signup } from "./actions";

const initialState: State = {
  username: "",
  password: "",
};

export default function SignupPage() {
  const [state, formAction] = useFormState(signup, initialState);

  return (
    <form action={formAction}>
      <label>
        Username
        <input name="username" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <p>{JSON.stringify(state)}</p>
      <button type="submit">Sign up</button>
    </form>
  );
}
