import {Container, Row, Col} from 'react-bootstrap';

const Img = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={4}>
                <h1 className="display-1">야옹🐱‍👤</h1>
                    <img src="../img/이거다2.png" alt="파리" className='rounded'
                    style={{ width: '400px', height: '500px'}}/>
                </Col>
                <Col md={4}>
                <h1 className="display-1">부끄로🐱‍🚀</h1>
                    <img src="../img/imagee.jpg" alt="파리" className='rounded-circle'
                    style={{ width: '400px', height: '500px'}}/>
                </Col>
                <Col md={4}>
                <h1 className="display-1">컹🐱‍👓</h1>
                    <img src="../img/sleeping.jpg" alt="파리" className='img-thumbnail'
                    style={{ width: '400px', height: '200px'}}/>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Img;