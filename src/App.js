import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import SingleImagePage from './pages/SingleImagePage';

function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:imageId" element={<SingleImagePage/>}/>
     </Routes>
    </div>
  );
}

export default App;
