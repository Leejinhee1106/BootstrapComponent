import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //라우터선언
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 cdn 선언
//페이지 부르기
import Header from './include/Header';
import Home from './pages/Home';
import Cont from './pages/Cont';
import Typo from './pages/Typo';
import Color from './pages/Color';


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}> {/* 헤더 */}
          <Route index element={<Home/>}></Route>{/* 바디 */}
          <Route path="container" element={<Cont/>}></Route>{/* 서브페이지 */}
          <Route path="typo" element={<Typo/>}></Route>
          <Route path="color" element={<Color/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
/*위에 이 문법은 react 18ver부터*/