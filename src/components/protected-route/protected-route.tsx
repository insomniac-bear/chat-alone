import { useLocation, Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const name = sessionStorage.getItem('name');
  const location = useLocation();

  if (!name) {
    return <Navigate to='/' state={{ from: location }} replace />
  }

  return children;
};
