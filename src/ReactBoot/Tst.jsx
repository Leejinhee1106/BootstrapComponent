import {useState} from 'react';
import {Container, Row, Col, Form, Toast, ToastContainer} from 'react-bootstrap';

const Tst = () => {

    const [position, setPosition] = useState('top-start'); //처음 페이지가 로드될 때, 상단에 왼쪽이 포지션 초기값이라는 말
    const [show, setShow] = useState(true);

    return(
        <>
        <Container fluid>
            <Row>
                <Col lg="12" md="12" sm="12">
                    <h3 className='mt-4 mb-2'>토스트 포지션 변경 by 셀렉트변경</h3>
                    <label htmlFor="selectToastPlacement">Toast Position</label>
                    <Form.Select onChange={(e) => setPosition(e.currentTarget.value)}>
                        {[
                            'top-start','top-center','top-end',
                            'middle-start','middle-center','middle-end',
                            'bottom-start','bottom-center','bottom-end'
                        ].map((p) => (
                            <option key={p} value={p}>
                                {p}
                            </option>
                        ))}
                    </Form.Select>
                    <div
                    className='bg-warning position-relative'
                    style={{minHeight:'240px'}}>  
                    <ToastContainer
                    className='p-3'
                    position={position}
                    style={{zIndex: 1}}>
                        <Toast show={show} onClose={() => setShow(false)}>
                            <Toast.Header closeButton>
                                <strong className='me-auto'>이삭토스트</strong>
                            </Toast.Header>
                            <Toast.Body>
                                Lorem enim aliqua cillum cupidatat incididunt consectetur anim id Lorem.
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Tst;

/*
.map() : 자바스크립트에서 배열의 각 요소를 순회하면서 콜백함수를 적용하고 그 결과로 새로운 배열을 만들어 반환하는 방식.
 => 특징: 원래 배열상태가 바뀌지 않는다
*/