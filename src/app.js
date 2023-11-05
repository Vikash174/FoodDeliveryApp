import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/homepage_components/Header';
import Body from './components/homepage_components/Body';
// import Cart from './components/cart_page_componentns/Cart';
import Error from './components/error_components/Error';
import Help from './components/help_page_components/Help';
import Menu from './components/res_menu-components/Menu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Cart = lazy(() => import('./components/cart_page_componentns/Cart'));
const Menu = lazy(() => import('./components/res_menu-components/Menu'));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<h1>Loading........</h1>}>
            {' '}
            <Cart />
          </Suspense>
          // <Cart />
        )
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: '/restaurants/:id',
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            {' '}
            <Menu />
          </Suspense>
        )
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
