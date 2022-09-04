const FormUser = ({
  createUserObjec,
  userSelect,
  reset,
  name,
  setName,
  lastName,
  setLastName,
  password,
  setPassword,
  date,
  setDate,
  email,
  setEmail,
  success,
  setSuccess
}) => {

 const  successValidations = () =>{
  setSuccess(true);
  setTimeout(function () {
    setSuccess(false)
  } , 3000)
 }
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              <div className="createUser title fontSize">
                {userSelect !== null ? (
                  <div>
                    Update<span>User</span>
                  </div>
                ) : (
                  <div>
                    Create<span>User</span>
                  </div>
                )}
              </div>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="formUser" onSubmit={createUserObjec}>
          
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
              { success && <span className="success">Success</span>}
              <div className="modal-footer">
             
                <button className="btn btn-primary m-1" onClick={successValidations}>
                  {userSelect !== null ? "Update" : "Create"}
                  
                </button>
                <button onClick={reset} className="btn btn-danger m-1">
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

export default FormUser;
