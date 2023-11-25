import React, { Suspense, lazy, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/homepage_components/Header';
import Body from './components/homepage_components/Body';
import Cart from './components/cart_page_componentns/Cart';
import Error from './components/error_components/Error';
import Help from './components/help_page_components/Help';
import Menu from './components/menu_page/Menu';
import { Provider } from 'react-redux';
import appStore from './redux/store/appStore';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Landing from './components/landing_page_components/Landing';
import Search from './components/search_page/Search';
import Offers from './components/offer_page/Offers';
import BestOffersBody from './components/homepage_components/best_offers_for_you/BestOffersBody';

const AppLayout = () => {
  const [location, setLocation] = useState('');

  return (
    <Provider store={appStore}>
      <div className="app">
        <Header location={location} />
        <Outlet context={[setLocation]} />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/home',
    element: <AppLayout />,
    children: [
      {
        path: '/home/:place_id',
        element: <Body />
      },
      {
        path: '/home/?lat&lang',
        element: <Body />
      },
      {
        path: '/home/cart',
        element: <Cart />
      },
      {
        path: '/home/help',
        element: <Help />
      },
      {
        path: '/home/offers-near-me',
        element: <Offers />
      },
      {
        path: '/home/search',
        element: <Search />
      },
      {
        path: '/home/restaurants/:id',
        element: <Menu />
      },
      {
        path: '/home/:place_id/collections/:entity_id?collection_id=:col_id&tags=layout_ux4&type=rcv2',
        element: <BestOffersBody />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
