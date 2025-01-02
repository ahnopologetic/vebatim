import React from 'react';
import ReactDOM from "react-dom";
import { MemoryRouter as Router } from 'react-router-dom';

import { Layout } from '../components/ui/layout';

import { MyRoutes } from './routes/routes';
import { ROUTES, ROUTES_MAP } from './routes/routes-map';

const Main = () => {
  return (
    <Router
      initialEntries={[
        ROUTES_MAP[ROUTES.CREATE],
      ]}
      initialIndex={0}
    >
      <Layout>
        <MyRoutes />
      </Layout>
    </Router>
  );
};

const domNode = document.getElementById('root') as HTMLElement;

ReactDOM.render(<Main />, domNode);