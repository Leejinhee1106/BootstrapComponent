import {useState} from 'react';
import {Container, Row, Col, Nav, Tab, Tabs} from 'react-bootstrap';

//const가 더 엄격한 것
function Tabss(){
//useState: 상태관리는 최상단에 사용 -> return 위
const [key, setKey] = useState('home');

    return(
        <>
        <Container>
            <Row>
                <Col md={4}>
                    <h3 className='mt-3 mb-2'>Basic</h3>
                    <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className='mb-3'>
                        <Tab eventKey='home'
                        title='Home'>
                            ✨Home Sweet Home✨
                        </Tab>

                        <Tab eventKey='profile'
                        title='Profile'>
                            🎈HOME SWEET HOME🎈
                        </Tab>

                        <Tab eventKey='contact'
                        title='Contact'>
                            👀home sweet home👀
                        </Tab>
                    </Tabs>
                </Col>

                <Col md={4}>
                    <h3 className='mt-3 mb-2'>Justify</h3>
                    <Tabs
                    defaultActiveKey="profile"
                    className='mb-3'
                    fill>
                        <Tab eventKey='home'
                        title='Home'>
                            ✨Home Sweet Home✨
                        </Tab>

                        <Tab eventKey='profile'
                        title='Profile'>
                            🎈HOME SWEET HOME🎈
                        </Tab>

                        <Tab eventKey='contact'
                        title='Contact'>
                            👀home sweet home👀
                        </Tab>

                        <Tab eventKey='setting'
                        title='Setting'>
                            👀home sweet home👀
                        </Tab>
                    </Tabs>
                </Col>
                
                <Col md={4}>
                    <h3 className='mt-3 mb-2'>Pills</h3>
                    <Tab.Container defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant='pills'
                                clssName="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                        Tab 1
                                        </Nav.Link>
                                        <Nav.Link eventKey="second">
                                        Tab 2
                                        </Nav.Link>
                                        <Nav.Link eventKey="third">
                                        Tab 3
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">안녕</Tab.Pane>
                                    <Tab.Pane eventKey="second">내 이름은</Tab.Pane>
                                    <Tab.Pane eventKey="third">이진희</Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Tabss;

/*
onClick = 버튼 눌렀다는 사실만 알아차림 => 각 Tab의 이벤트를 따로 설정해서 알려줘야함       
        👉전체 Tabs 컴포넌트의 상태를 바꾸는 데는 쓰지 않아요.

onSelect = 어떤 탭을 골랐는지를 알려주는 맞춤 이벤트
        👉Tabs는 onSelect를 제공하고, 우리는 그걸 통해 어떤 탭이 활성화되었는지 추적할 수 있어요.

Tab.Pane = 선택된 탭에 따라 보여줄 내용(content)을 담는 컨테이너예요.
        👉HTML의 <div> 같은 거라고 생각하면 돼요,
          하지만 특별히 "탭과 연결된 내용"이라는 점에서 차이가 있어요.
*/