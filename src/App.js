import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [contact, setContact] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleValue=(e)=>{
   e.preventDefault();
   const inputName= e.target.getAttribute("name");
   const inputValue=e.target.value;
   const newFormData={...addFormData} //object modde spread operator
   console.log(newFormData);
   newFormData[inputName]=inputValue;
   setAddFormData(newFormData)
  }

  const handleAddForm=(e)=>{
    e.preventDefault();
    const newContact={
      fullName:addFormData.fullName,
      address:addFormData.address,
      phoneNumber:addFormData.phoneNumber,
      email:addFormData.email,
    }
    const newContacts=[...contact,newContact];
    setContact(newContacts);
  }
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((x) => (
            <tr>
              <td>{x.fullName}</td>
              <td>{x.address}</td>
              <td>{x.phoneNumber}</td>
              <td>{x.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add a Contact</h2>
      <form>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name" onChange={handleValue}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address" onChange={handleValue}
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
