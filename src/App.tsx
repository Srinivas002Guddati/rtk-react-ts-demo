import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsersList } from './features/usersDemo/UsersList';
import { ProfileScreen } from './features/profileDemo/ProfileScreen';
import { TodoComponent } from './features/todo-app/todoComponent';
import { CreatePostsComponent } from './features/postThunk/createPostsComponent';


function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/profile" element={<ProfileScreen />} />   
        <Route path="/todo" element={<TodoComponent />} />  
        <Route path="/createPost" element={<CreatePostsComponent />} />   
      </Routes>
    </BrowserRouter>
  );
}

export default App;