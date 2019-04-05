import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GameBoard from "./components/GameBoard";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<GameBoard />
			</div>
		);
	}
}

export default App;
