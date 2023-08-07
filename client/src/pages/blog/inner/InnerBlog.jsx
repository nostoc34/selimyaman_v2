import { useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom";
import innerBlogStyles from "./styles";
import { useNCoreTheme, useNCoreLocalization } from "ncore-web";

function InnerBlog({ children, ...props }) {
	const [blogData, setBlogData] = useState([]);
	const currentPath = useLocation().pathname;

	const { colors } = useNCoreTheme();
	const { activeLocale } = useNCoreLocalization();

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
		<div
			className={classes.mainContainer}
			style={{ backgroundColor: colors.background }}
		>
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
							<div
								className={classes.title}
								style={{ color: colors.primary }}
							>
								<h1>
									{" "}
									{activeLocale === "tr"
										? blog.title
										: blog.titleEng}{" "}
								</h1>
								<h2> {publishDate} </h2>
							</div>
							<div>
								<p
									className={classes.content}
									style={{ color: colors.antiBackground }}
								>
									{activeLocale === "tr"
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
		</div>
	);
}

export default InnerBlog;
