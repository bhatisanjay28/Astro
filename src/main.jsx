import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function Placeholder() {
  return <div style={{ padding: 40, fontFamily: 'serif' }}>Scaffolding…</div>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Placeholder />
  </StrictMode>,
)