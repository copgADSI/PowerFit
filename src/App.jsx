import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import './App.css';
import Navbar from './layout/Navbar';
import ExcercisesPage from './pages/excercises/ExcercisesPage';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/user/profile/ProfilePage';
import SignInPage from './pages/user/signIn/SignInPage';
import SignUpPage from './pages/user/signUp/SignUpPage';

const quieryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={quieryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/excercises' element={<ExcercisesPage />} />
            <Route path='/myRoutines' element={<HomePage />} />

            {localStorage.getItem('access_token') !== null ?
              <Route path='/profile' element={<ProfilePage />} />
              :
              <>
                <Route path='/signIn' element={<SignInPage />} />
                <Route path='/signUp' element={<SignUpPage />} />
              </>

            }
            <Route path='*' element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
