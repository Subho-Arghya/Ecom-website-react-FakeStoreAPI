import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passW, setPassW] = useState("");
  const [userName, setUserName] = useState("")

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = { email: emailInput, password: passW , name: userName };
    let users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      let present = users.findIndex((user) => user.email === emailInput);
      if (present === -1) {
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        alert("Email id already registered");
      }
    } else {
      let userlist = [newUser];
      localStorage.setItem("users", JSON.stringify(userlist));
    }
    setEmailInput("");
    setPassW("");
    setUserName("")
    navigate("/login");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="mt-4">
            <h3>Register</h3>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={passW}
                  onChange={(e) => setPassW(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
