import type { Answer } from "@/prisma";
import { Answer as Li } from "./Answer";

export function Answers({ answers }: { answers: Answer[] }) {
  return (
    <section>
      <h2>Answers</h2>
      <ul>
        {answers.map((answer) => (
          <Li key={answer.id} {...answer} />
        ))}
      </ul>
    </section>
  );
}
