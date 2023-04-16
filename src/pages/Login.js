import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [emailInput , setEmailInput ] = useState("")
    const [passW, setPassW] = useState("")
    const [isValid , setIsValid] = useState(true)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let users = JSON.parse(localStorage.getItem('users'))
        if (users) {
            let present = users.findIndex((user) => user.email === emailInput && user.password === passW)
            if (present === -1) {
                setIsValid(false)
                setEmailInput("")
                setPassW("")
            } else {
                let current = users[present].name
                localStorage.setItem('currentUser' , JSON.stringify(current))
                alert(current + " has logged in")
                navigate("/")
            }
        } else {
            setIsValid(false)
            setEmailInput("")
            setPassW("")
        }


    }

    const handleMove = () => {
        navigate('/register')
    }


  return (
    <div>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6} className="mt-4">
            <h3>Login</h3>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                 value={emailInput} onChange={(e) => setEmailInput(e.target.value)}/>                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                value={passW} onChange={(e) => setPassW(e.target.value)}/>
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
            <Col></Col>
            <Col>
            {isValid === false ? <p>Invalid email or password</p> : null}
            <br />
            <p onClick={handleMove} style={ { cursor: "pointer"}}>Not registered yet ? Click here</p>
            </Col>
            <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login