import {useState, useEffect, useRef} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

/*
useState : 상태를 관리하는 훅 
useEffect : 특정 상태가 변경될 때 일어나는 부수적인 효과(side effect)를 실행하기 위한 훅
useRef : 참조값을 저장하는 훅. 렌더링 사이의 값이 유지되지만, 값이 바뀌어도 리렌더링이 발생 X
*/


const Ref = () => {
const [inputValue, setInputValue] = useState("");
/*inputValue 현재 input값, setInputValue 값을 변경하는 함수, useState 초기값*/

// const count = useRef(0);

const previousInputValue = useRef("");
/*컴포넌트가 리렌더링 되어도 변하지 않는 참조 객체*/
useEffect(() => {
    // count.current = count.current + 1;
    previousInputValue.current = inputValue;
},[inputValue]);
/*current를 사용하여 이전 입력 값을 저장.
inputValue가 변경될 때 마다 useEffect가 실행.
현재 입력값을 previousInputValue.current에 저장.
따라서, 렌더링 중에는 직접 입력값 참조 가능*/

    return(
        <>
        <Container>
            <Row>
                <Col>
                <h3 className='mt-4 mb-2'>useRef Hook</h3>
                <p>
                    - useRef를 사용하면 렌더링 사이에 값을 유지<br/>
                    - 업데이트 시에 다시 렌더링을 발생시키지 않는, 변경 가능한 값을 저장하는데 사용<br/>
                    - 불필요한 렌더링 방지<br/>
                    - 상태변경을 추적 가능
                </p>

                <hr className='mb-3'/>

                {/* <h3>Render Count: {count.current}</h3>
                <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                className='form-control'/> */}
                
                <h3>현재값 : {inputValue}</h3>
                <h3>이전값 : {previousInputValue.current}</h3>
                <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                className='form-control'/>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Ref;