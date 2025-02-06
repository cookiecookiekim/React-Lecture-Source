import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main';
import List from './pages/List';
import Poketmon from './pages/Poketmon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<List/>} />
          <Route path='list' element={<List/>} />
            <Route path='poketmon'/>
              <Route index element={<Poketmon/>} />
            <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
