import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import 구문이 생소한데 useState 꺼내 쓴 걸 import로 해결하는 용도

import Main from './pages/Main';
import Menu from './pages/Menu';
import About from './pages/About';

function App() {

  /* - 최초 프로젝트 기본 설정
        1. npx create-react-app ./ (프로젝트를 만들고 싶은 폴더에)
        이후 기본 세팅 하기
        2. src 폴더에 App.js, index.js 빼고 지우기.
        3. App.js, index.js에 불필요한 import 구문 지우기. 
        4. npm install react-router-dom@6 으로 의존성 추가. 
        
        라우팅이란?
        어떠한 요청을 어디로 안내 및 매핑할 것인지를 정해놓고 진행하는 것.
        리액트는 요청에 따라 요청에 매핑된 컴포넌트 렌더링
        ex) /menu/detail → <Detail/> 
        
        <react-router-dom에서 제공>
        - BrowserRouter 
          : 라우팅이 필요한 컴포넌트를 감싸는 컴포넌트
        - Routes
          : Route들을 묶어주는 단위 
        - Route
          : url 요청 주소와 컴포넌트를 매핑해주는 단위 */

  return (
      <>
        <BrowserRouter>
          <Routes>{/* 보여줄 페이지가 3개이므로 Route 3개 구성 */}
            {/*<Route index element={<Main/>}/>*/}
            <Route path='/' element={<Main/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
