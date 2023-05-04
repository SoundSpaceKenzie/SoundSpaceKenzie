import { Navigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import { useEffect, useState } from 'react';

interface IProps {
  type: string;
  children: JSX.Element;
}
interface IToken {
  sub: string;
  exp: number;
}

const ProtectRoute = ({ type, children }: IProps) => {
  const [invalidToken, setInvalidToken] = useState(false);
  const token = localStorage.getItem('@SoundSpace:Token');
  const user = localStorage.getItem('@SoundSpace:User');

  useEffect(() => {
    if (token) {
      const { sub, exp }: IToken = jwt(token);
      const currentTime = Date.now() / 1000;

      if (exp > currentTime) {
        setInvalidToken(true);
      } else {
        setInvalidToken(false);
        localStorage.removeItem('@SoundSpace:Token');
        localStorage.removeItem('@SoundSpace:User');
      }
    }
  }, []);

  if (invalidToken || user) {
    if ((type === 'login' || type === 'register') && token) {
      return <Navigate to='/dashboard' replace />;
    }
    return children;
  }

  if (type === 'dashboard' && !token) {
    return <Navigate to='/' replace />;
  } else if (type === 'dashboard') {
    return children;
  }
  if ((type === 'login' || type === 'register') && !token) {
    return children;
  }

  return null;
};

export default ProtectRoute;
