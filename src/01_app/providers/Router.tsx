import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdvertisementsPage } from '@/02_pages/AdvertisementsPage/AdvertisementsPage';
import { OrdersPage } from '@/02_pages/OrdersPage/OrdersPage';
import { ResponsiveAppBar } from '@/03_widgets/ResponsiveAppBar/ResponsiveAppBar';
import GlobalStyles from '@/06_shared/styles/GlobalStyles';
import HomePage from '@/02_pages/HomePage';
import Layout from '@/03_widgets/Layout/Layout';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="advertisements" element={<AdvertisementsPage />} />
          <Route path="advertisements/:id" element={<AdvertisementsPage />} />
          <Route path="orders" element={<OrdersPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
