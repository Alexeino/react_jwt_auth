import './App.css'
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Layout from './hocs/Layout';

function App() {
  return (
    <div className="App">
    <Router>
      <Layout>
            <Routes>
                <Route exact={true} path='/' element={<Home />} />
                <Route exact={true} path='/login' element={<Login />} />
                <Route exact={true} path='/register' element={<Register />} />
            </Routes>
      </Layout>
    </Router>
    </div>
  );
}

export default App;
