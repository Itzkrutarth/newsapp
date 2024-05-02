import React, { Component } from "react"
import NewsItem from "./newsItem"
import { logDOM } from "@testing-library/react"

export class News extends Component {
	constructor() {
		super()
		console.log("called a constructor from news component!!!")
		this.state = {
			articles: this.articles,
			loading: false,
		}
	}

	async componentDidMount() {
		console.log("insider componentDidMount")
		let url =
			"https://newsapi.org/v2/top-headlines?country=in&apiKey=02f6cddeae0b464594fa9015a6937332"
		let data = await fetch(url)
		let parsedData = data.json()
		console.log(parsedData)
		// this.setState({ articles: parsedData.articles })
	} //it will run after render() runs

	render() {
		console.log("insider render")
		const linearGradient = "linear-gradient(to left,blue, red)"
		return (
			<div className="container my-3 bg-light">
				<h1>
					<p
						style={{
							backgroundImage: linearGradient,
							WebkitBackgroundClip: "text",
							BackgroundClip: "text",
							color: "transparent",
						}}
					>
						NewsApp - Top headlines
					</p>
				</h1>

				<div className="row">
					{this.state.articles.map((element) => {
						return (
							<div className="col-md-4" key={element.url}>
								<NewsItem
									title={element.title ? element.title : ""}
									description={element.description ? element.description : ""}
									newsUrl={element.url}
									imageUrl={element.urlToImage}
								/>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default News
