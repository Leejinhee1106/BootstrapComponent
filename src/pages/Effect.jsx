import {Container, Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from "react";
//useEffect를 사용하면 컴포넌트에 부수적인 작용 수행 가능(데이터, 타이머 등)

const Effect = () => {

const[count, setCount] = useState(0);
const[calculation, setCalculation] = useState(0);

useEffect(() => {
   /* setTimeout(() => {
        setCount((count) => count + 1);
    }, 1000); */ //1초 뒤에 1씩 증가해
    setCalculation(() => count * 2);
},[count]);/* empty []을 사용해야 함 => 한번만 사용되고 끝 */

    return(
        <>
        <Container>
            <Row>
                <Col md={12}>
                <h1>I Have rendered {count} times!</h1>
                <button onClick={() => setCount((c) => c + 1 )} className='btn btn-outline-success'>
                + </button>
                <p className='display-3 text-success'>Calculation:{calculation}</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Effect;