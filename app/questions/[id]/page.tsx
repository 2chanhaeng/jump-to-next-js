import { notFound } from "next/navigation";
import Grid from "@mui/material/Grid";
import Answers from "@/components/Answers";
import Main from "@/components/Main";
import { prisma } from "@/prisma";
import { EditDeleteButtons } from "@/components/EditDeleteButtons";
import { BackToQuestionsButton } from "@/components/BackToQuestionsButton";
import { Typography } from "@mui/material";

export default async function QuestionPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const select = {
    subject: true,
    content: true,
    createdAt: true,
    user: { select: { name: true } },
    answers: {
      orderBy: { createdAt: "desc" as const },
      select: {
        id: true,
        content: true,
        createdAt: true,
        userId: true,
        user: { select: { id: true, name: true } },
      },
    },
  };
  const question = await prisma.question.findUnique({ where: { id }, select });
  if (!question) return notFound();
  const {
    subject,
    content,
    createdAt,
    answers,
    user: { name },
  } = question;

  return (
    <Main alignContent="center">
      <Grid item>
        <BackToQuestionsButton />
      </Grid>
      <Grid item component="h1">
        {subject}
      </Grid>
      <Grid item>
        <Typography whiteSpace="pre-line">{content}</Typography>
      </Grid>
      <Grid item>
        <Typography>
          By {name} At {createdAt.toLocaleString()}
        </Typography>
      </Grid>
      <EditDeleteButtons id={id} />
      <Answers id={id} answers={answers} />
    </Main>
  );
}
