import React, { useState } from 'react';
import { database } from '../firebase';
import { ref, set } from 'firebase/database';

const TaskCreation = () => {
  const [task, setTask] = useState({
    description: '',
    skillRequirements: '',
    deadline: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const taskRef = ref(database, 'tasks');
      await set(taskRef, task);
      console.log('Task created successfully!');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Description:
        <input type="text" value={task.description} onChange={(event) => setTask({ ...task, description: event.target.value })} />
      </label>
      <br />
      <label>
        Skill Requirements:
        <input type="text" value={task.skillRequirements} onChange={(event) => setTask({ ...task, skillRequirements: event.target.value })} />
      </label>
      <br />
      <label>
        Deadline:
        <input type="date" value={task.deadline} onChange={(event) => setTask({ ...task, deadline: event.target.value })} />
      </label>
      <br />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskCreation;