import { useContext, useState, useEffect } from "react";
import MainContext from "../../MainContext";
import contactStyles from "./styles";
import { TextInput, Button } from "ncore-web";
import { ReactSVG } from "react-svg";

function Contact() {
	const [socialsData, setSocialsData] = useState([]);
	const { lang } = useContext(MainContext);
	const classes = contactStyles();

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
		<div className={classes.mainContainer}>
			<form action="" className={classes.form}>
				<div style={{ display: "flex", gap: "30px", width: "100%" }}>
					<TextInput
						placeholder={lang ? "Ad" : "Name"}
						className={classes.formInput}
					/>
					<TextInput
						placeholder={lang ? "Soyad" : "Lastname"}
						className={classes.formInput}
					/>
				</div>
				<TextInput placeholder="Email" className={classes.formInput} />
				<TextInput
					multiline
					placeholder={lang ? "Mesaj" : "Message"}
					className={classes.formInput}
				/>
				<Button
					className={classes.formButton}
					spreadBehaviour="stretch"
					title={lang ? "Gönder" : "Send"}
				/>
			</form>
			<div>
				{socialsData.map((social) => {
					return (
						<div className={classes.socialsItem}>
							<ReactSVG
								src={`http://localhost:5000/assets/${social.logo}`}
								alt={social.title}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Contact;
