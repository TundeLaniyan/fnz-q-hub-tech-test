import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER } from "../../config";
import "./student.css";
import StudentForm from "./studentForm";

const EditStudent = ({ match }) => {
  const { id } = match.params;
  const defaultDetail = {
    firstName: "",
    lastName: "",
    gender: "",
    age: 0,
    eyeColor: "",
    handedness: "",
  };
  const [contactDetail, setContactDetail] = useState(defaultDetail);
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${SERVER}student/${id}`);
        const contactDetail = data.student || {};
        setContactDetail(contactDetail);
      } catch (error) {}
    };
    fetchData();
  }, [id]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const error = {};
    Object.entries(contactDetail).forEach(([key, value]) => {
      if (!value) error[key] = key;
    });
    setErrorMessage(error);
    if (Object.keys(error).length) return;
    try {
      await axios.post(`${SERVER}student/${id}`, contactDetail);
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
    />
  );
};

export default EditStudent;
