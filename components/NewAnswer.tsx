import Link from "next/link";
import { create } from "@/actions/answer";
import { auth } from "@/auth";

export async function NewAnswer({ id }: { id: string }) {
  const session = await auth();
  return session ? (
    <form action={create.bind(null, id)}>
      <label>
        Comment
        <textarea name="content" />
      </label>
      <button type="submit">Add Comment</button>
    </form>
  ) : (
    <p>
      댓글을 남기려면 <Link href="/api/auth/signin">로그인</Link>이 필요합니다.
    </p>
  );
}
