/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { Header } from '../header/header';
import { Entrees } from '../../pages/entrees';
import type { FC } from 'react';
import './app.css';
import { ProtectedRoute } from '../protected-route/protected-route';
import { Chat } from '../../pages/chat';

export const App: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('name')) {
      navigate('/chat');
    }
  }, []);

  return (
    <div className="app container-fluid bg-dark">
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Entrees />} />
          <Route
            path='/chat'
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  )
}
