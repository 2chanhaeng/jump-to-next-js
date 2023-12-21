import { Answer } from "@/types/answer";

export function Answer({ content, createdAt }: Answer) {
  return (
    <li>
      <p>{content}</p>
      <p>
        {Intl.DateTimeFormat("ko-KR", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(createdAt)}
      </p>
    </li>
  );
}
