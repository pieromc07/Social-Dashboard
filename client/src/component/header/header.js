import './header.css'
import React from 'react';
class Header extends React.Component {
	state = {}
	ToogleMode = () => {
		const mode = document.getElementById("toogle");
		mode.classList.toggle('active');
		document.body.classList.toggle('dark');
	}
	render() {
		return (
			<header className="header">
				<div className="container">
					<div className="header__title">
						<h1 className="title">Social Media Dashboard</h1>
						<strong className="followers">Total Followers: 23,004</strong>
					</div>
					<div className="separator"></div>
					<div className="header__mode">
						<strong className="mode-title">Dark Mode</strong>
						<button className="toogle" id="toogle" onClick={this.ToogleMode.bind(this)}>
							<span><i class="fas fa-sun"></i></span>
							<span><i class="fas fa-moon"></i></span>
						</button>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
