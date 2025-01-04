import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES, ROUTES_MAP } from './routes-map';
import { CreateEvent } from '../../pages/create-event';

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES_MAP[ROUTES.IMPORT]} />} />
      <Route path={ROUTES_MAP[ROUTES.CREATE]} element={<CreateEvent />} />
    </Routes>
  );
};