import React from "react";

export default function Readonlyrow({
  x,
  handleEditClick,
  contact,
  setContact,
}) {
  const handleRemove = (contactid) => {
    const newcontacts = [...contact];

    const index = contact.findIndex((x) => x.id === contactid);
    newcontacts.splice(index, 1);
    
    setContact(newcontacts);
  };
  return (
    <tr>
      <td>{x.fullName}</td>
      <td>{x.address}</td>
      <td>{x.phoneNumber}</td>
      <td>{x.email}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, x)}>
          Edit
        </button>
        <button type="button" onClick={() => handleRemove(contact.id)}>
          Remove
        </button>
      </td>
    </tr>
  );
}
