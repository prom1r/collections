import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import Chip from "@mui/material/Chip";
import { hasAdminRole } from "../../../models/users";

export const TableUsers = (props) => {
  if (!props.users) {
    return <CircularProgress />;
  } else {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Users Name</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Data Registration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.nickname}
                </TableCell>
                <TableCell align="right">{user.user_id}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">
                  {hasAdminRole(user.roles) ? (
                    <Chip color="primary" size="small" label="Admin" />
                  ) : (
                    <Chip size="small" label="User" />
                  )}
                </TableCell>
                <TableCell align="right">{user.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};
