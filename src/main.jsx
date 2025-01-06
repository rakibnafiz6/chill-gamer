import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <div className='bg-[#d9e2e3]'>
      <RouterProvider router={router} />
      </div>
     </AuthProvider>
  </StrictMode>,
)
