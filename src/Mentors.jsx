import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Mentors() {
    const [students, setStudents] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        loadData();
      }, []);
    
      let loadData = async () => {
        setLoading(true);
        let student = await axios.get(
          "https://6290209e665ea71fe12da309.mockapi.io/student"
        );
        setStudents(student.data);
        setLoading(false);
      };
  return (
    <>
        <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Mentors</h1>
      </div>
      {isLoading ? (
        <div className="mx-auto" style={{ width: "200px" }}>
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              Student's list frp Mentor's
            </h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
                style={{ textAlign: "center" }}
              >
                <thead>
                  <tr>
                    <th>MENTOR 1</th>
                    <th>MENTOR 2</th>
                    <th>MENTOR 3</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => {
                    if(student.mentor === "mentor 1")
                    return (
                      <tr key={index}>
                        <td>{student.name}</td>
                        <td>{}</td>
                        <td>{}</td>
                      </tr>
                    );
                    if(student.mentor === "mentor 2")
                    return (
                      <tr key={index}>
                        <td>{}</td>
                        <td>{student.name}</td>
                        <td>{}</td>
                      </tr>
                    );
                    if(student.mentor === "mentor 3")
                    return (
                      <tr key={index}>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{student.name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Mentors