import * as React from "react";
import clsx from "clsx";
import { styled, css } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import Button from "@mui/material/Button";

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "MuiBackdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});
Backdrop.displayName = "Backdrop";

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};
/**
 * @example
 * function Modal() {
 *   const [open, setOpen] = React.useState(false);
 *   const handleOpen = () => setOpen(true);
 *   const handleClose = () => setOpen(false);
 *
 *   return (
 *     <div>
 *       <ModalTriggerButton type="button" onClick={handleOpen}/>
 *       <Modal
 *         open={open}
 *         onClose={handleClose}
 *         slots={{ backdrop: StyledBackdrop }}
 *       >
 *         <ModalContent sx={{ width: 400 }}>
 *           Modal Content
 *         </ModalContent>
 *       </Modal>
 *     </div>
 *   );
 * }
 */
export const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const ModalContent = styled("div")(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: rgb(var(--background-rgb));
    border-radius: 8px;
    border: 1px solid rgb(var(--background-rgb));
    box-shadow: 0 4px 12px
      ${
        theme.palette.mode === "dark" ? "rgb(0 0 0 / 0.5)" : "rgb(0 0 0 / 0.2)"
      };
    padding: 24px;
    color: rgb(var(--foreground-rgb));

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: rgb(var(--foreground-rgb));
      margin-bottom: 4px;
    }
  `
);

export const ModalTriggerButton = styled(Button)(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: rgb(var(--background-rgb));
    border: 1px solid rgb(var(--background-rgb));
    color: rgb(var(--foreground-rgb));
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: rgba(var(--foreground-rgb), 0.2);
      border-color: rgba(var(--foreground-rgb), 0.2);
    }

    &:active {
      background: rgba(var(--foreground-rgb), 0.3);
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px ${
        theme.palette.mode === "dark" ? blue[300] : blue[200]
      };
      outline: none;
    }
  `
);
