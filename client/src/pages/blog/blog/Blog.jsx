import { useEffect, useState, useContext } from "react";
import MainContext from "../../../MainContext";
import { useNavigate } from "react-router-dom";
import blogStyles from "./styles";

function Blog({ children, ...props }) {
	const { lang } = useContext(MainContext);
	const [blogData, setBlogData] = useState([]);

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
	}, []);
	const navigate = useNavigate();
	const classes = blogStyles(props);
	return (
		<div className={classes.mainContainer}>
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
								<div className={classes.itemInfo}>
									<h1>{lang ? blog.title : blog.titleEng}</h1>
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
                                <div className={classes.itemInfo}>
									<h1>{lang ? blog.title : blog.titleEng}</h1>
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
