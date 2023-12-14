"use server";

export interface State {
  username: string;
  password: string;
  prev?: {
    username: string;
    password: string;
  };
}

export async function signup(prevState: State, form: FormData): Promise<State> {
  const username = form.get("username") as string;
  const password = form.get("password") as string;
  delete prevState.prev;
  const prev = prevState;

  return {
    username,
    password,
    prev,
  };
}
