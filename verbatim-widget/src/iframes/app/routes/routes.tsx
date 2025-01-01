import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES, ROUTES_MAP } from './routes-map';

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES_MAP[ROUTES.IMPORT]} />} />
    </Routes>
  );
};