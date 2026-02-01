import { Routes, Route } from 'react-router-dom';

// 공통
import Gate from './templates/pages/common/Gate';
import Home from './templates/pages/common/Home';

// 소개
import Profile from './templates/pages/Profile';
import Project from './templates/pages/Project';

// 프로젝트
import Todo from './templates/projects/todo/Todo';
import Mountain from './templates/projects/mountain/Mountain';
import Three from './templates/projects/three/Three';
import Diet from './templates/projects/diet/Diet';
import Study from './templates/projects/study/Study';

// App 컴포넌트
import MusicBox from "./templates/component/MusicBox/MusicBox";

const App = () => {
  return (
    <>
      {/* 페이지 */}
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Gate />} />
        <Route path="/home" element={<Home />} />
        
        {/* Page Routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        
        {/* Project Routes */}
        <Route path="/todo" element={<Todo />} />
        <Route path="/three" element={<Three />} />
        <Route path="/mountain" element={<Mountain />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/study" element={<Study />} />
      </Routes>

      {/* 전역 고정 UI */}
      <MusicBox />
    </>
    

    
  );
};

export default App;