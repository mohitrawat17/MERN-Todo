import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='flex flex-col items-center my-5 p-4 md:p-8'>
      <h1 className='text-4xl font-bold mb-4 text-center'>Welcome to Our Todo Application!</h1>
      <p className='text-lg mb-8 text-center'>
        Organize your tasks, set goals, and manage your time effectively with our powerful Todo Application. Stay productive and achieve more!
      </p>
    
      <div className="w-full md:w-2/3 text-left">
        <h2 className="text-2xl font-bold mb-4">Key Features:</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Intuitive task management</li>
          <li>Priority settings for tasks</li>
          <li>Real-time updates and synchronization</li>
          <li>Task completion tracking</li>
          <li>Friendly user interface</li>
        </ul>
        <p className='mb-6'>
          Ready to boost your productivity? Sign up now and start managing your tasks efficiently!
        </p>
        <Link to='/register'>
        <button className="bg-orange-600 text-white py-2 px-4 mt-4 rounded hover:bg-orange-700 font-bold">
          Get Started
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
