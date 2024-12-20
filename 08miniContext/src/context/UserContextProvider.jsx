import React from 'react';
import UserContext from './UserContext';

function UserContextProvider({children}) {

    const [user,setuser]=React.useState(0)

  return (
    <UserContext.Provider value={{user,setuser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider