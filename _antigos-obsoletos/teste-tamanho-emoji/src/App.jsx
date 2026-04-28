import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Teste de tamanho dinâmico de emojis</h1>
      <h2>1: Com clamp</h2>
      <div className='emoji1'>🦋</div>
      <h2>2: Usando fit-content e vh/vw</h2>
      <div className='emoji2'>🦋</div>
      <h2>3: Usando flexbox + em </h2>
      <div className='emoji-container3'>
        <p className='emoji3'>🦋</p>
      </div>
    </>
  )
}

export default App
