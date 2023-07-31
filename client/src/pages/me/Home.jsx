import { useEffect, useState, useContext } from "react";
import MainContext from "../../MainContext";
import homeStyles from "./styles";

export default function Home({ children, ...props }) {
	const [introData, setIntroData] = useState([]);
	const [aboutData, setAboutData] = useState([]);
	const { lang } = useContext(MainContext);

	const fetchIntroData = () => {
		fetch("http://localhost:5000/api/intro")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setIntroData(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const fetchAboutData = () => {
		fetch("http://localhost:5000/api/about")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setAboutData(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchIntroData();
		fetchAboutData();
	}, []);

	const classes = homeStyles(props);
	return (
		<div className="homepage-container">
			<div className={classes.introContainer}>
				<div className={classes.introLeft}>
					{introData && introData.length ? (
						<img
							className={classes.introPicture}
							src={`http://localhost:5000/assets/${introData[0].picture}`}
							alt="profile"
						/>
					) : null}
				</div>
				<div className={classes.introRight}>
					{introData && introData.length ? (
						<h1>
							{lang ? introData[0].title : introData[0].titleEng}
						</h1>
					) : null}
					<br />
					{introData && introData.length ? (
						<p>
							{lang
								? introData[0].profession1
								: introData[0].profession1Eng}
						</p>
					) : null}
					{introData && introData.length ? (
						<p>
							{lang
								? introData[0].profession2
								: introData[0].profession2Eng}
						</p>
					) : null}
					<br />
					{introData && introData.length ? (
						<p>
							{lang
								? introData[0].major1
								: introData[0].major1Eng}
						</p>
					) : null}
					{introData && introData.length ? (
						<p>
							{lang
								? introData[0].major2
								: introData[0].major2Eng}
						</p>
					) : null}
				</div>
			</div>
			<div className={classes.aboutContainer}>
				{aboutData && aboutData.length ? (
					<p>
						{lang
							? aboutData[0].content1
							: aboutData[0].content1Eng}
					</p>
				) : null}
				{aboutData && aboutData.length ? (
					<p>
						{lang
							? aboutData[0].content2
							: aboutData[0].content2Eng}
					</p>
				) : null}
				<div>
					{aboutData && aboutData.length ? (
						<img
							className={classes.aboutLogo}
							src={`http://localhost:5000/assets/${aboutData[0].logo1}`}
							alt="ygtLogo"
						/>
					) : null}
					{aboutData && aboutData.length ? (
						<img
							className={classes.aboutLogo}
							src={`http://localhost:5000/assets/${aboutData[0].logo2}`}
							alt="nibgatLogo"
						/>
					) : null}
				</div>
			</div>
		</div>
	);
}
