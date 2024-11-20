import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  

export default axiosInstance;


why would this be good ????????????????????????? 

Simplify Axios Logic
Use an Axios interceptor for consistent error handling:
tsx
Copy code
import axios from 'axios';

const instance = axios.create({ baseURL: import.meta.env.VITE_API_URL });

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Trigger toast here
    }
    return Promise.reject(error);
  }
);

export default instance;                