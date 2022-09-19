import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function EditStudent() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
        email: "",
        name: "",
        phoneNumber: "",
        course: "",
        mentor: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.email === "") errors.email = "please enter email";
      if (values.name === "") errors.name = "please enter user name";
      if (values.phoneNumber === "")
        errors.phoneNumber = "please enter phone number";
      if (values.course === "") errors.course = "please enter course name";
      if (values.mentor === "") errors.mentor = "please enter mentor name";
      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://6290209e665ea71fe12da309.mockapi.io/student/${params.id}`,
        values
      );
      alert("student edited");
      navigate("/students");
    },
  });

  useEffect(() => {
    loadStudent();
  }, []);

  let loadStudent = async () => {
    try {
      let student = await axios.get(
        `https://6290209e665ea71fe12da309.mockapi.io/student/${params.id}`
      );
      formik.setValues({
        name: student.data.name,
        email: student.data.email,
        phoneNumber: student.data.phoneNumber,
        course: student.data.course,
        mentor: student.data.mentor,
      });
    } catch (error) {}
  };

  return (
    <>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label>Student Name</label>
              <input
                className={`form-control ${
                  formik.errors.name ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
              />
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6">
              <label>Email</label>
              <input
                className={`form-control ${
                  formik.errors.company ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
              />
              <span style={{ color: "red" }}>{formik.errors.company}</span>
            </div>
            <div className="col-lg-6">
              <label>Phone Number</label>
              <input
                className={`form-control ${
                  formik.errors.price ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                name="phoneNumber"
              />
              <span style={{ color: "red" }}>{formik.errors.price}</span>
            </div>
            <div className="col-lg-6">
              <label>Course</label>
              <input
                className={`form-control ${
                  formik.errors.course ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.course}
                onChange={formik.handleChange}
                name="course"
              />
              <span style={{ color: "red" }}>{formik.errors.color}</span>
            </div>
            <div className="col-lg-6">
              <label>Mentor</label>
              <input
                className={`form-control ${
                  formik.errors.mentor ? "input-error" : ""
                }`}
                type={"text"}
                value={formik.values.mentor}
                onChange={formik.handleChange}
                name="mentor"
              />
              <span style={{ color: "red" }}>{formik.errors.color}</span>
            </div>
            <div className="col-lg-6">
              <input
                className="btn btn-primary mt-2"
                type={"submit"}
                value="Submit"
                disabled={!formik.isValid}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditStudent;
