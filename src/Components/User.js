import {useState} from "react";
const User = (props) => {

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h2>Name: {props.name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Contact: polinaidupodilapu2@gmail.com</h4>
    </div>
  );
};

export default User;
