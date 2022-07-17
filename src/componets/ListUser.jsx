import React, { useState } from "react";
import DataTable from "react-data-table-component";
import useGetData from "../customHooks/useGetData";

const ListUser = ({ updateUser }) => {
  const { datos, deleteUser } = useGetData();
  const [dataUser, setDataUser] = useState(datos);

  const columnas = [
    {
      name: "Name",
      selector: (d) => `${d.first_name}`,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (d) => `${d.last_name}`,
      sortable: true,
    },
    {
      name: "Email",
      selector: (d) => `${d.email}`,
      sortable: true,
    },
    {
      name: "Birthday",
      selector: (d) => `${d.birthday}`,
      sortable: true,
    },
    {
      name: "Update",
      selector: (d) => (
        <button
          type="button"
          onClick={() => updateUser(d)}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          class="btn btn-info"
        >
          <i class="fas fa-user-edit"></i>
        </button>
      ),
      sortable: true,
    },
    {
      name: "Delete",
      selector: (d) => (
        <button
          type="button"
          onClick={() => deleteUser(d.id)}
          class="btn btn-danger"
        >
          <i class="fas fa-trash-alt"></i>
        </button>
      ),
      sortable: true,
    },
  ];
  return (
    <div className="x col-6">
      <DataTable
        columns={columnas}
        data={datos}
        title={
          <div className="titleAndButton">
            <h2 className="createUser">
              List<span>User</span>{" "}
            </h2>
            <button
              type="button"
              class="btn  newUser"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i class="fas fa-user-plus"></i>
            </button>
          </div>
        }
        pagination
      />
    </div>
  );
};

export default ListUser;
