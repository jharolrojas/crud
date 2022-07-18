import "./App.css";
import { useEffect, useState } from "react";
import UserForm from "./componets/UserForm";
import ListUser from "./componets/ListUser";
import useGetData from "./customHooks/useGetData";


function App() {
  const { data, createUser, deleteUser, updateUser, getData ,setData } = useGetData();

  const [userSelect, setUserSelect] = useState(null);

  const selectUser = (d) => {
    setUserSelect(d);
  };


  return (
    <div className="App">
       <h2 className="createUser title m-5">
         Admin<span>User</span>{" "}
     </h2>
      <UserForm 
      
        userSelect={userSelect} 
        setUserSelect={setUserSelect} 
        createUser={createUser} 
        updateUser={updateUser}
      />
      <ListUser 
        data={data}
        updateUser={selectUser}  
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
