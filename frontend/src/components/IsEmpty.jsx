import React from "react";
import {IoAlertCircleSharp} from 'react-icons/io5';
import '../styles/IsEmpty.css'

function IsEmpty({text}) {
  return (
    <section className="empty-container">
      <IoAlertCircleSharp className="ion-icon" />
      <h3>{text} Empty</h3>
    </section>
  );
}

export default IsEmpty;
