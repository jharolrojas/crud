import "./App.css";
import { useState } from "react";
import UserForm from "./componets/UserForm";
import ListUser from "./componets/ListUser";

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const updateUser = (d) => {
    setUserSelect(d);
  };

  return (
    <div className="App">
      
      <UserForm userSelect={userSelect} setUserSelect={setUserSelect} />
      <ListUser updateUser={updateUser} />
    </div>
  );
}

export default App;
