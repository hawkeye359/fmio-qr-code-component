import styled from "styled-components";
import qrimage from "./image-qr-code.png";
const Wrapper = styled.div`
  margin-top: 3px;
  padding: 1rem;
  background: white;
  /* margin-top: 152px;
  margin-left: 560px; */
  width: 20rem;
  border-radius: 1rem;
  box-shadow: 0px 2px 20px 10px #ccd6df;
`;
const QrImage = styled.img`
  border-radius: 0.5rem;
  width: 100%;
`;
const Heading = styled.h1`
  margin-top: 1.35rem;
  font-size: 1.3rem;
  text-align: center;
  letter-spacing: 0.043rem;
  line-height: 1.71rem;
  color: hsl(218, 44%, 22%);
`;
const Paragraph = styled.p`
  font-size: 15px;
  margin-top: 0.95rem;
  text-align: center;
  letter-spacing: 0.01rem;
  margin-bottom: 1.55rem;
  color: hsl(220, 15%, 55%);
`;
function App() {
  return (
    <Wrapper>
      <QrImage src={qrimage} />
      <Heading>
        Improve your front-end <br /> skills by building projects
      </Heading>
      <Paragraph>
        Scan the QR code to visit Frontend <br />
        Mentor and take your coding skills to <br />
        the next level
      </Paragraph>
    </Wrapper>
  );
}

export default App;
