import { Container, Row } from "react-bootstrap";
export default function Summary() {
  return (
    <Container>
      <Row className="justify-content-center align-self-center my-2 mx-auto">
        <h1>
          <b>Jashan Sudan</b>
        </h1>
      </Row>
      <Row className="justify-content-center align-self-center my-2 mx-auto">
        <h4 style={{ color: "#A4A4A4", fontStyle: "Italic" }}>
          Software Engineer at Rubrik
        </h4>
      </Row>
    </Container>
  );
}
