import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "@/actions/auth";

export function Logout() {
  return (
    <Grid item xs={12} component="form" action={logout} padding={2}>
      <Button
        type="submit"
        color="error"
        variant="outlined"
        startIcon={<LogoutIcon />}
      >
        Sign Out
      </Button>
    </Grid>
  );
}
