import React, { Component } from "react";

import logo from "../assets/images/icons/logo-sm.png";
import search from "../assets/images/icons/search-icon-sm.png";
import cart from "../assets/images/icons/cart-sm.png";
import Headerlink from "./HeaderLink";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div>
				<div className="nav-wrapper fixed-top">
					<div className="container">
						<nav className="navbar navbar-toggleable-sm navbar-expand-md">
							<button
								className="navbar-toggler navbar-toggler-right"
								type="button"
								data-toggle="collapse"
								data-target=".navbar-collapse"
							>
								☰
							</button>
							<Link className="navbar-brand mx-auto" to="/">
								<img src={logo} alt="apple" />
							</Link>
							<div className="navbar-collapse collapse">
								<ul className="navbar-nav nav-justified w-100 nav-fill">
									<Headerlink linkName="mac" linkUrl="/mac" />
									<Headerlink linkName="iphone" linkUrl="/iphone" />
									<Headerlink linkName="ipad" linkUrl="/ipad" />
									<Headerlink linkName="watch" linkUrl="/watch" />
									<Headerlink linkName="tv" linkUrl="/tv" />
									<Headerlink linkName="Music" linkUrl="/Music" />
									<Headerlink linkName="support" linkUrl="/support" />
									<li className="nav-item">
										<Link className="nav-link js-scroll-trigger" to="/">
											<img src={search} alt="apple" />
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link js-scroll-trigger" to="/cart/">
											<img src={cart} alt="cart" />
										</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}
export default Header;
