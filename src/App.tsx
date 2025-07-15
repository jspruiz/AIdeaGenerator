import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className="w-screen h-screen flex items-center justify-center bg-[#fff9f5] relative overflow-hidden">
  {/* Warm Light Apricot & Coral */}
  <div
    className="absolute top-0 left-0 w-screen h-screen z-0"
    style={{
      backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(255, 220, 190, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 245, 238, 0.35) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 210, 180, 0.15) 0%, transparent 50%)`,
    }}
  />
    <div className="w-full max-w-xl px-4 py-12 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Ask anything..."
            className="w-full text-lg rounded-xl border border-neutral-200 bg-white shadow-md px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder-neutral-400 text-neutral-900"
            style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)' }}
          />
        </div>
</div>
        
    </>
  )
}

export default App
