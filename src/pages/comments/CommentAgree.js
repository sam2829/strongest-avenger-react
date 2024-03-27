import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from "../../styles/CommentCreateEditForm.module.css";

const CommentAgree = ({ agree, setAgree }) => {
  const handleAgree = () => {
    setAgree(!agree);
  };

  return (
    <>
      {agree && (
        <div className={styles.agreeIcon}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Do you disagree!</Tooltip>}
          >
            <i
              className="fa-solid fa-circle-check"
              data-value={agree}
              onClick={handleAgree}
            ></i>
          </OverlayTrigger>
        </div>
      )}
      {!agree && (
        <div className={styles.agreeIcon}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Do you agree!</Tooltip>}
          >
            <i
              className="fa-regular fa-circle-check"
              data-value={agree}
              onClick={handleAgree}
            ></i>
          </OverlayTrigger>
        </div>
      )}
    </>
  );
};

export default CommentAgree;
