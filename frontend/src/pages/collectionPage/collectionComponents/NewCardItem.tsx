import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import { FormNewItems } from "./FormNewItems";
import Drawer from "@mui/material/Drawer";
import { useAuth0 } from "@auth0/auth0-react";
import { isAdmin } from "../../../models/users";

export const NewCardItem = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { user } = useAuth0();

  const onCreate = (item) => {
    props.onCreate(item);
    setOpen(false);
  };

  return (
    <div>
      {((user && user.sub == props.userId) || isAdmin(user)) && (
        <Button
          onClick={handleOpen}
          component="div"
          sx={{
            border: "2px dashed grey",
            maxWidth: 345,
            boxShadow: 10,
            minWidth: 240,
            minHeight: 260,
            height: "100%",
            width: "100%",
            "&:hover": {
              backgroundColor: "lavender",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Create Item
        </Button>
      )}
      <Drawer
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        anchor={"right"}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div className="formik">
          <FormNewItems
            onCreate={onCreate}
            collectionId={props.collectionId}
            collectionTitle={props.collectionTitle}
            customField={props.customField}
            handleClose={handleClose}
          />
        </div>
      </Drawer>
    </div>
  );
};
