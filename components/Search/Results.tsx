import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { SearchedQuestion } from "@/types/question";

export default function SearchResults({
  result,
  handleClose,
}: {
  result: SearchedQuestion[];
  handleClose: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const handleClick = (id: string) => () => {
    router.push(`/questions/${id}`);
    console.log(id);
    handleClose(false);
  };
  return (
    <List>
      {result.map(({ id, subject }) => (
        <ListItem
          onClick={handleClick(id)}
          key={id}
          sx={{
            cursor: "pointer",
            borderRadius: 1,
            "&:hover": {
              backgroundColor: "rgba(var(--foreground-rgb), 0.4)",
            },
          }}
        >
          <ListItemText primary={subject} />
        </ListItem>
      ))}
    </List>
  );
}
