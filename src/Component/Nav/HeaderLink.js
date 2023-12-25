import React, { Component } from "react";
import { Link } from "react-router-dom";

class Headerlink extends Component {
	render() {
		return (
			<li className="nav-item">
				<Link className="nav-link js-scroll-trigger" to={this.props.linkUrl}>
					{this.props.linkName}
					<div>
						<img src={this.props.image} />
					</div>
				</Link>
			</li>
		);
	}
}
export default Headerlink;
