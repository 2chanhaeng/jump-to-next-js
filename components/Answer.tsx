import { SessionProvider } from "next-auth/react";
import { Answer } from "@/types/answer";
import { AnswerAuthorSection } from "./AnswerAuthorSection";

export function Answer({
  id,
  content,
  createdAt,
  user: { id: userId, name },
}: Answer) {
  return (
    <li>
      <p>{content}</p>
      <p>
        {Intl.DateTimeFormat("ko-KR", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(createdAt)}
      </p>
      <p>
        <em>By {name}</em>
      </p>
      <SessionProvider>
        <AnswerAuthorSection id={id} userId={userId} content={content} />
      </SessionProvider>
    </li>
  );
}
