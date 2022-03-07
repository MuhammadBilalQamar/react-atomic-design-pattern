import './app.css'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Routes, Route } from 'react-router-dom'

import { LandingPage, PricingQueue, AccountReview } from '../UI/Pages'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/queue" element={<PricingQueue />} />
        <Route path="/account-review" element={<AccountReview />} />

      </Routes>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
