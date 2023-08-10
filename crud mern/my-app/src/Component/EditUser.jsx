import { useState,useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { addUser,getUser } from '../Service/api';


const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
}

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% 0 0 25%;
  & > div {
      margin-top: 20px;
`;


const EditUser = () => {
  const [user, setUser] = useState(initialValue);

  let navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    loadUserDetails();
  })

  const loadUserDetails = async () =>{
    const response = await getUser(id);
    setUser(response.data);

  }

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
}

const addUserDetails = async() => {
  await addUser(user);
  navigate('/all');
}

  return (
   <>
         <Container>
            <Typography variant="h4">Edit Employees</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={user.name}  />
               
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' />
              
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' />
           
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' />
               
            </FormControl>
            <FormControl>
            <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
   </>
  )
}

export default EditUser