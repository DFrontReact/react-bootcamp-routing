import { Routes, Route } from 'react-router-dom';
import  Users  from '../pages/Users';
import  Counter  from '../pages/Counter';
import  Car  from '../pages/Car';
import  NoMatch  from '../pages/NoMatch';


export const RoutedComponent = () => {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/car" element={<Car />} />
      <Route path="/*" element={<NoMatch />} />
    </Routes>
  );
};
