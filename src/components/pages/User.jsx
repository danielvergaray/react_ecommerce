import React from 'react'
import { useParams } from 'react-router-dom'
import UserListContainer from '../user/UserListContainer';

const User = () => {
    const params = useParams();
  return (
    <UserListContainer/>
  )
}

export default User