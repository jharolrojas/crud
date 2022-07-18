import React, { useEffect, useState } from "react";
import FormUser from "./FormUser";

const UserForm = ({ userSelect, setUserSelect, createUser, updateUser }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");

  const createUserObjec = (e) => {
    e.preventDefault();

    const user = {
      first_name: name,
      last_name: lastName,
      password,
      birthday: date,
      email,
    };
    if (userSelect !== null) {
      updateUser(userSelect.id, user);
      reset();
    } else {
      createUser(user);
      reset();
    }
  };
  useEffect(() => {
    if (userSelect !== null) {
      setName(userSelect.first_name);
      setLastName(userSelect.last_name);
      setPassword(userSelect.password);
      setEmail(userSelect.email);
      setDate(userSelect.birthday);
    }
  }, [userSelect]);
  const reset = () => {
    setName("");
    setLastName("");
    setPassword("");
    setEmail("");
    setDate("");
    setUserSelect(null);
  };

  return (
    <>
      <FormUser
        createUserObjec={createUserObjec}
        userSelect={userSelect}
        setUserSelect={setUserSelect}
        reset={reset}
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        password={password}
        setPassword={setPassword}
        date={date}
        setDate={setDate}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
};

export default UserForm;
