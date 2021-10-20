import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SERVER } from "../../config";
import axios from "axios";
import "./student.css";

const Student = ({ setPage }) => {
  const [accending, setAccending] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(SERVER + "student");
        const contacts = data.students || [];
        setContacts(contacts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const current = [...contacts];
    current.sort((a, b) =>
      accending
        ? a.lastName > b.lastName
          ? 1
          : -1
        : a.lastName < b.lastName
        ? 1
        : -1
    );
    setContacts(current);
  }, [accending, contacts]);

  const filter = search
    ? contacts.filter(
        (cur) =>
          cur.firstName.toLowerCase().includes(search.toLowerCase()) ||
          cur.lastName.toLowerCase().includes(search.toLowerCase())
      )
    : contacts;

  return (
    <div className="student__container">
      <div className="student">
        <input
          type="text"
          className="search"
          placeholder="Search for a student by name or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="info">
          <div className="info__left">{filter.length} Students found</div>
          <Link
            className="info__right"
            to="../students/add-a-new-student"
            onClick={() => setPage("students/add a new student")}
          >
            Add a new student
          </Link>
        </div>
        <div className="sort" onClick={() => setAccending(!accending)}>
          <span>Sort by: Name (A-Z) </span>
          {accending ? <span>&or;</span> : <span>&and;</span>}
        </div>
        <div className="list">
          {filter.map((cur, index) => (
            <Link
              className="contact"
              key={index}
              to={`../students/${cur.id}`}
              onClick={() =>
                setPage(`students/${cur.firstName} ${cur.lastName}`)
              }
            >
              <div className="contact__name">
                {cur.firstName} {cur.lastName}
              </div>
              <div className="contact__id">{cur.id}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Student;
