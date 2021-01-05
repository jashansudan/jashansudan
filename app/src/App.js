import { Container } from "react-bootstrap";
import Icons from "./components/Icons";
import ProfilePic from "./components/ProfilePic";
import Resume from "./components/Resume";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  return (
    <div className="App center-screen">
      <Container>
        <ProfilePic></ProfilePic>
        <Summary></Summary>
        <Icons></Icons>
        <Resume></Resume>
      </Container>
    </div>
  );
}

export default App;
