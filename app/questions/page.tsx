import Link from "next/link";
import { List, ListItem, ListItemText, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Add } from "@mui/icons-material";
import { prisma } from "@/prisma";
import Main from "@/components/Main";

export default async function QuestionsPage() {
  const questions = await prisma.question.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <Main alignContent="center">
      <Grid item component="h1">
        Questions
      </Grid>
      <Grid item flexGrow={1}>
        <List>
          {questions.map(({ id, subject }) => (
            <ListItem key={id}>
              <Link href={`/questions/${id}`}>
                <ListItemText primary={subject} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item mb={0}>
        <Link href="/questions/new">
          <Button variant="contained" startIcon={<Add />}>
            New Question
          </Button>
        </Link>
      </Grid>
    </Main>
  );
}
