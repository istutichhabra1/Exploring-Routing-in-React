import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetailsPage = () => {
  const { userId } = useParams();
  
  const users = [
    { id: 1, name: 'Alice', details: 'Details of Alice' },
    { id: 2, name: 'Bob', details: 'Details of Bob' },
    { id: 3, name: 'Charlie', details: 'Details of Charlie' }
  ];

  const user = users.find((user) => user.id.toString() === userId);

  if (!user) {
    return <h1>User not found!</h1>;
  }

  return (
    <div>
      <h1>{user.details}</h1>
    </div>
  );
};

export default UserDetailsPage;
