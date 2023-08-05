import { useEffect, useState, Fragment } from "react";
import homeStyles from "./styles";
import { useNCoreTheme, useNCoreLocalization } from "ncore-web";

export default function Home({ children, ...props }) {
	const [introData, setIntroData] = useState([]);
	const [aboutData, setAboutData] = useState([]);

	const { colors } = useNCoreTheme();
	const { activeLocale } = useNCoreLocalization();

	const fetchIntroData = async () => {
		await fetch("http://localhost:5000/api/intro")
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
	const fetchAboutData = async () => {
		await fetch("http://localhost:5000/api/about")
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
		<div className={classes.homepageContainer}>
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
				<div
					className={classes.introRight}
					style={{
						background: colors.primary,
						color: colors.textColor,
					}}
				>
					{introData && introData.length ? (
						<h1>
							{activeLocale === "tr"
								? introData[0].title
								: introData[0].titleEng}
						</h1>
					) : null}
					{introData && introData.length ? (
						<p>
							{activeLocale === "tr"
								? introData[0].major
										.split("\n")
										.map((line, index) => (
											<Fragment key={index}>
												{line}
												<br />
											</Fragment>
										))
								: introData[0].majorEng
										.split("\n")
										.map((line, index) => (
											<Fragment key={index}>
												{line}
												<br />
											</Fragment>
										))}
						</p>
					) : null}
				</div>
			</div>
			<div
				className={classes.aboutContainer}
				style={{
					background: colors.primary,
					color: colors.textColor,
				}}
			>
				{aboutData && aboutData.length ? (
					<p>
						{activeLocale === "tr"
							? aboutData[0].content1
							: aboutData[0].content1Eng}
					</p>
				) : null}
				{aboutData && aboutData.length ? (
					<p>
						{activeLocale === "tr"
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
