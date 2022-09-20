import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './userComponent/Components/LandingPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;