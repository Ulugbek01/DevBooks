import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './root';

const query = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={query}>
      <BrowserRouter>
        <Root/>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
