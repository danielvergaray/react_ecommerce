import React from 'react'
import { useState } from 'react';

const UserContextProvider = ({children}) => {

    const [userData, setUserData] = useState({
        user: "",
        pass: "",
      });

  return (
    <UserContextProvider value={userData}>
        {children}
    </UserContextProvider>
  )
}

export default UserContextProvider