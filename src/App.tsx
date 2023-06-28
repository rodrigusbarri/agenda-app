import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Estudiar curso de Python',
    completed: true
  },
  {
    id: '2',
    title: 'Crear Agenda app',
    completed: false
  },
  {
    id: '3',
    title: 'Estudiar Manipulación de alimentos',
    completed: false
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        onToggleCompletedTodo={handleCompleted}
        todos={todos}
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
