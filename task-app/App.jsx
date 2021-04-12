import './App.css';
import Header from './components/Header';
import { useState } from 'core-js/library/fn/reflect/es7/metadata'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [task, setTasks] =useState()

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task ))
  }
  return (
    <div className="container">
        <Header onAdd={() => setShowAddTask(!ShowAddTask)}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        {task.length > 0 ? <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : ('No Tasks To Show')}
     </div>
  );
}

export default App;
