import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { update } from "@/actions/answer";
import TextField from "./TextField";
import { Dispatch, SetStateAction } from "react";

export default function AnswerEditModal({
  open,
  setOpen,
  id,
  content,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
  content: string;
}) {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        component="form"
        action={(form) => {
          form.set("id", id);
          const changed = form.get("content") !== content;
          console.log({ changed });
          if (changed) update(form).then(() => setOpen(false));
        }}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Grid
          container
          spacing={2}
          flexDirection="column"
          bgcolor="#111"
          padding="0 1rem 1rem 0"
        >
          <Grid item component="h2">
            Edit Answer
          </Grid>
          <Grid item>
            <TextField
              multiline
              name="content"
              defaultValue={content}
              required
              rows={4}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit" startIcon={<EditIcon />}>
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
