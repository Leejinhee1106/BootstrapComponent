import {Container, Row, Col} from 'react-bootstrap';

const Flex1 = () => {
    return(
        <>
        <Container>
            <Row><Col><h1><i>크기 & 성장 & 수축</i></h1></Col></Row>
            <Row className='my-5'>
                <Col md={4}>
                <h3>Equals Widths</h3>
                <div className="d-flex">
                    <div className="p-2 bg-danger flex-fill text-white">one</div>
                    <div className="p-2 bg-warning flex-fill">two</div>
                    <div className="p-2 bg-info flex-fill">three</div>
                </div>
                </Col>

                <Col md={4}>
                <h3>Flex-grow-1</h3>
                <div className="d-flex">
                    <div className="p-2 bg-danger text-white flex-grow-1">one</div>
                    <div className="p-2 bg-warning">two</div>
                    <div className="p-2 bg-info flex-grow-1">three</div>
                </div>
                </Col>
                
                <Col md={4}>
                    <h3>Order(숫자가 낮은 것이 내림차순)</h3>
                    <div className="d-flex bg-dark text-white">
                        <div className="--2 bg-success order-3">Three</div>
                        <div className="--2 bg-warning order-2">Two</div>
                        <div className="--2 bg-danger order-1">One</div>
                    </div>
                </Col>
            </Row>

            <hr className='my-5'/>

            <Row><Col><h1><i>콘텐츠 정당화</i></h1></Col></Row>
            <Row className='my-5'>
                <Col md={4}>
                <h3>Justify-content-start</h3>
                <div className="d-flex justify-content-start bg-secondary text-white">
                    <div className="p-2 bg-black">flex item 1</div>
                    <div className="p-2 bg-white text-black">flex item 2</div>
                    <div className="p-2 bg-black">flex item 3</div>
                </div>
                </Col>
                <Col md={4}>
                <h3>Justify-content-center</h3>
                <div className="d-flex justify-content-center bg-secondary text-white">
                    <div className="p-2 bg-black">flex item 1</div>
                    <div className="p-2 bg-white text-black">flex item 2</div>
                    <div className="p-2 bg-black">flex item 3</div>
                </div>
                </Col>
                <Col md={4}>
                <h3>Justify-content-end</h3>
                <div className="d-flex justify-content-end bg-secondary text-white">
                    <div className="p-2 bg-black">flex item 1</div>
                    <div className="p-2 bg-white text-black">flex item 2</div>
                    <div className="p-2 bg-black">flex item 3</div>
                </div>
                </Col>
            </Row>
            
             <Row className='justify-content-center'>
                <Col md={4}>
                <h3>Justify-content-between</h3>
                <div className="d-flex justify-content-between bg-secondary text-white">
                    <div className="p-2 bg-black">flex item 1</div>
                    <div className="p-2 bg-white text-black">flex item 2</div>
                    <div className="p-2 bg-black">flex item 3</div>
                </div>
                </Col>
                <Col md={4}>
                <h3>Justify-content-around</h3>
                <div className="d-flex justify-content-around bg-secondary text-white">
                    <div className="p-2 bg-black">flex item 1</div>
                    <div className="p-2 bg-white text-black">flex item 2</div>
                    <div className="p-2 bg-black">flex item 3</div>
                </div>
                </Col>
            </Row>
            
            <hr className='my-5'/>

            <Row>
                <Col md={4}>
                <h1>Basic</h1>
                <div className="d-flex p-3 bg-secondary text-white">
                    <div className="p-2 bg-black">flex item 1</div>
                    <div className="p-2 bg-white text-black">flex item 2</div>
                    <div className="p-2 bg-black">flex item 3</div>
                </div>
                </Col>
                <Col md={4}>
                <h1>Inline-flex</h1>
                <div className="d-inline-flex p-3 bg-secondary text-white">
                    <div className="p-2 bg-black">flex item 1</div>
                    <div className="p-2 bg-white text-black">flex item 2</div>
                    <div className="p-2 bg-black">flex item 3</div>
                </div>
                </Col>
                <Col md={4}>
                <h1>Flex-row</h1>
                <div className="d-flex flex-row bg-secondary text-white">
                    <div className="p-2 bg-black">flex item 1</div>
                    <div className="p-2 bg-white text-black">flex item 2</div>
                    <div className="p-2 bg-black">flex item 3</div>
                </div>
                </Col>
            </Row>
            
            <hr className='my-5'/>
            
            <Row>
             <Col md={4}>
                <h3>Flex-row-reverse</h3>
                <div className="d-flex flex-row-reverse bg-secondary">
                    <div className="p-2 bg-black text-white">flex item 1</div>
                    <div className="p-2 bg-white text-black">flex item 2</div>
                    <div className="p-2 bg-black text-white">flex item 3</div>
                </div>
            </Col>
             <Col md={4}>
                <h3>Flex-column : 내림차순</h3>
                <div className="d-flex flex-column bg-secondary text-white">
                    <div className="p-2 bg-black">flex item 1</div>
                    <div className="p-2 bg-white text-black">flex item 2</div>
                    <div className="p-2 bg-black">flex item 3</div>
                </div>
            </Col>
             <Col md={4}>
                <h3>Flex-column-reverse : 오름차순</h3>
                <div className="d-flex flex-column-reverse bg-secondary text-white">
                    <div className="p-2 bg-black">flex item 1</div>
                    <div className="p-2 bg-white text-black">flex item 2</div>
                    <div className="p-2 bg-black">flex item 3</div>
                </div>
            </Col>
            </Row>
        </Container>
        </>
    );
}
export default Flex1;