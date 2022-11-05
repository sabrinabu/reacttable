import { useState, Fragment } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import Editablerow from "./components/Editablerow";
import Readonlyrow from "./components/Readonlyrow";
import data from "./data.json";

function App() {
  const [contact, setContact] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEidtContactId] = useState(null);

  const handleValue = (e) => {
    e.preventDefault();
    const inputName = e.target.getAttribute("name");
    const inputValue = e.target.value;
    const newFormData = { ...addFormData }; //object modde spread operator
    console.log(newFormData);
    newFormData[inputName] = inputValue;
    console.log(newFormData[inputName]);
    setAddFormData(newFormData);
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    const newContacts = [...contact, newContact];
    setContact(newContacts);
  };

  const handleEditClick=(e, contact)=>{
    e.preventDefault();
    setEidtContactId(contact.id);

    const formValues={
      fullName:contact.fullName,
      address:contact.address,
      phoneNumber:contact.phoneNumber,
      email:contact.email,
    }
    setEditFormData(formValues);
  }


  const handleCancel=()=>{
    setEidtContactId(null);
  }

  return (
    <div className="app-container">
      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contact.map((x) => (
              <Fragment>
                {editContactId === x.id ? (
                  <Editablerow contact={contact} setContact={setContact} editFormData={editFormData} setEditFormData={setEditFormData} setEidtContactId={setEidtContactId} editContactId={editContactId} handleCancel={handleCancel}/>
                ) : (
                  <Readonlyrow x={x}  handleEditClick={handleEditClick} contact={contact} setContact={setContact} />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name"
          onChange={handleValue}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address"
          onChange={handleValue}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phoneNumber"
          onChange={handleValue}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter a email"
          onChange={handleValue}
        />
        <button onClick={handleAddForm}>Add</button>
      </form>
    </div>
  );
}

export default App;
