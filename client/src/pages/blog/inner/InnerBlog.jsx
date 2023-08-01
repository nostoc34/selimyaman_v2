import { useEffect, useState, useContext, Fragment } from "react";
import MainContext from "../../../MainContext";
import { useLocation } from "react-router-dom";
import innerBlogStyles from "./styles";

function InnerBlog({ children, ...props }) {
	const { lang } = useContext(MainContext);
	const [blogData, setBlogData] = useState([]);
	const currentPath = useLocation().pathname;

	const fetchBlogData = () => {
		fetch("http://localhost:5000/api/blog")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setBlogData(data.reverse());
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchBlogData();
	}, [blogData]);

	const classes = innerBlogStyles(props);
	return (
		<>
			{blogData
				.filter((blog) => blog.link === currentPath)
				.map((blog) => {
					const options = {
						day: "numeric",
						month: "numeric",
						year: "numeric",
					};
					const publishDate = new Date(
						blog.createdAt
					).toLocaleDateString("tr-TR", options);
					return (
						<div>
							<div className={classes.header}>
								<img
									className={classes.headerImg}
									src={`http://localhost:5000/assets/${blog.mainPicture}`}
									alt="blogMain"
								/>
							</div>
							<div className={classes.title}>
								<h1> {lang ? blog.title : blog.titleEng} </h1>
								<h2> {publishDate} </h2>
							</div>
							<div>
								<p className={classes.content}>
									{lang
										? blog.content
												.split("\n\n")
												.map((line, index) => (
													<Fragment key={index}>
														{line}
														<br />
														<br />
													</Fragment>
												))
										: blog.contentEng
												.split("\n\n")
												.map((line, index) => (
													<Fragment key={index}>
														{line}
														<br />
														<br />
													</Fragment>
												))}
								</p>
							</div>
						</div>
					);
				})}
		</>
	);
}

export default InnerBlog;
