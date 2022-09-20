import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section3LeftPart from './Section3LeftPart'
import Section3RightPart from './Section3RightPart'
function Section3() {
  return (
    <div className=" py-2">
      <Container>
       
        <section class="banner-section " >
        <div >
            <Row g={3} sm={4} >
        <Col xxl={3} xl={4}>
            < Section3LeftPart/>
        </Col>
        <Col xxl={9} xl={8}>< Section3RightPart/></Col>
        

   </Row>
</div>
</section>
 </Container></div>
);
}
export default Section3;