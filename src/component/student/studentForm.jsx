import React from "react";
import Input from "./input";
import "./student.css";

const StudentForm = ({
  contactDetail,
  setContactDetail,
  handleOnSubmit,
  error,
  add,
}) => {
  const handleOnChange = (e) => {
    const current = { ...contactDetail };
    // console.log(e.target);
    const { id, value } = e.target;
    current[id] = value;
    setContactDetail(current);
  };

  return (
    <form className="student__edit" onSubmit={handleOnSubmit}>
      {add && <div className="student__new">Add a new student</div>}
      <Input
        error={error.firstName}
        title="First name"
        id="firstName"
        value={contactDetail.firstName}
        onChange={handleOnChange}
      />
      <Input
        error={error.lastName}
        title="Last name"
        id="lastName"
        value={contactDetail.lastName}
        onChange={handleOnChange}
      />
      <div className="edit__gender">
        <div className={`edit__label ${error.gender && "error"}`}>Gender *</div>
        <input
          type="radio"
          id="male"
          className="radio__button"
          checked={contactDetail.gender === "male"}
          onChange={() =>
            setContactDetail((prev) => ({ ...prev, gender: "male" }))
          }
        />
        <label htmlFor="male" className="radio__label">
          Male
        </label>
        <input
          type="radio"
          id="female"
          className="radio__button"
          checked={contactDetail.gender === "female"}
          onChange={() =>
            setContactDetail((prev) => ({ ...prev, gender: "female" }))
          }
        />
        <label htmlFor="female" className="radio__label">
          Female
        </label>
        {error.gender && <div className="error-message">Enter gender</div>}
      </div>

      <Input
        error={error.age}
        title="Age"
        id="age"
        value={contactDetail.age}
        onChange={handleOnChange}
        type="number"
        min={18}
        steps={1}
      />
      <Input
        error={error.eyeColor}
        title="Eye Color"
        id="eyeColor"
        value={contactDetail.eyeColor}
        onChange={handleOnChange}
      />
      <Input
        error={error.handedness}
        title="Handedness"
        id="handedness"
        value={contactDetail.handedness}
        onChange={handleOnChange}
      />
      <button className="submit">{add ? "Add student" : "Update"}</button>
    </form>
  );
};

export default StudentForm;
