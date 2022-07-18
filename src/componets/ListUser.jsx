import DataTable from "react-data-table-component";

const ListUser = ({ data, updateUser, deleteUser }) => {
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
          className="btn btn-info"
        >
          <i className="fas fa-user-edit"></i>
        </button>
      ),
      sortable: true,
      grow: 0,
    },
    {
      name: "Delete",
      selector: (d) => (
        <button
          type="button"
          onClick={() => deleteUser(d.id)}
          className="btn btn-danger"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      ),
      sortable: true,
      grow: 0,
    },
  ];
  return (
    <div className="containerList ">
      <DataTable
        columns={columnas}
        data={data}
        title={
          <div className="titleAndButton">
            <h2 className="createUser title">
              List<span>User</span>{" "}
            </h2>
            <button
              type="button"
              className="btn  newUser"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="fas fa-user-plus"></i>
            </button>
          </div>
        }
        pagination
      />
    </div>
  );
};

export default ListUser;
