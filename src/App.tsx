import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; 
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 
import "./index.css"

interface TodoItem {
  id: number
  text: string
}

export const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [input, setInput] = useState<string>("")
  const [nextId, setNextId] = useState<number>(1)

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      const newTodo: TodoItem = { id: nextId, text: input }
      setTodos([newTodo, ...todos]) 
      setInput("")
      setNextId(nextId + 1)
    }
  }
  const handleDeleteTodo = (idToRemove: number) => {
    setTodos(todos.filter(todo => todo.id !== idToRemove))
  }
  return (
    <div className='flex flex-col items-center m-4'>
      <div className='card shadow-lg p-4 rounded-md bg-[#9e6dbc]'> 
        <h1 className='m-4 font-bold text-center text-[#fefdfd]'>To Do</h1>
        <div className='flex flex-row justify-center m-3'>
          <input 
            type="text" 
            placeholder="Add your task" 
            className="rounded-md border border-gray-400 p-3 mx-2"
            value={input} 
            onChange={(e) => setInput(e.currentTarget.value)} 
          />
          <button 
            className='rounded-lg bg-[#00ee86] text-white mx-2 p-2 hover:bg-[#00bb2d]'
            onClick={handleAddTodo} 
          >
            Add <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} />
          </button>
        </div>
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="flex border rounded-md border-gray-400 p-3 mx-5 my-2 justify-between bg-[#fefdfd]">
              <p>{todo.text}</p>
              <button 
                className="ml-2"
                onClick={() => handleDeleteTodo(todo.id)} 
              >
                <FontAwesomeIcon icon={faTrash} style={{color: "#00ee86"}} />
              </button>
            </div>
          ))}
        </div>  
      </div>
    </div>
  )
}
export default App;
