import React from "react";
import { deleteUserAccount } from "./firebaseConfig"; // Update the path accordingly

const DeleteButton = () => {
  return (
    <button onClick={deleteUserAccount}>
      Delete My Account
    </button>
  );
};

export default DeleteButton;
