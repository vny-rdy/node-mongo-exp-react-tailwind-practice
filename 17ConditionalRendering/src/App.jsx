import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const[todos,setTodos]=useState([
    {
    title:"Hey",
    desc:"I am bad Todo",
    },
    {
    title:"Hey todo two",
    desc:"I am average Todo"
    },
    {
    title:"Hey todo three",
    desc:"I am good Todo"
    }
  ])
  const Todo = ({todo}) => {
    return (<>
    <div className="m-4 border border-1 border-purple-500">
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
      </div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>showbtn true</button> : <button>showbtn false</button>}
      {/* {showbtn &&<button>showbtn false</button>} */}
      {todos.map(todo=>{
        return <Todo key={todo.title} todo={todo}/>
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle showbtn {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
