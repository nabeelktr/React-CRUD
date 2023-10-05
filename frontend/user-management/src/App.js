import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Signup from './components/Signup';
import AdminLogin from './components/AdminLogin';
import Profile from './components/Profile';

const PrivateRoute=({element})=>{
  const token=localStorage.getItem('userToken')
  return token? element : <Navigate to='/' /> 
}


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            {/* Public Routes */}
            <Route exact path='/' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/admin' element={<AdminLogin />} />



            {/* Private Routes */}
            <Route path='/profile' element={<PrivateRoute element={<Profile/>}/>} />

        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
