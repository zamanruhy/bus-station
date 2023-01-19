import './styles/base.css'
import './styles/components.css'
import { Route, Routes } from '@solidjs/router'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Сhoice from './pages/Choice'
import Booking from './pages/Booking'
import Seats from './pages/Seats'
import Orders from './pages/Orders'

import './styles/utilities.css'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/schedule'} element={<Schedule />} />
        <Route path={'/choice'} element={<Сhoice />} />
        <Route path={'/booking'} element={<Booking />} />
        <Route path={'/seats'} element={<Seats />} />
        <Route path={'/orders'} element={<Orders />} />
      </Routes>
    </Layout>
  )
}
