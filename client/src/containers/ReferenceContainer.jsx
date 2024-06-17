import React from "react";

import Dialog from "../components/common/Dialog";
import Stack from "../components/common/Stack";
import Button from "../components/common/Button";
import TextField from "@mui/material/TextField";

const ReferenceContainer = () => {
  const handleButton = () => {
    console.log("hello sir");
  };

  return (
    <div>
      <Dialog
        open={true}
        title="Log out?"
        dialogContentSx={{ minWidth: "400px", marginTop: "10px" }}
        onClose={handleButton}
        sx={{borderRadius:"30px"}}
        actions={
          <Stack direction="row" sx={{ paddingRight: "14px" }}>
            <Button
              variant="outlined"
              sx={{ color: "green", borderRadius: "20px", marginRight: "14px" }}
            >
              Cancel
            </Button>
            <Button
              sx={{ color: "white", borderRadius: "20px", fontWeight: 700 }}
            >
              Log out
            </Button>
          </Stack>
        }
      >
        Are you sure you want to log out?
        <br />
        You can turn on <span style={{ color: "green" }}>screen look</span>{" "}
        instead
      </Dialog>
    </div>
  );
};

export default ReferenceContainer;
