import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HomePage />
      </BrowserRouter>

    </>
  )
}

export default App
