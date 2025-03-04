import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Switcher from './components/switcher.tsx';

import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'

createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
    <App />
    <Switcher/>
  </BrowserRouter>
  </>
)
