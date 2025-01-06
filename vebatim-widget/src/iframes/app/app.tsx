import React from 'react'; // eslint-disable-line
import ReactDOM from "react-dom";
import { MemoryRouter as Router } from 'react-router-dom';

import { Layout } from '../components/ui/layout';

import { MyRoutes } from './routes/routes';
import { ROUTES, ROUTES_MAP } from './routes/routes-map';
import './style.css';
import { AppContextProvider } from '../lib/contexts/app';

const Main = () => {
  return (
    <Router
      initialEntries={[
        ROUTES_MAP[ROUTES.CREATE],
        ROUTES_MAP[ROUTES.LIST],
      ]}
      initialIndex={0}
    >
      <AppContextProvider>
        <Layout>
          <MyRoutes />
        </Layout>
      </AppContextProvider>
    </Router>
  );
};

const domNode = document.getElementById('root') as HTMLElement;

ReactDOM.render(<Main />, domNode);