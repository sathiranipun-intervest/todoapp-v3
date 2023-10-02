// import {requestTodosPending, requestTodosSuccess} from './todoSlice';
// import axios from "axios";
// import { useDispatch } from 'react-redux';

// export const requestTodos = async (todo, dispatch) => {
//     // dispatch (requestTodosPending());
//     try {
//         const response = await axios.get("api/v1/task", {
//           headers: {
//             Authorization:
//               "Bearer jkGLoBbld4Xzvzm6JBzlgwoVrUEj-OiPrHl4kqCpU-Rw8XvzZw",
//           },
//         });

//         dispatch(requestTodosSuccess(response.data.items))
//         console.log("Fetched Tasks:", response.data.items);
//         console.log(dispatch(requestTodosSuccess(response.data.items)));

//       } catch (error) {
//         console.error("Error Fetching Tasks:", error);
//       }
// }