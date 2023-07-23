import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../style/Modal.css";
import { removeApiTags } from "../Utilites/CleanText";

export default function BasicModal({
  open,
  setOpen,
  movie: {
    summary,
    genres,
    rating: { average },
    image: { medium },
  },
}) {
  const handleClose = () => setOpen(false);

  const isAverageValid = average ? average : "No rating";

  const summaryText =
    summary?.slice(3, -4) && removeApiTags(summary.slice(3, -4));

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className="modal">
          <div className="modal-header">
            <img src={medium} alt="modal-pic" />
            <p className="text">{summaryText}</p>
          </div>
          <ul className="movie-genres-container">
            {genres?.map((gener, id) => {
              return (
                <li key={id} className="movie-genres">
                  {gener}
                </li>
              );
            })}
          </ul>
          {<p className="modal-rating"> Rating: {isAverageValid}</p>}
        </div>
      </Modal>
    </div>
  );
}
