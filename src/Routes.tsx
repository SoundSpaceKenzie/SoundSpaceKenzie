import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { RegisterPage } from './pages/RegisterPage';
import { DashBoard } from './pages/DashBoard';
import { PostProvider } from './providers/Post/PostContex';

const Rout = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/dashboard' element={<PostProvider>
      <DashBoard />
    </PostProvider>} />
  </Routes>
);

export default Rout;
