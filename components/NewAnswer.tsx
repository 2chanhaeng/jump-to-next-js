import { create } from "@/actions/answer";

export function NewAnswer({ id }: { id: string }) {
  return (
    <form action={create.bind(null, id)}>
      <label>
        Comment
        <textarea name="content" />
      </label>
      <button type="submit">Add Comment</button>
    </form>
  );
}
