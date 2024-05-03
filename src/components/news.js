import React, { Component } from "react"
import NewsItem from "./newsItem"
import Spinner from "./spinner"

export class News extends Component {
	constructor() {
		super()
		console.log("called a constructor from news component!!!")
		this.state = {
			articles: [],
			totalResults: null,
			loading: false,
			page: 1,
		}
	}

	handlePrevClick = async () => {
		console.log("prev")
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=02f6cddeae0b464594fa9015a6937332&pageSize=${
			this.props.pageSize
		}&page=${this.state.page - 1}`
		this.setState({ loading: true })
		let data = await fetch(url)
		let parsedData = await data.json()
		console.log(parsedData)
		this.setState({
			articles: parsedData.articles,
			page: this.state.page - 1,
			loading: false,
		})
	}
	handleNextClick = async () => {
		if (
			this.state.page + 1 >
			Math.ceil(this.state.totalResults / this.props.pageSize)
		) {
			//nothing
		} else {
			console.log("next")
			let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=02f6cddeae0b464594fa9015a6937332&pageSize=${
				this.props.pageSize
			}&page=${this.state.page + 1}`
			this.setState({ loading: true })
			let data = await fetch(url)
			let parsedData = await data.json()
			console.log(parsedData)
			this.setState({
				articles: parsedData.articles,
				page: this.state.page + 1,
				loading: false,
			})
		}
	}

	async componentDidMount() {
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.countryCode}&apiKey=02f6cddeae0b464594fa9015a6937332&pageSize=${this.props.pageSize}&page=1`
		this.setState({ loading: true })
		let data = await fetch(url)
		let parsedData = await data.json()
		console.log(parsedData)
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		})
	} //it will run after render() runs

	render() {
		console.log("insider render")

		return (
			<div className="container mt-3 ">
				<h1 className="text-center">NewsApp - Top headlines</h1>
				{this.state.loading === true ? <Spinner /> : ""}
				<div className="container" align="right">
					<i>Showing total {this.state.totalResults} articles!!!</i>
				</div>

				<div className="row">
					{!this.state.loading &&
						this.state.articles.map((element) => {
							// this.setState({ totalResults: totalResults })
							// console.log(this.state.totalResults)
							return (
								<div className="col-md-4" key={element.url}>
									<NewsItem
										title={element.title ? element.title : ""}
										description={element.description ? element.description : ""}
										newsUrl={element.url}
										imageUrl={element.urlToImage}
										courtesy={element.source.name}
										time={element.publishedAt}
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
						disabled={
							this.state.page + 1 >
							Math.ceil(this.state.totalResults / this.props.pageSize)
						}
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
