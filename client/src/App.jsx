import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'



function App() {
  const [users, setUsers] = useState([])
  const [usersV2, setUsersV2] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construct the base URL
    let url = 'http://localhost:5000/api/v3/users';
    let response; // Declare response outside try-catch to access it later
    
    // If inputValue is not empty, append it as a query parameter
    if (inputValue.trim()) {
      url += `?name=${encodeURIComponent(inputValue)}`;
    }

    try {
      // Make the request using the constructed URL
      response = await axios.get(url);
      setDisplayValue(inputValue); // Set display value here if you're displaying the response or part of it
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      console.log('Request completed');
      setInputValue(''); // Clear the input field
      
      // Ensure response is defined and has data before attempting to update state
      if (response && response.data && response.data.users) {
        setUsersV2(response.data.users);
      }
    }
  };


  const fetchApi = async () => {
    const response = await axios.get('http://localhost:5000/api/users')
    setUsers(response.data.users)
  }

  const fetchApiV2 = async () => {
    const response = await axios.get('http://localhost:5000/api/v2/users')
    // response.data.users.forEach((user) => console.log(user.income))
    setUsersV2(response.data.users)
  }

  useEffect(() => {
    fetchApi()
    // fetchApiV2()
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold">
        React & Flack Backend
      </h1>
      <div className="container-sm bg-gray-600 rounded-lg m-10 w-s p-2" >
        <h2 className="text-3xl font-bold text-white">
          User API V1 Test
        </h2>
        {
          users.map((user, index) => (
            <div key={index} >
              <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-lg shadow-lg m-2 text-gray-50 font-bold">
                Name: {user}
              </span>
              <br />
            </div>
          ))
        }
      </div>

      <div className="container-sm bg-green-400 rounded-xl shadow-2xl m-10" >
        <h2 className="p-3 font-bold">
          User API V2 Test
        </h2>
        <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} />
          <br />
          <button type="submit" className="p-2 bg-gray-500 rounded-md m-2">
            Submit
          </button>
          <p>{displayValue}</p>
        </form>

          {
            usersV2.map((user, index) => (
              <div key={index}>
                <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-lg shadow-lg m-2 text-gray-50 font-bold text-left">
                  Name: {user.name}
                  <br />
                  Income: {user.income}
                  <br />
                  City: {user.city}
                  <br />
                </span>
                <br />
              </div>
            ))
          }
        </div>


      </div>

    </>
  )
}

export default App
