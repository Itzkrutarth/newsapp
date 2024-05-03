import "./App.css"
import React, { Component } from "react"
import { Navbar } from "./components/navbar"
import News from "./components/news"

export default class App extends Component {
	render() {
		return (
			<div style={{ backgroundColor: "#d8d8d8" }}>
				<Navbar />
				<News pageSize={6} countryCode={"us"} />
			</div>
		)
	}
}
