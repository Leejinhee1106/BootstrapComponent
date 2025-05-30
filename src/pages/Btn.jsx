import {Container, Row, Col} from 'react-bootstrap';

const Btn = () => {
    return(
        <>
        <Container>
            <Row className='mb-5'>
                <Col md={3}>
                    <h1 className="my-5">일반버튼</h1>
                    <button className='btn'>btn</button><br/>
                    <button className='btn btn-primary mb-2'>btn-primary</button><br/>
                    <button className='btn btn-secondary mb-2'>btn-secondary</button><br/>
                    <button className='btn btn-success mb-2'>btn-success</button><br/>
                    <button className='btn btn-info mb-2'>btn-info</button><br/>
                    <button className='btn btn-warning mb-2'>btn-warning</button><br/>
                    <button className='btn btn-danger mb-2'>btn-danger</button><br/>
                    <button className='btn btn-light mb-2'>btn-light</button><br/>
                    <button className='btn btn-link'>btn-link</button>
                </Col>
                <Col md={3}>
                    <h1 className="my-5">테두리버튼</h1>
                    <button className='btn btn-outline-primary mb-2'>btn-primary</button><br/>
                    <button className='btn btn-outline-secondary mb-2'>btn-secondary</button><br/>
                    <button className='btn btn-outline-success mb-2'>btn-success</button><br/>
                    <button className='btn btn-outline-info mb-2'>btn-info</button><br/>
                    <button className='btn btn-outline-warning mb-2'>btn-warning</button><br/>
                    <button className='btn btn-outline-danger mb-2'>btn-danger</button><br/>
                    <button className='btn btn-outline-light text-dark mb-2'>text-dark</button><br/>
                    <button className='btn btn-outline-light mb-2'>btn-light</button><br/>
                    <button className='btn btn-outline-dark mb-2'>btn-dark</button>
                </Col>
                <Col md={3}>
                    <h1 className="my-5">블록버튼</h1>
                    <div className='d-grid'>
                    <button className='btn btn-danger btn-block'>btn-block</button>
                    </div>
                </Col>
                <Col md={3}>
                    <h1 className="my-5">버튼사이즈</h1>
                    <button className='btn btn-success btn-sm mb-2'>btn-sm</button><br/>
                    <button className='btn btn-warning mb-2'>기본사이즈</button><br/>
                    <button className='btn btn-info btn-lg'>btn-lg</button>
                </Col>
            </Row>

            <Row>
                <Col>
                <h1>버튼 그룹</h1>
                <div className="d-flex justify-content-end my-5">
                    <div className="btn-group">
                        <button className='btn btn-outline-primary'>쓰기</button>
                        <button className='btn btn-outline-success'>수정</button>
                        <button className='btn btn-outline-danger'>삭제</button>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Btn;