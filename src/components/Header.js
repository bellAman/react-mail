import React from "react";
import {Link} from "react-router"

export default class Header extends React.Component {
	render() {
		const styles = this.getStyles();

		return (
			<header style={ styles.wrapper }>
				<div>
					<img
						alt="React Logo"
						src="assets/react-logo.svg"
						style={ styles.logoImage }
					/>
					<Link to="/">
					<h1 style={ styles.header }>rMail</h1>
					</Link>
				</div>

				<div>
					<Link to="/inbox">
					<h1 style={ styles.header }>Inbox</h1>
					</Link>
					<Link to="/draft">
					<h1 style={ styles.header }>Draft</h1>
					</Link>
					<Link to="/contacts">
					<h1 style={ styles.header }>Contacts</h1>
					</Link>
				</div>
			</header>
		);
	}

	getStyles() {
		return {
			header: {
				color: "white"
				, display: "inline-block"
				, margin: "10px"
			}
			, link: {
				color: "white"
				, fontSize: 20
				, marginRight: 7
			}
			, logoImage: {
				height: 50
				, margin: "0 10px 20px 10px"
				, width: 50
			}
			, wrapper: {
				alignItems: "baseline"
				, backgroundColor: "black"
				, boxSizing: "border-box"
				, color: "white"
				, display: "flex"
				, justifyContent: "space-between"
			}
		}
	}
}
