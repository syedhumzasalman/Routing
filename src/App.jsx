import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import { app } from './firebase'

function App() {

  // console.log(app)

  return (
    <>

      <Routes>

        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />


        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </>
  )
}

export default App
