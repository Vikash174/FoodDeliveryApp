import React, { Suspense, lazy, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/homepage_components/Header';
import Body from './components/homepage_components/Body';
import Cart from './components/cart_page_componentns/Cart';
import Error from './components/error_components/Error';
import Help from './components/help_page_components/Help';
import Menu from './components/menu_page/Menu';
import { Provider } from 'react-redux';
import appStore from './utils/AppStore';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';

const AppLayout = () => {
  const [userName, setUserName] = useState(
    useContext(UserContext).loggedInUser
  );

  useEffect(() => {
    const data = {
      name: 'Vikash Rai'
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />

          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: <Cart />
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: '/restaurants/:id',
        element: <Menu />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
