
import './App.css';
import { useEffect, useState } from 'react';
import { TaskCreator } from './components/TaskCreator';
import TaskTable from './components/TaskTable';
import VisibilitiControl from './components/VisibilitiControl';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [taskItems, settaskItems] = useState([]);
  const [showCompleted, setshowCompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data) {
      settaskItems(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));

  }, [taskItems])

  function addTask(nameTask) {
    if (!taskItems.find(task => task.name === nameTask)) {
      settaskItems([...taskItems, { name: nameTask, done: false }]);
    }
  }

  const toggleTask = (task) => {
    settaskItems(
      taskItems.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    )
  }

  const cleanTask = () => {
    settaskItems(taskItems.filter(task => !task.done))
    setshowCompleted(false)
  }

  return (
    <div className="bg-dark vh-100 text-white pt-3">

      <div className='container col-md-4 offset-md-4 '>
        <TaskCreator createNewTask={addTask} />


        <TaskTable tasks={taskItems} toggleTask={toggleTask} ></TaskTable>

        <VisibilitiControl setshowCompleted={(checked) => setshowCompleted(checked)} cleanTask={cleanTask} ischecked={showCompleted} />

        {
          showCompleted && (
            <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={true} ></TaskTable>
          )
        }
      </div>




    </div>
  );
}

export default App;
