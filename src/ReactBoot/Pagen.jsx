/*
import { Pagination, Container, Row, Col } from "react-bootstrap";

let active = []; //변수 액티브에 index 2를 대입
let items = []; //변수 아이템들은 비워짐

for (let number = 1; number <= 5; number++){
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    )
}

const Pagen = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                <div className="d-flex justify-content-center">
                    <Pagination size="sm">{items}</Pagination> 
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination>{items}</Pagination>
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination size="lg">{items}</Pagination>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Pagen;
*/

import { useState } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';

const Pagen = () => {
    const [active, setActive] = useState(1); // 기본 선택은 1번

    const items = [];

    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => setActive(number)} // 클릭 시 active 변경
            >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <Container>
            <Row>
                <Col>
                <h1 className='my-4 text-center'>Pagination</h1>
                <div className="d-flex justify-content-center">
                    <Pagination size="sm">{items}</Pagination> 
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination>{items}</Pagination>
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination size="lg">{items}</Pagination>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Pagen;

/*
useState는 리액트 컴포넌트 함수 안에서만 사용 가능!!!!!!!!!!!!!!!!!!!!!!
*/