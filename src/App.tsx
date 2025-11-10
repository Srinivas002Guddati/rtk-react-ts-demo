import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsersList } from './features/usersDemo/UsersList';
import { ProfileScreen } from './features/profileDemo/ProfileScreen';
import { TodoComponent } from './features/todo-app/todoComponent';


function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/profile" element={<ProfileScreen />} />   
        <Route path="/todo" element={<TodoComponent />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;