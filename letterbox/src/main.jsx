import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'flowbite';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Letterbox />
  </StrictMode>,
)
