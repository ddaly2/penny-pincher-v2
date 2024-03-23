import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h2>Hello World</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
  )
}

export default App
