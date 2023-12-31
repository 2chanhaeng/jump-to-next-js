import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import { Answer } from "@/types/answer";
import AnswerItem from "./AnswerItem";
import NewAnswer from "./NewAnswer";

export default function Answers({
  id,
  answers,
}: {
  id: string;
  answers: Answer[];
}) {
  return (
    <Grid item container flexDirection="column" spacing={2}>
      <Grid item component="h2">
        Answers
      </Grid>
      {answers.length > 0 ? (
        <Grid item>
          <List>
            {answers.map((answer) => (
              <AnswerItem key={answer.id} {...answer} />
            ))}
          </List>
        </Grid>
      ) : (
        <NoAnswers />
      )}
      <NewAnswer id={id} />
    </Grid>
  );
}

function NoAnswers() {
  return <Grid item>아직 답변이 없습니다.</Grid>;
}
