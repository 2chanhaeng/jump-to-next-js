"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useSession } from "next-auth/react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { destroy } from "@/actions/answer";
import EditModal from "./AnswerEditModal";

export default function AnswerAuthorSection({
  id,
  userId,
  content,
}: {
  id: string;
  userId: string;
  content: string;
}) {
  const session = useSession();
  const [open, setOpen] = useState(false);
  if (session?.data?.user?.id !== userId) return <></>;
  return (
    <Grid item container spacing={2}>
      <Grid item>
        <EditButton setOpen={setOpen} />
      </Grid>
      <Grid item>
        <DeleteButton id={id} />
      </Grid>
      <EditModal open={open} setOpen={setOpen} id={id} content={content} />
    </Grid>
  );
}

function DeleteButton({ id }: { id: string }) {
  return (
    <Button
      color="error"
      variant="contained"
      onClick={async () => await destroy(id)}
      startIcon={<DeleteIcon />}
    >
      Delete
    </Button>
  );
}

function EditButton({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Button
      color="info"
      variant="contained"
      onClick={() => setOpen(true)}
      startIcon={<EditIcon />}
    >
      Edit
    </Button>
  );
}
