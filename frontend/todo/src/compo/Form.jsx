import React,{useState} from 'react'

const Form = (props) => {
    const [data,setData]=useState({
        title:'',
        content:'' 
    })
    const handleChange=(e)=>{
   const {name,value}=e.target;
   setData((prev)=>({...prev,[name]:value}));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.fun(e,data);
    }
  return (
    <div>
<form className="max-w-lg mx-auto p-5 border border-gray-300 rounded-lg" onSubmit={handleSubmit}>
      {props.type === 'add' ? (
        <div className="flex justify-center">
        <button
          type="button"
          onClick={props.func}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cancel
        </button>
      </div>
      ) : null}
      <div className="mb-5">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          name='title'
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Title"
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Content"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  )
}

export default Form
