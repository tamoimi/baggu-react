import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Login() {
  return (
    <div className="loginContainer">
       <Form className='loginBox'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>아이디</Form.Label>
        <Form.Control size="lg" type="email" placeholder="아이디를 입력하세요." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control size="lg" type="password" placeholder="비밀번호를 입력하세요" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>

      <Button variant="dark" type="submit">
        로그인
      </Button>
      {" "}{" "}{" "}{" "}
      <Button variant="dark" type="Input">
        회원가입
      </Button>
    </Form>
    </div>
  )
}
