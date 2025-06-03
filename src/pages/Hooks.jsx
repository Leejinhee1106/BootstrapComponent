import {Container, Row, Col} from 'react-bootstrap';
//Hooks
import React, {useState} from "react";//함수형 컴포넌트에 상태를 추적

const Hooks = () => {

const [car, setCar] = useState({
    brand : '빈폴',
    model : '리어카',
    year : '1960',
    color : 'black'
});

const updateColor = () => {
    setCar(previousState => {
        return{...previousState, color:'violet'} //...은 확산연산자
    });
};

const [color, setColor] = useState("red"); //초기값은 빨강색

    return(
        <>
        <Container>
            <Row>
                <Col md={12}>
                <h3>후크선장아니고 후크</h3>
                <p>
                - react 16.8버전에 추가<br/>
                - hooks를 사용하면 함수형 컴포넌트가 상태 및 기타 React기능에 접근 가능<br/>
                - 따라서 클래스형 컴포넌트가 더 이상 필요하진 않음
                </p>
                <p>
                <mark>**후크의 3가지 규칙**</mark><br/>
                1. 함수형 컴포넌트 내부에서만 호출 가능<br/>
                2. 구성 요소의 최상위 레벨에서만 호출 가능<br/>
                3. 조건적일 수 없다 x
                </p>
                <br/> 
                <h3>원숭이 엉덩이는 <span className='text-danger'>{color}</span>!</h3>
                <p>
                <button className='btn btn-primary'
                onClick={()=> setColor('blue')}>
                    파랑색
                </button>
                </p>
                <p>
                <button className='btn btn-danger'
                onClick={()=> setColor('red')}>
                    빨강색
                </button>
                </p>
                <p>
                <button className='btn btn-warning'
                onClick={()=> setColor('yellow')}>
                    노랑색
                </button>
                </p>
                <br/> 
                <h3>My {car.brand}</h3>
                <p>It is a {car.color} {car.model} from {car.year}.</p>
                <button onClick={updateColor}>violet</button>
                <br/><br/>
                <h3>리액트 이론에 가장 중요한 메모리 소요 방지.. [js 스프레드 연산자]</h3>
                <p>state가 업데이트가 되면 전체 상태를 덮어씌운다.<br/> 
                변경되는 것만 덮어씌울때!</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Hooks;