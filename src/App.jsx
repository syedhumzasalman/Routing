import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import { app } from './firebase'
import PrivateRoutes from './components/Routes/privateRoutes'
import AuthRoutes from './components/Routes/authRoutes'

function App() {

  // console.log(app)

  return (
    <>

      <Routes>

        <Route element={<AuthRoutes/>}>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>


        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
