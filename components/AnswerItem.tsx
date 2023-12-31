import { SessionProvider } from "next-auth/react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Answer } from "@/types/answer";
import AnswerAuthorSection from "./AnswerAuthorSection";
import { Typography } from "@mui/material";

export default function AnswerItem({
  id,
  content,
  createdAt,
  user: { id: userId, name },
}: Answer) {
  return (
    <ListItem>
      <Grid container>
        <Grid item xs={12}>
          <Typography component="p" whiteSpace="pre-line">
            {content}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ListItemText
            secondary={`By ${name} At ${Intl.DateTimeFormat("ko-KR", {
              dateStyle: "short",
              timeStyle: "short",
            }).format(createdAt)}`}
            sx={{
              "& .MuiListItemText-secondary": {
                color: "#888",
              },
            }}
          />
        </Grid>
        <SessionProvider>
          <AnswerAuthorSection id={id} userId={userId} content={content} />
        </SessionProvider>
      </Grid>
    </ListItem>
  );
}
