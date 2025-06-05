import {useState} from 'react';
import {Container, Row, Col, Button, Modal} from 'react-bootstrap';

const Modals = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <Button variant='primary' onClick={handleShow}>
                        실행
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>알림창</Modal.Title>
                            <Modal.Body>집에 가겠습니까?</Modal.Body>
                            <Modal.Footer>
                                하잇~~~~~~~~
                                <Button variant='danger' onClick={handleClose}>
                                    ㅇㅋ
                                </Button>
                                <Button variant='warning' onClick={handleClose}>
                                    ㅃㅇ
                                </Button>
                            </Modal.Footer>
                        </Modal.Header>
                    </Modal>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Modals;