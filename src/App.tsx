import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: 1,
    title: 'Estudiar curso de Python',
    completed: true
  },
  {
    id: 2,
    title: 'Crear Agenda app',
    completed: false
  },
  {
    id: 3,
    title: 'Estudiar Manipulación de alimentos',
    completed: false
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
    <Todos
      todos={todos}
      onRemoveTodo={handleRemove}
    />
    </div>
  )
}

export default App
