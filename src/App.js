import React, { useState, useEffect } from 'react';
import UsersList from './components/UsersList';

const USERS_COUNT = 15;

const App = () => {
  const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetch(
        `https://randomuser.me/api/?results=${USERS_COUNT}`
      );
      const response = await data.json()

      console.log(response)

      setUsers([...users, ...response.results]);
    };

    loadUsers();
  }, []);

  return (
    <div className="main-section">

      {/* <div className="filters">
        <button className="" onClick={loadMore} >
          apply filters
        </button>
      </div> */}
      <UsersList users={users} />

    </div>
  );
};

export default App;