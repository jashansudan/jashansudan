import { Container, Row } from "react-bootstrap";
import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png";
import Icon from "./Icon";

export default function Icons() {
  return (
    <Container>
      <Row className="mx-auto my-5" style={{ flex: "1", width: "200px" }}>
        <Icon
          urlLink="github.com/jashansudan"
          urlRedirect="https://www.github.com/jashansudan"
          imageSource={github}
          altText="Github"
        ></Icon>
        <Icon
          urlLink="linkedin.com/in/jashansudan"
          urlRedirect="https://www.linkedin.com/in/jashansudan"
          imageSource={linkedin}
          altText="linkedin"
        ></Icon>
        <Icon
          urlLink="jashansudan@gmail.com"
          urlRedirect="mailto:jashansudan@gmail.com"
          imageSource={mail}
          altText="mail"
        ></Icon>
      </Row>
    </Container>
  );
}
