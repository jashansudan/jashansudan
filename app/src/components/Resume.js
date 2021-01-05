import { Container, Row } from "react-bootstrap";

export default function Resume() {
  return (
    <Container>
      <Row className="justify-content-center align-self-center mx-auto my-5">
        <a href={process.env.PUBLIC_URL + "/Jashan_Sudan_Resume.pdf"}>
          <h4 style={{ fontStyle: "italic" }}>Resume </h4>
        </a>
      </Row>
    </Container>
  );
}
