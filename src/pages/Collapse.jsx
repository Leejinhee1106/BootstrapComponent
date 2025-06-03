import {Container, Row, Col} from 'react-bootstrap';

const Collapse = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={6} className='mb-5'>
                <h1>Accordion</h1>
                <div className="" id="accordion">
                    <div className="card">
                        <div className="card-header">
                            <a className='btn' data-bs-toggle='collapse' href='#collapseOne'>
                            one
                            </a>
                        </div>
                        <div id='collapseOne' className='collpase show' data-bs-parent="#accordion">
                            <div className="card-body">1도 모르겠습니다</div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <a className="btn" data-bs-toggle='collapse' href="#two">
                            two
                            </a>
                        </div>
                         <div id='two' className='collapse' data-bs-parent="#accordion">
                            <div className="card-body">2진희</div>
                        </div>
                    </div>
                </div>
                </Col>

                <Col md={6} className='mb-5'>
                <h1>Basic</h1>
                <button data-bs-toggle='collapse' data-bs-target='#demo'>
                    누르면 아래에 텍스트가..
                </button>
                <div className="collapse" id='demo'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex voluptas praesentium voluptatibus assumenda sed aspernatur dignissimos quasi provident veritatis!
                </div>
                </Col>

                <Col md={6} className='mb-5'>
                </Col>
                <Col md={6} className='mb-5'>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Collapse;