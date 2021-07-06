import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../CSS/Login.css";
131

// <script type="text/javascript">
//   function validateForm() {
//     var a = document.forms["Form"]["answer_a"].value;
//     var b = document.forms["Form"]["answer_b"].value;
//     var c = document.forms["Form"]["answer_c"].value;
//     var d = document.forms["Form"]["answer_d"].value;
//     if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "") {
//       alert("Please Fill All Required Field");
//       return false;
//     }
//   }
// </script>

// <form method="post" name="Form" onsubmit="return validateForm()" action="">
//   <textarea cols="30" rows="2" name="answer_a" id="a"></textarea>
//   <textarea cols="30" rows="2" name="answer_b" id="b"></textarea>
//   <textarea cols="30" rows="2" name="answer_c" id="c"></textarea>
//   <textarea cols="30" rows="2" name="answer_d" id="d"></textarea>
// </form>
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}