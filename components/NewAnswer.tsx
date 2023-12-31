import Link from "next/link";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import { create } from "@/actions/answer";
import { auth } from "@/auth";
import TextField from "./TextField";

export default async function NewAnswer({ id }: { id: string }) {
  const session = await auth();
  return session ? (
    <Grid
      item
      container
      flexDirection="column"
      spacing={2}
      component="form"
      action={create.bind(null, id)}
    >
      <Grid item component="h3">
        New Answer
      </Grid>
      <Grid item>
        <TextField multiline rows={3} name="content" label="Content" />
      </Grid>
      <Grid item>
        <Button type="submit" variant="contained" startIcon={<Add />}>
          Add Answer
        </Button>
      </Grid>
    </Grid>
  ) : (
    <Grid item>
      댓글을 남기려면 <Link href="/api/auth/signin">로그인</Link>이 필요합니다.
    </Grid>
  );
}
