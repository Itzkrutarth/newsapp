import React, { Component } from "react"

export class NewsItem extends Component {
	render() {
		let { title, description, imageUrl, newsUrl } = this.props
		return (
			<div className="my-3">
				<div className="card " style={{ width: "18rem" }}>
					<img
						src={
							imageUrl
								? imageUrl
								: "https://t3.ftcdn.net/jpg/01/38/48/40/360_F_138484065_1enzXuW8NlkppNxSv4hVUrYoeF8qgoeY.jpg"
						}
						className="card-img-top "
						alt="Image not available!!"
					/>

					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description}</p>
						<a
							href={newsUrl}
							rel="noreferrer"
							target="_blank"
							className="btn btn-sm btn-dark"
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default NewsItem
