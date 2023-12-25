import React, { Component } from "react";
// import Nav from "./Component/Nav";
import Main from "./Component/Main /MainRout";
// import Footer from "./Component/Footer";

import Mac from "./Page/Mac";
import Iphone from "./Page/Iphone";
import Ipad from "./Page/Ipad";
import Watch from "./Page/Watch";
import Tv from "./Page/Tv";
import Music from "./Page/Music";
import Support from "./Page/Support";
import Cart from "./Page/Cart";
import Four04 from "./Component/Four0rpage/Four04";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./ShareLayOut/SharedLayout";
import ProductPage from "./Page/ProductPage";

class App extends Component {
	render() {
		return (
			<>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route path="/" element={<Main />} />
						<Route path="mac" element={<Mac />} />
						<Route path="iphone" element={<Iphone />} />
						<Route path="iphone/:productID" element={<ProductPage />} />
						<Route path="ipad" element={<Ipad />} />
						<Route path="watch" element={<Watch />} />
						<Route path="tv" element={<Tv />} />
						<Route path="music" element={<Music />} />
						<Route path="support" element={<Support />} />
						<Route path="cart" element={<Cart />} />
						<Route path="*" element={<Four04 />} />
					</Route>
				</Routes>
			</>
		);
	}
}
export default App;
