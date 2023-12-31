import Link from "next/link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { destroy } from "@/actions/question";
import { auth } from "@/auth";
import { prisma } from "@/prisma";

export async function EditDeleteButtons({ id }: { id: string }) {
  const session = await auth();
  if (!session || !session.user) return <></>;
  const userId = session.user.id;
  const ownership = await prisma.question.findUnique({
    where: { ownership: { userId, id } },
  });
  if (!ownership) return <></>;
  return (
    <Grid item container spacing={2} component="form">
      <input type="hidden" name="id" value={id} />
      <Grid item>
        <Link href={`/questions/${id}/edit`}>
          <Button
            type="submit"
            variant="contained"
            color="info"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        </Link>
      </Grid>
      <Grid item>
        <Button
          formAction={destroy}
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}
