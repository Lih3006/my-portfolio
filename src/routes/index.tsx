import { Route, Routes } from 'react-router-dom';
import Start from '../pages/Start';
import NoutFoundPage from '../pages/NotFound';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Start />}></Route>
      <Route path='/:username' element={<Start />}></Route>
      <Route path='*' element={<NoutFoundPage />}></Route>
    </Routes>
  );
};

export default RoutesMain;
