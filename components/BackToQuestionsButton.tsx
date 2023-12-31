import Link from "next/link";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type Color =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

export async function BackToButton({
  href,
  textContent,
  color,
}: {
  href: string;
  textContent: string;
  color: Color;
}) {
  return (
    <Link href={href}>
      <Button
        variant="contained"
        color={color}
        type="button"
        startIcon={<ArrowBackIosNewIcon />}
      >
        {textContent}
      </Button>
    </Link>
  );
}

export function BackToQuestionsButton() {
  return (
    <BackToButton
      href="/questions"
      textContent="Back to Questions"
      color="info"
    />
  );
}

export function CancelEditButton({ id }: { id: string }) {
  return (
    <BackToButton
      href={`/questions/${id}`}
      textContent="Cancel Edit"
      color="info"
    />
  );
}
