import { useState } from 'react'

function App() {
  const [input, setInput] = useState()
  const [output, setOutput] = useState()

  async function setValue() {
    const response = await fetch('http://127.0.0.1:3000/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    })

    if (response.ok) {
      alert('Set Successfully')
    } else {
      alert('Failed to Set')
    }

  }

  async function getValue() {
    const res = await fetch('http://127.0.0.1:3000/read')
    if (res.status == 200) {
      const result = await res.json()
      setOutput(result.input)
    }
  }


  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-4xl text-red-500 py-4">Sample Dapp</h1>
      <p className="font-bold text-xl py-4">Set Message</p>
      <input
        type="text"
        onChange={(e)=> setInput(e.target.value)}
        className="border border-red-900 py-4 px-6 rounded"
        placeholder="Enter your Message"
      ></input>
      <br />
      <button
        onClick={setValue}
        className="bg-blue-400 hover:bg-blue-700 rounded text-white py-2 px-6"
      >
        Set
      </button>
      <p className="font-bold text-xl py-4">Get Message</p>
      <button
        onClick={getValue}
        className="bg-blue-400 hover:bg-blue-700 rounded text-white py-2 px-6"
      >
        Get
      </button>
      <p className="font-bold text-2xl py-4">{output}</p>
    </div>
  )
}

export default App;