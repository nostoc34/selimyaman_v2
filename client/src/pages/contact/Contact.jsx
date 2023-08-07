import { useState, useEffect } from "react";
import contactStyles from "./styles";
import { TextInput, Button } from "ncore-web";
import { ReactSVG } from "react-svg";
import { useNCoreTheme, useNCoreLocalization } from "ncore-web";

function Contact({ children, ...props }) {
	const [socialsData, setSocialsData] = useState([]);
	const classes = contactStyles(props);
	const { colors } = useNCoreTheme();
	const { activeLocale } = useNCoreLocalization();

	const fetchData = () => {
		fetch("http://localhost:5000/api/social")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setSocialsData(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div
			className={classes.mainContainer}
			style={{ backgroundColor: colors.background }}
		>
			<form action="" className={classes.form}>
				<div className={classes.formNames}>
					<TextInput
						placeholder={activeLocale === "tr" ? "Ad" : "Name"}
						className={classes.formInput}
					/>
					<TextInput
						placeholder={
							activeLocale === "tr" ? "Soyad" : "Lastname"
						}
						className={classes.formInput}
					/>
				</div>
				<TextInput placeholder="Email" className={classes.formInput} />
				<TextInput
					multiline
					placeholder={activeLocale === "tr" ? "Mesaj" : "Message"}
					className={classes.formInput}
				/>
				<Button
					className={classes.formButton}
					spreadBehaviour="stretch"
					title={activeLocale === "tr" ? "Gönder" : "Send"}
				/>
				<p
					style={{
						color: colors.antiBackground,
						textAlign: "center",
					}}
				>
					{" "}
					{activeLocale === "tr"
						? "Daha fazla bilgi için: mselimyaman@gmail.com"
						: "For more info: mselimyaman@gmail.com"}{" "}
				</p>
			</form>
			<div className={classes.socialsContainer}>
				{socialsData.map((social) => {
					return (
						<a href={social.link} target="blank">
							<ReactSVG
								className={classes.socialsItem}
								// style={{ color: colors.primary }}
								src={`http://localhost:5000/assets/${social.logo}`}
								alt={social.title}
							/>
						</a>
					);
				})}
			</div>
		</div>
	);
}

export default Contact;
