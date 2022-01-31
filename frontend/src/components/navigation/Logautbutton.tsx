import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const LogoutButton = () => {
  const { user } = useAuth0();
  const { logout } = useAuth0();

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <ListItemAvatar>
        <Avatar src={user.picture} />
      </ListItemAvatar>
      <Button
        color="inherit"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default LogoutButton;
