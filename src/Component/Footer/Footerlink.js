import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'

function Footerlink() {
		useEffect(() => {
			return () => {
				if ($(window).width() <= 768) {
					$(".footer-links-wrapper").addClass("someClass");
				} else {
					$(".footer-links-wrapper ").removeClass("someClass");
				}
				$(window).on("resize", function () {
					if ($(window).width() <= 768) {
						console.log("window width is less than 768");
						$(".footer-links-wrapper").addClass("someClass");
						window.location.reload();
					} else {
						$(".footer-links-wrapper ").removeClass("someClass");
						$(".footer-links-wrapper").show();
					}
				});
				$(window).on("click", ".someClass h3", function () {
					$(this).next("ul").slideToggle();
					$(this).toggleClass("expapanded");
				});
			};
		}, []);
	return (
		<>
			<div className="footer-links-wrapper row">
			<div className="links-wrapper-1 col-sm-12 col-md">
				<li>
					<Link href="#">{this.props.LinksName}</Link>
				</li>
			</div>
			</div>
		</>
	);
}

export default Footerlink;
