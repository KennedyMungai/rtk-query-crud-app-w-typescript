import
{
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import Info from './pages/Info';
import { ToastContainer } from 'react-toastify';


function App()
{
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addContact' element={<AddEdit />} />
        <Route path='/editContact/:id' element={<AddEdit />} />
        <Route path='/info/:id' element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
