import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { search } from "@/actions/question";
import { SearchedQuestion } from "@/types/question";
import TextField from "@/components/TextField";
import Results from "./Results";

export default function SearchModalContent({
  handleClose,
}: {
  handleClose: Dispatch<SetStateAction<boolean>>;
}) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([] as SearchedQuestion[]);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  useEffect(() => {
    const timeOutId = setTimeout(
      () => value && search(value).then(setResult),
      500
    );
    return () => clearTimeout(timeOutId);
  }, [value]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6">Search</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField label="Search" onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <Results result={result} handleClose={handleClose} />
      </Grid>
    </Grid>
  );
}
