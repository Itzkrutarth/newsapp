import React, { Component } from "react"
import NewsItem from "./newsItem"

export class News extends Component {
	render() {
		return (
			<div>
				this is a news component.
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
			</div>
		)
	}
}

export default News
