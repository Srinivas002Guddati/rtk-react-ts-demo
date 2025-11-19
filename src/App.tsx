import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsersList } from './features/usersDemo/UsersList';
import { ProfileScreen } from './features/profileDemo/ProfileScreen';
import { TodoComponent } from './features/todo-app/todoComponent';
import { PostsComponent } from './features/crud-operations/posts/PostsComponent';


function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsComponent />}/>
        <Route path="/list" element={<UsersList />} />
        <Route path="/profile" element={<ProfileScreen />} />   
        <Route path="/todo" element={<TodoComponent />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;