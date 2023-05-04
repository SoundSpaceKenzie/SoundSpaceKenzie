import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { RegisterPage } from './pages/RegisterPage';
import { DashBoard } from './pages/DashBoard';
import { PostProvider } from './providers/Post/PostContex';
import ProtectRoute from './components/ProtectRoute/ProtectRoute';

const Rout = () => (
  <Routes>
    <Route
      path='/'
      element={
        <ProtectRoute type='login'>
          <Login />
        </ProtectRoute>
      }
    />
    <Route
      path='/register'
      element={
        <ProtectRoute type='register'>
          <RegisterPage />
        </ProtectRoute>
      }
    />
    <Route
      path='/dashboard'
      element={
        <ProtectRoute type='dashboard'>
          <PostProvider>
            <DashBoard />
          </PostProvider>
        </ProtectRoute>
      }
    />
  </Routes>
);

export default Rout;
