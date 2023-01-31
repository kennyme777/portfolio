import './assets/css/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LayoutDashboard from './widget/LayoutDashboard';
import LayoutLanding from './widget/LayoutLanding';
import ListJobVacancy from './pages/dashboard/list-job-vacancy';
import Dashboard from './pages/dashboard/dashboard';
import Form from './pages/dashboard/form';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Cookies from 'js-cookie';
import JobVacancy from './pages/home/job-vacancy';
import { GlobalProvider } from './context/GlobalContext';
import JobVacancyDetail from './pages/home/job-vacancy-detail';
import Register from './pages/login/register';
import Profile from './pages/dashboard/profile';

function App() {

  const LoginRoute = (props) => {
    if (Cookies.get('token') === undefined) {
      return props.children
    } else {
      return <Navigate to={ '/' } />
    }
  }

  const DashboardRoute = (props) => {
    if (Cookies.get('token') !== undefined) {
      return props.children
    } else {
      return <Navigate to={ '/' } />
    }
  }

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>

          <Route path='/' element={
            <LayoutLanding>
              <Home />
            </LayoutLanding>
          } />

          <Route path='/job-vacancy' element={
            <LayoutLanding>
              <JobVacancy />
            </LayoutLanding>
          } />

          <Route path='/job-vacancy/:Id' element={
            <LayoutLanding>
              <JobVacancyDetail />
            </LayoutLanding>
          } />

          <Route path='/dashboard' element={
            <DashboardRoute>
              <LayoutDashboard>
                <Dashboard />
              </LayoutDashboard>
            </DashboardRoute>
          } />

          <Route path='/profile' element={
            <DashboardRoute>
              <LayoutDashboard>
                <Profile />
              </LayoutDashboard>
            </DashboardRoute>
          } />

          <Route path='/dashboard/list-job-vacancy' element={
            <DashboardRoute>
              <LayoutDashboard>
                <ListJobVacancy />
              </LayoutDashboard>
            </DashboardRoute>
          } />

          <Route path='/dashboard/list-job-vacancy/form' element={
            <DashboardRoute>
              <LayoutDashboard>
                <Form />
              </LayoutDashboard>
            </DashboardRoute>
          } />

          <Route path='/dashboard/list-job-vacancy/edit/:Id' element={
            <DashboardRoute>
              <LayoutDashboard>
                <Form />
              </LayoutDashboard>
            </DashboardRoute>
          } />

          <Route path='/login' element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          } />

          <Route path='/register' element={
            <LoginRoute>
              <Register />
            </LoginRoute>
          } />

        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
