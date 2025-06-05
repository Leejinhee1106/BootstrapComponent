import {Container, Row, Col, Figure} from 'react-bootstrap';

const Fig = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <Figure>
                        <Figure.Image
                        width={171} height={180} alt="171*180"
                        src="img/imagee.jpg"/>
                        <Figure.Caption className='text-center'>
                            숨바꼭질중🤦‍♀️
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Fig;