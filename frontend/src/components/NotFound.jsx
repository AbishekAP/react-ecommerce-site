import React from "react";
import {IoAlertCircleSharp} from 'react-icons/io5';
import '../styles/NotFound.css'

function NotFound({text}) {
  return (
    <section className="notfound-container">
      <IoAlertCircleSharp className="ion-icon" />
      <h3>{text ? text : 'Not Found'}</h3>
    </section>
  );
}

export default NotFound;
