import {Container, Row, Col} from 'react-bootstrap';

const Form = () => {
    return(
        <>
        <Container fluid>
            <Row>
                <Col sm={6}>
                    <h3>Form-Floating</h3>
                    <div className="form-floating mb-3 mt-3">
                        <input type="text" className='form-control'/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3 mt-3">
                        <textarea name="text" id="comment" className='form-control'></textarea>
                        <label htmlFor="email">Comments</label>
                    </div>
                </Col>
                <Col sm={6}>
                <h3>Validation</h3>
                <form action="" className='was-validated'>
                    <div className="">
                        <label htmlFor="">이름 :</label>
                        <input type="text" className='form-control' name='' required/>
                        <div className="invalid-feedback">noooooooooooo!</div>
                        <div className="valid-feedback">Oooooooooooookaaay~</div>
                    </div>
                </form>
                </Col>
            </Row>
            <hr className='my-5'></hr>
            <Row>
                <Col sm={4}>
                <div className="input-group mb-3">
                    <span className='input-group-text'>One</span>
                    <span className='input-group-text'>Two</span>
                    <span className='input-group-text'>Three</span>
                    <input type="text" className='form-control'/>
                </div>
                </Col>
                <Col sm={4}>
                <h3>이름쓰기</h3>
                <div className="input-group mt-3">
                    <span className='input-group-text'>Person</span>
                    <input type="text" className='form-control' placeholder='First Name'/>
                    <input type="text" className='form-control' placeholder='Last Name'/>
                </div>
                </Col>
                <Col sm={4}>
                <h1>check</h1>
                <div className="input-group">
                    <div className="input-group-text">
                        <input type="checkbox" />
                    </div>
                    <input type="text" className="form-control" placeholder="Some text"/>
                </div>
                </Col>
            </Row>
            <hr className='my-5'/>
            <div className='row'>
                <div className='col-md-6'>
                    <h3>Input Group</h3>
                    <div className="input-group">
                        <input type="text" className='form-control' placeholder='아이디' />
                        <span className='input-group-text'>@</span>
                        <select className='form-select' name='' id=''>
                            {/* select태그에는 name/id는 공백이어도 꼭 적어줘야 함 */}
                            <option value="" disabled selected>직접입력</option>
                            <option value="">naver.com</option>
                            <option value="">gmail.com</option>
                            <option value="">daum.com</option>
                        </select>
                    </div>
                </div>
                <div className='col-md-6'>
                    <h3>Input Group Size</h3>
                    <div className="input-group input-group-lg">
                        <input type="text" className='form-control' placeholder='아이디' />
                        <span className='input-group-text'>@</span>
                        <input type="text" className='form-control' placeholder='example.com' />
                        <input type="submit" value='확인'/>
                    </div>
                </div>
            </div>

            <hr className='my-5'></hr>
            <Row>
                <Col md={2}>
                <h3>Select</h3>
                <select className='form-select' name='' id=''>
                    {/* select태그에는 name/id는 공백이어도 꼭 적어줘야 함 */}
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
                </Col>
                <Col md={2}>
                <h3>Multiple Select</h3>
                <select multiple className='form-select form-select-lg' name='' id=''>
                    {/* select태그에는 name/id는 공백이어도 꼭 적어줘야 함 */}
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
                </Col>
                <Col md={2}>
                <h3>DataList</h3>
                <label htmlFor="browser" className='form-label'>
                    좋아하는 브라우저를 적어주세요
                </label>
                <input className='form-control' list='browsers' name='browser' id='browser'/>
                <datalist id='browsers'>
                    <option value={'Edge'}/>
                    <option value={'Firefox'}/>
                    <option value={'Chrome'}/>
                    <option value={'Opera'}/>
                    <option value={'Safari'}/>
                </datalist>
                </Col>

                <Col md={2}>
                <h3>Checkboxes</h3>
                <div className="form-check">
                    <input type="checkbox" className='form-check-input' id='check1' checked/>
                    <label htmlFor="check1" className='form-check-label'>woman</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className='form-check-input' id='check1'/>
                    <label htmlFor="check1" className='form-check-label'>man</label>
                </div>
                </Col>

                <Col md={2}>
                <h3>Radio buttons</h3>
                  <div className="form-check">
                    <input type="radio" className='form-check-input' id='radio1' name='gender'/>
                    <label htmlFor="radio1" className='form-check-label'>woman</label>
                </div>
                <div className="form-check">
                    <input type="radio" className='form-check-input' id='radio2' name='gender'/>
                    <label htmlFor="radio2" className='form-check-label'>man</label>
                </div>
                </Col>

                <Col md={2}>
                <h3>Toggle Switch</h3>
                <div className="form-check form-switch">
                    <input type="checkbox" 
                    className='form-check-input' 
                    id='mySwitch' 
                    name='darkmode' 
                    value='yes' checked/>
                    <label htmlFor="mySwitch" className='form-check-label'></label>
                </div>
                </Col>

                <Col md={2}>
                <h3>Range</h3>
                <label htmlFor="customRange" className='form-label'>
                    Custom Range
                </label>
                <input type="range" 
                className='form-range' 
                id='customRange'
                step='10'
                name='points'
                />
                </Col>
            </Row>
            <hr className='my-5'></hr>
            <Row>
                <Col md={12}>
                    <h3>Form 반응형으로 만들기</h3>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <input type="text" className='form-control'placeholder='Enter E-mail'/>
                </Col>
                <Col sm={6}>
                    <input type="password" className='form-control' placeholder='Enter Password'/>
                </Col>
            </Row>
            <hr className='my-5'></hr>
            <Row>
                <Col md={4}>
                <h3>Color Picker</h3>
                <input type="color" className='form-control form-control-color'/>
                </Col>
                <Col md={4}>
                <h3>Stacked Form</h3>
                {/* post또는 get 사용: get을 쓰면 상단에 노출이 돼서 주로 post를 사용 */}
                <form action="/action.js" method="post">
                    <div className="mb-3 mt-3">
                        <label htmlFor="">Email :</label>
                        {/* html에서는 그냥 for // 리액트에서만 htmlFor */}
                        <input type="email" 
                        className='form-control' 
                        id='email' 
                        placeholder='이메일을 입력하세요'
                        name='email'/>
                    </div>

                    <div className="mb-3 mt-3">
                        <label htmlFor="">password :</label>
                        {/* html에서는 그냥 for // 리액트에서만 htmlFor */}
                        <input type="password" 
                        className='form-control' 
                        id='pwd' 
                        placeholder='패스워드를 입력하세요'
                        name='pwd'/>
                    </div>

                    <div className="form-check mb-3">
                        <label className='form-check-label'>
                            <input type="checkbox" 
                            name='remember' 
                            className='form-check-input'/>
                        개인정보제공을 동의합니다.
                        </label>
                    </div>
                    <input type="submit" className='btn btn-primary' value='전송' />
                </form>
                </Col>

                <Col md={4}>
                <div className="mb-3 mt-3">
                    <label htmlFor="comment">Comments:</label>
                    <textarea className='form-control' rows='5' id='comment' name='text' placeholder='내용을 입력해주세요'></textarea>
                    {/* textarea는 무조건 한줄로 입력  */}
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Form;