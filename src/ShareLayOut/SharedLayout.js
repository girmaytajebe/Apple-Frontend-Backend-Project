import React from 'react'
import Header from '../Component/Nav/Header'
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
		<>
		  <Header/>
		  <Outlet/>
			<Footer />
		</>
	);
}

export default SharedLayout;
