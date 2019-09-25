import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

// const initialValues = {
//   name: "",
//   role: "",
//   country: "",
//   email: "",
//   username: "",
//   password: ""
// };

const UserForm = ({ values, errors, touched, status }) => {
  const [coordinator, setCoordinator] = useState([]);

  useEffect(() => {
    if (status) {
      setCoordinator([...coordinator, status]);
    }
  }, [status]);

  return (
    <div className="animal-form">
      <Form>
        <Field type="text" name="name" placeholder="name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}

        <Field component="select" className="food-select" name="country">
          <option>Please Choose an Country</option>
          <option value="bolivia">Bolivia</option>
          <option value="brazil">Brazil</option>
          <option value="cambodia">Cambodia</option>
          <option value="colombia">Colombia</option>
          <option value="ecuador">Ecuador</option>
          <option value="el Salvador">El Salvador</option>
          <option value="ghana">Ghana</option>
          <option value="guatemala">Guatemala</option>
          <option value="haiti">Haiti</option>
          <option value="honduras">Honduras</option>
          <option value="kiribati">Kiribati</option>
          <option value="madagascar">Madagascar</option>
          <option value="mongolia">Mongolia</option>
          <option value="nicaragua">Nicaragua</option>
          <option value="paraguay">Paraguay</option>
          <option value="peru">Peru</option>
          <option value="philipines">Philipines</option>
          <option value="sierra Leone">Sierra Leone</option>
          <option value="zimbabwe">Zimbabwe</option>
        </Field>

        <Field type="text" name="role" placeholder="role" />
        {touched.role && errors.role && <p className="error">{errors.role}</p>}

        <Field type="email" name="email" placeholder="email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <Field type="text" name="username" placeholder="username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}

        <Field type="password" name="password" placeholder="password" />
        {<button /*onClick={() => resetForm(initialValues)}*/>Signup!</button>}
      </Form>
      {coordinator.map(data => (
        <ul key={data.id}>
          <li>Name: {data.name}</li>
          <li>Country:{data.country}</li>
          <li>Role:{data.role}</li>
          <li>Username:{data.username}</li>
        </ul>
      ))}
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ name, role, country, email, password, username }) {
    return {
      name: name || "",
      role: role || "",
      country: country || "",
      email: email || "",
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    role: Yup.string().required(),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    username: Yup.string().required(),
    password: Yup.string()
      .min(6, "Password has to be longer than 6 characters!")
      .required("Password is required!")
  }),
  //you can use this to see the values
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(response => {
        setStatus(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }
})(UserForm);

console.log("This is the HOC", FormikUserForm);
export default FormikUserForm;
