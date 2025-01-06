import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES, ROUTES_MAP } from './routes-map';
import { CreateEvent } from '../../pages/create-event';
import { ListEvents } from '../../pages/list-events';
import { EditEvent } from '../../pages/edit-event';
import { ExportEvents } from '../../pages/export-events';

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES_MAP[ROUTES.IMPORT]} />} />
      <Route path={ROUTES_MAP[ROUTES.CREATE]} element={<CreateEvent />} />
      <Route path={ROUTES_MAP[ROUTES.LIST]} element={<ListEvents />} />
      <Route path={ROUTES_MAP[ROUTES.EDIT]} element={<EditEvent />} />
      <Route path={ROUTES_MAP[ROUTES.EXPORT]} element={<ExportEvents />} />
    </Routes>
  );
};