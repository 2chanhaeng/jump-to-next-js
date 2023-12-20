import { create } from "@/actions/question";

export default function NewQuestionPage() {
  return (
    <main>
      <h1>New Question</h1>
      <form action={create}>
        <label>
          Subject
          <input type="text" name="subject" />
        </label>
        <label>
          Content
          <textarea name="content" />
        </label>
        <button type="submit">Create Question</button>
      </form>
    </main>
  );
}
