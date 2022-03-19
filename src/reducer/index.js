import { createSlice} from '@reduxjs/toolkit'

const initialState = [
  { id: '1',
   username: 'Shahodat', 
   email: 'Shahodat@mail.ru', 
   password:'123', 
   },
]

export const postsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      register(state, action){
        console.log(action)
        state.push(action.payload);
      }
  }
});



 export const {register} = postsSlice.actions;
// export const userSelector = state => state.user;

export default postsSlice.reducer