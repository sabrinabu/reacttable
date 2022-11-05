import React from "react";

export default function Editablerow({
  contact,
  setContact,
  editFormData,
  setEditFormData,
  setEidtContactId,
  editContactId,
  handleCancel
}) {
  const handleValue = (e) => {
    e.preventDefault();
    const inputName = e.target.getAttribute("name");
    const inputValue = e.target.value;
    const newFormData = { ...editFormData }; //object modde spread operator
    console.log(newFormData);
    newFormData[inputName] = inputValue;
    setEditFormData(newFormData);
  };

  const handleEditForm = (e) => {
    e.preventDefault();
    const editContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
    console.log(editContactId);
    const editContacts = [...contact];
    const index = contact.findIndex((x) => x.id === editContactId);
    editContacts[index] = editContact;
    console.log(editContacts);
    setContact(editContacts);
    setEidtContactId(null);
  };

  return (
    <tr>
      <td>
        {" "}
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name"
          value={editFormData.name}
          onChange={handleValue}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address"
          value={editFormData.address}
          onChange={handleValue}
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleValue}
        />
      </td>
      <td>
        {" "}
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter a email"
          value={editFormData.email}
          onChange={handleValue}
        />
      </td>
      <td>
        <button type="button" onClick={handleEditForm}>
          Save
        </button>
        <button type="button" onClick={handleCancel}>
          cancel
        </button>
      </td>
    </tr>
  );
}
