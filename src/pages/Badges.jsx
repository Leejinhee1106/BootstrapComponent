import {Container, Row, Col} from 'react-bootstrap';

const Badges = () => {
    return(
        <>
        <Container className='mt-4'>
            <Row>
                <Col md={6}>
                    <h1>뱃지</h1>
                    <span className='badge rounded-pill bg-primary'>bg-primary</span><br/>
                    <span className='badge rounded-pill bg-warning'>bg-warning</span><br/>
                    <span className='badge rounded-pill bg-secondary'>bg-secondary</span><br/>
                    <span className='badge rounded-pill bg-success'>bg-success</span><br/>
                    <span className='badge rounded-pill bg-info'>bg-info</span><br/>
                    <span className='badge rounded-pill bg-danger'>bg-danger</span><br/>
                    <span className='badge rounded-pill bg-light text-dark'>bg-light</span><br/>
                    <span className='badge rounded-pill bg-dark'>bg-dark</span><br/>
                </Col>

                <Col md={6}>
                뱃지 활용법<br/>
                    <button className='btn btn-outline-danger'>
                        Youtube <span className='badge bg-danger'>4</span>
                    </button>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Badges;