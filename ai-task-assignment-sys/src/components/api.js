import axios from 'axios';

const geminiApiUrl = 'https://api.gemini.com/task/match';

export const getRankedTeamMembers = (taskId) => {
  return axios.post(geminiApiUrl, { taskId });
};