import { logout } from "@/actions/auth";

export function Logout() {
  return (
    <form action={logout}>
      <button type="submit">Sign Out</button>
    </form>
  );
}
