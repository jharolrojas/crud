import React, { useEffect, useState } from "react";
import useGetData from "../customHooks/useGetData";

const UserForm = ({ userSelect, setUserSelect }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const { createUser, updateUser, getData } = useGetData();

  console.log(userSelect);
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
      getData();
    } else {
      createUser(user);
      reset();
      getData();
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
    getData();
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              <h2 className="createUser">
                Crate<span>User</span>{" "}
              </h2>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="formUser" onSubmit={createUserObjec} >
              <div className="completeName  d-flex justify-content-evenly">
                <div className="p-1">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    className="inputCompleteName"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="p-1">
                  <label htmlFor="lastName">LastName</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    className="inputCompleteName"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="p-1">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  className="col-12"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="p-1">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  className="col-12"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="email p-1">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  className="col-12"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary m-1">Update</button>
                <button onClick={reset } className="btn btn-danger m-1">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
