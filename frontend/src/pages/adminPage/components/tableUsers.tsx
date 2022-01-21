import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from "@mui/material/CircularProgress";

export const TableUsers = (props) => {
console.log(props.users)
    if (!props.users) {
        return <CircularProgress/>;
    } else {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Users Name</TableCell>
                            <TableCell align="right">User ID</TableCell>
                            <TableCell align="right">User Email</TableCell>
                            <TableCell align="right">User Role</TableCell>
                            <TableCell align="right">Data Registration User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.users.map((user) => (
                            <TableRow
                                key={user.nickname}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {user.nickname}
                                </TableCell>
                                <TableCell align="right">{user.user_id}</TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <TableCell align="right">{user.created_at}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }

}