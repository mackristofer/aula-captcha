
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Top from './components/Top';
import List from './pages/List';

function App() {

  return (
    <>
    <Top />
    <BrowserRouter>
    <Routes>
      <Route
        path="/lista"
        element={
          <PrivateRoute path="/">
            <List />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
