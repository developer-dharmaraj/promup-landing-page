import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HomePage />
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
