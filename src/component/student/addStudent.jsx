import React, { useState } from "react";
import axios from "axios";
import "./student.css";
import StudentForm from "./studentForm";
import { SERVER } from "../../config";

const AddStudent = () => {
  const defaultDetail = {
    firstName: "",
    lastName: "",
    gender: "",
    age: 0,
    eyeColor: "",
    handedness: "",
    createdBy: "Mohammed Laniyan",
  };
  const [contactDetail, setContactDetail] = useState(defaultDetail);
  const [errorMessage, setErrorMessage] = useState({});

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const error = {};
    Object.entries(contactDetail).forEach(([key, value]) => {
      if (!value) error[key] = key;
    });
    setErrorMessage(error);
    console.log(error);
    if (Object.keys(error).length) return;
    try {
      await axios.post(`${SERVER}student`, contactDetail);
      window.location.pathname = "./students";
    } catch (error) {
      console.log(error);
      alert("Oops something went wrong");
    }
  };

  return (
    <StudentForm
      contactDetail={contactDetail}
      setContactDetail={setContactDetail}
      handleOnSubmit={handleOnSubmit}
      error={errorMessage}
      add={true}
    />
  );
};

export default AddStudent;
