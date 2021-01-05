import { Col, Container, Image, Row } from "react-bootstrap";
import profile from "../images/profile.jpg";

export default function ProfilePic() {
  return (
    <Row className="justify-content-center align-self-center">
      <Col lg={4} md={4} sm={4}>
        <Container>
          <Image src={profile} alt="Profile Pic " roundedCircle fluid />
        </Container>
      </Col>
    </Row>
  );
}
