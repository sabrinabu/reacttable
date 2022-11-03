
import { useState } from 'react';
import './App.css';
import data from './data.json';

function App() {
  const[contact, setContact]=useState(data);
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
     
      {contact.map((x)=>(
        <tr>
        <td>{x.fullName}</td>
        <td>{x.address}</td>
        <td>{x.phoneNumber}</td>
        <td>{x.email}</td>
        </tr>
      ))}
       
    
    </tbody>
   </table>
    </div>
  );
}

export default App;
