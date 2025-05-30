import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {
    return(
        <>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={5}>
                    <h1 className='mt-3 mb-2'>What is React?</h1>
                    <pre>
                        - java script의 라이브러리 <br/>
                        - facebook 엔지니어 조던 워크가 개발 <br/>
                        - reactJs와 reactNative(모바일앱전용) 두 가지 종류가 있음 <br/>
                        - UI 구성요소를 구축하기 위한 도구 <br/>
                        - SPA <br/>
                        - 필요한 것만 변경하여 메모리 소요 단축 <br/>
                        - 리액트 사용 = npm 필요 <br/>
                        - 리액트 18ver 설치: npm i react@latest react-dom@latest <br/>

                        <code>
                        import ReactDOM from 'react-dom'; <br/>
                        ReactDOM.render(, document.getElementById('root'));
                        </code> <br/>
                        <code>
                        // After
                        import ReactDOM from 'react-dom/client';<br/>
                        const root = ReactDOM.createRoot(document.getElementById('root')); <br/>
                        root.render();
                        </code>
                    </pre>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Home;