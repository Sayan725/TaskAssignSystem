import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksRef = ref(database, 'tasks');
    onValue(tasksRef, (snapshot) => {
      const tasks = snapshot.val();
      setTasks(tasks);
    });
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <p>Task ID: {task.id}</p>
            <p>Task Description: {task.description}</p>
            <p>Skill Requirements: {task.skillRequirements}</p>
            <p>Deadline: {task.deadline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;