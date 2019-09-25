import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const LoginForm = ({ values, errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div className="name-form">
      <Form>
        <Field type="text" name="username" placeholder="username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}

        <Field type="password" name="password" placeholder="password" />
        {<button type="submit">Login</button>}
      </Form>

      {user.map(data => (
        <ul key={data.id}>
          <li>Username: {data.username}</li>
          <li>Password:{data.password}</li>
        </ul>
      ))}
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ password, username }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
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
})(LoginForm);

console.log("This is the HOC", FormikLoginForm);
export default FormikLoginForm;
