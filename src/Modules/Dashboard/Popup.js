import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import React from "react";

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <Dialog
      open={openPopup}
      PaperProps={{
        style: {
          background: "#fff",
          borderRadius: "2rem",
        },
      }}
    >
      <DialogTitle style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            style={{ color: "#111", fontFamily: "Poppins", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <button
            style={{
              boxShadow: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#111",
              padding: "0.3rem",
              marginLeft: "1rem",
              fontWeight: "bolder",
              fontFamily: "Poppins",
              fontSize: "1.2rem",
            }}
            onClick={() => setOpenPopup(false)}
          >
            X
          </button>
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
