import { Answer } from "@/types/answer";

export function Answer({ content, createdAt, user: { name } }: Answer) {
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
    </li>
  );
}
