import { Answer } from "@/types/answer";
import { Answer as Li } from "./Answer";
import { NewAnswer } from "./NewAnswer";

export function Answers({ id, answers }: { id: string; answers: Answer[] }) {
  return (
    <section>
      <h2>Answers</h2>
      <ul>
        {answers.map((answer) => (
          <Li key={answer.id} {...answer} />
        ))}
      </ul>
      <NewAnswer id={id} />
    </section>
  );
}
