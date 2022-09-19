import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Studentview() {
  const params = useParams();
  const [studentData, setStudentData] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    loadStudent();
  }, []);

  let loadStudent = async () => {
    try {
      setLoading(true);
      let student = await axios.get(
        `https://6290209e665ea71fe12da309.mockapi.io/student/${params.id}`
      );
      setStudentData(student.data);
      setLoading(false);
    } catch (error) {}
  };
  return (
    <>
      <h2>Student Name : {isLoading ? "Loading..." : studentData.name}</h2>
      <h3>Email Id : {isLoading ? "Loading..." : studentData.email}</h3>
      <h3>
        Phone Number : {isLoading ? "Loading..." : studentData.phoneNumber}
      </h3>
      <h3>Course : {isLoading ? "Loading..." : studentData.course}</h3>
      <h3>Mentor : {isLoading ? "Loading..." : studentData.mentor}</h3>
      <h3>ID : {isLoading ? "Loading..." : studentData.id}</h3>
    </>
  );
}

export default Studentview;
