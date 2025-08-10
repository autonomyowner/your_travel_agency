import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SkipLink from './components/SkipLink'
import Home from './pages/Home'
import Trips from './pages/Trips'
import Book from './pages/Book'
import TripDetail from './pages/TripDetail'

export default function App() {
  return (
    <div className="flex min-h-full flex-col">
      <SkipLink />
      <Header />
      <div id="main" className="flex-1" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/trips/:slug" element={<TripDetail />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
