import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import Menu from './pages/Menu';
import Layout from './layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='menu'>
            <Route index element={<Menu/>} />
            {/* <Route path=":index" element={<MenuDetails/>}/> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
