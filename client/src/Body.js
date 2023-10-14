import React, { useEffect, useState } from "react";
import Axios from "axios";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';

const Body = () => {
  const [newTask, setNewTask] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [addTodo, setAddTodo] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [todoLength, setTodoLength] = useState(0);
  const [todoCompleted, setTodoCompleted] = useState(0);
  const[username,setUsername]=useState('')
  console.log(allTasks);

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:3000/data", {
        headers: {
          "x-access-token": localStorage.getItem('Token')
        }
      });
      setAllTasks(response?.data?.data);
      setUsername(response.data?.username)

     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      // Clean up the state when the component unmounts
      setAllTasks([]);
      setTodoLength(0);
      setTodoCompleted(0);
    };
  }, []); // Empty dependency array ensures useEffect runs once after initial render


  useEffect(()=>{
    setTodoLength(allTasks.length);
    const completedTasksCount = allTasks.reduce((count, task) => {
      if (task.taskCompleted) {
        return count + 1;
      }
      return count;
    }, 0);
   
    setTodoCompleted(completedTasksCount);
  },[allTasks])

  const handleAdd = () => {
    if (newTitle && newTask) {
      setAddTodo(false);
      createTodo();
      setNewTitle("");
      setNewTask("");
    }
  };

  const createTodo = async () => {
    try {
      const response = await Axios.post('http://localhost:3000/data', {
        name: newTitle,
        task: newTask,
        taskCompleted: false
      }, {
        headers: {
          "x-access-token": localStorage.getItem('Token')
        }
      });
      alert('New item added in Todo list');
      setAllTasks([...allTasks, response.data]);
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const deleteTodos = async (id) => {
    try {
      await Axios.delete(`http://localhost:3000/data/${id}`);
      alert(`Item deleted`);
      setAllTasks(allTasks.filter((data) => data._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleStatus = async (id, status) => {
    try {
      await Axios.patch(`http://localhost:3000/data/${id}`, {
        taskCompleted: status
      });
      fetchData(); // Fetch updated data after status change
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleText = () => {
    if (todoLength === 0) {
      return "Let's start";
    } else if (todoLength !== todoCompleted) {
      return 'pending...';
    } else {
      return 'Completed';
    }
  };



  return (
    <div className="flex justify-center items-end flex-col my-10">
    <div className="text-lg font-semibold mr-5">Welcome<span className="text-orange-600"> {username}</span></div>
      <div className="rounded-3xl border flex justify-between mx-auto py-16 px-10 w-3/6  border-orange-200">
        <div className="text-5xl">
          Todo<br/><span className="text-4xl"> {handleText()}</span>
          <br />
          <div className="text-xl mt-4 tracking-wider">The more you note, the more you do.</div>
        </div>
        <div className="rounded-full w-20 flex justify-center items-center h-20 text-4xl  bg-orange-600 text-black  font-bold">
          {todoCompleted}/{todoLength}
        </div>
      </div>

      {/* adding new task logic */}
      <div className="flex my-10 mx-auto" onClick={() => setAddTodo(!addTodo)}>
        <div className="rounded-2xl outline-none px-3 py-2 border border-orange-200 cursor-pointer">
          Add new task <AddCircleIcon />
        </div>
      </div>

      {addTodo ? (
        <div className="flex flex-col my-10 mx-auto items-end">
          <input
            className="rounded-2xl outline-none px-3 py-2 w-96 my-4 bg-gray-800"
            type="text"
            value={newTitle}
            placeholder="Title"
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            className="rounded-2xl outline-none px-3 py-2 w-96 my-4 bg-gray-800"
            type="text"
            value={newTask}
            placeholder="write your next task"
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e)=>{
              if(e.key==='Enter'){
                handleAdd()
              }
            }}
          />
          <AddCircleIcon
            onClick={handleAdd}
            
            style={{ fontSize: "40px" }}
            className="cursor-pointer text-orange-600 text-3xl"
          />
        </div>
      ) : (
        <></>
      )}

      {/* displaying todo's logic */}
      <div className="mx-auto  px-3 w-7/12">
        {
          allTasks.map((data) => {
            return (
              <div key={data._id} className="flex flex-col border mb-4 border-orange-200 rounded-xl px-3 py-2">
                <div className="flex justify-between">
                  <div className="flex ">
                    <div className={`${data.taskCompleted ? 'bg-green-600' : 'bg-red-600'} rounded-full px-[14px] mr-2`}></div>
                    <div className="text-xl font-semibold tracking-wider">{data.name}</div>
                  </div>

                  <div>
                    {
                      data.taskCompleted ?
                      <CancelSharpIcon onClick={()=>handleStatus(data._id,false)} className="mr-2 cursor-pointer" />
                      :
                    <CheckCircleOutlineSharpIcon onClick={()=>handleStatus(data._id,true)} className="mr-2 cursor-pointer" />
                    }
                    <DeleteIcon onClick={()=>deleteTodos(data._id)} className="cursor-pointer" />
                  </div>
                </div>
                <div className="mt-3 ml-3">{data.task}</div>
              </div>
            )
          })
        }


      </div>
    </div>
  );
};

export default Body;
