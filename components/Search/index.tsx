import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  ModalTriggerButton,
  Modal,
  StyledBackdrop,
  ModalContent,
} from "@/components/Modal";
import Content from "./ModalContent";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ModalTriggerButton
        type="button"
        onClick={handleOpen}
        endIcon={<SearchIcon />}
      >
        Search...
      </ModalTriggerButton>
      <Modal
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 400 }}>
          <Content handleClose={handleClose} />
        </ModalContent>
      </Modal>
    </div>
  );
}
