import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsersList } from './features/usersDemo/UsersList';
import { ProfileScreen } from './features/profileDemo/ProfileScreen';


function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/profile" element={<ProfileScreen />} />         
      </Routes>
    </BrowserRouter>
  );
}

export default App;