import { useEffect, useState, useContext } from "react";
import MainContext from "../../../MainContext";
import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import { useNavigate } from "react-router-dom";
import blogStyles from "./styles";

function Blog({ children, ...props }) {
	const [blogData, setBlogData] = useState([]);
	const { activeLocale } = useNCoreLocalization();
	const { colors } = useNCoreTheme();
	const { setCollapsed } = useContext(MainContext);
	const navigate = useNavigate();
	const classes = blogStyles(props);

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
		setCollapsed(false);
	}, []);

	return (
		<div
			className={classes.mainContainer}
			style={{ backgroundColor: colors.background }}
		>
			<div className={classes.column}>
				{blogData.map((blog, index) => {
					const options = {
						day: "numeric",
						month: "numeric",
						year: "numeric",
					};
					const publishDate = new Date(
						blog.createdAt
					).toLocaleDateString("tr-TR", options);
					if (index % 2 === 0) {
						return (
							<div
								className={classes.item}
								key={blog._id}
								onClick={() => {
									navigate(`${blog.link}`);
								}}
							>
								<img
									src={`http://localhost:5000/assets/${blog.mainPicture}`}
									alt={blog.title}
								/>
								<div
									className={classes.itemInfo}
									style={{ color: colors.primary }}
								>
									<h1>
										{activeLocale === "tr"
											? blog.title
											: blog.titleEng}
									</h1>
									<h3>{publishDate}</h3>
								</div>
							</div>
						);
					}
				})}
			</div>
			<div className={classes.column}>
				{blogData.map((blog, index) => {
					const options = {
						day: "numeric",
						month: "numeric",
						year: "numeric",
					};
					const publishDate = new Date(
						blog.createdAt
					).toLocaleDateString("tr-TR", options);
					if (index % 2 === 1) {
						return (
							<div
								className={classes.item}
								key={blog._id}
								onClick={() => {
									navigate(`${blog.link}`);
								}}
							>
								<img
									src={`http://localhost:5000/assets/${blog.mainPicture}`}
									alt={blog.title}
								/>
								<div
									className={classes.itemInfo}
									style={{ color: colors.primary }}
								>
									<h1>
										{activeLocale === "tr"
											? blog.title
											: blog.titleEng}
									</h1>
									<h3>{publishDate}</h3>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
}

export default Blog;
