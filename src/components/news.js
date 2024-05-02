import React, { Component } from "react"
import NewsItem from "./newsItem"

export class News extends Component {
	constructor() {
		super()
		console.log("called a constructor from news component!!!")
		this.state = {
			articles: [],
			loading: false,
			page: 1,
		}
	}

	handlePrevClick = async () => {
		console.log("prev")
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=02f6cddeae0b464594fa9015a6937332&pageSize=20&page=${
			this.state.page - 1
		}`
		let data = await fetch(url)
		let parsedData = await data.json()
		console.log(parsedData)
		this.setState({ articles: parsedData.articles, page: this.state.page - 1 })
	}
	handleNextClick = async () => {
		console.log("next")
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=02f6cddeae0b464594fa9015a6937332&pageSize=20&page=${
			this.state.page + 1
		}`
		let data = await fetch(url)
		let parsedData = await data.json()
		console.log(parsedData)
		this.setState({ articles: parsedData.articles, page: this.state.page + 1 })
	}

	async componentDidMount() {
		let url =
			"https://newsapi.org/v2/top-headlines?country=in&apiKey=02f6cddeae0b464594fa9015a6937332&pageSize=20&page=1"
		let data = await fetch(url)
		let parsedData = await data.json()
		console.log(parsedData)
		this.setState({
			articles: parsedData.articles,
			totalArticles: parsedData.totalResults,
		})
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
				<div className="container d-flex justify-content-between">
					<button
						disabled={this.state.page <= 1}
						type="button"
						onClick={this.handlePrevClick}
						className="btn btn-dark"
					>
						&larr; Previous
					</button>
					<button
						// disabled={this.state.page >= 2}
						type="button"
						className="btn btn-dark"
						onClick={this.handleNextClick}
					>
						Next &rarr;
					</button>
				</div>
			</div>
		)
	}
}

export default News
