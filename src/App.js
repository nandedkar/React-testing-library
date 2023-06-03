import './App.css';
import Banner from './components/Banner/Banner';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TodoPage from './pages/TodoPage/TodoPage';
import FollowersPage from './pages/FollowersPage/FollowersPage';

function App() {
  return (
    <div className="App">
      <Banner />
      {/* <TodoPage /> */}
      <Router>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/followers" element={<FollowersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
