import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableBody, TableCell, styled, Button } from '@mui/material';
import { getUsers } from '../Service/api';
import { Link } from 'react-router-dom';


const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
     background: #000000;
    & > th {
        font-size: 20px;
        color:white;  
    }
`;

const TBody = styled(TableRow)`
    & > td{
        font-size: 20px
    }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  console.log(users)

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  }


  return (
    <>
      <StyledTable>
        <TableHead>
          <THead>

            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>

          </THead>
        </TableHead>

        <TableBody>
          {
            users.map(user => {

              return (
                <TBody>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button color="primary" variant="contained" component={Link} to={`/edit/${user._id}`} style={{ marginRight: 10 }} >Edit</Button>
                    <Button color="secondary" variant="contained" >Delete</Button>
                  </TableCell>
                </TBody>
              )
            })
          }
        </TableBody>
      </StyledTable>
    </>
  )
}

export default AllUsers