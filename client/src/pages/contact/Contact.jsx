import { useState, useEffect, useContext } from "react";
import contactStyles from "./styles";
import { TextInput, Button } from "ncore-web";
import { ReactSVG } from "react-svg";
import { useNCoreTheme, useNCoreLocalization } from "ncore-web";
import MainContext from "../../MainContext";
import axios from "axios";

function Contact({ children, ...props }) {
	const [socialsData, setSocialsData] = useState([]);
	const classes = contactStyles(props);
	const { colors } = useNCoreTheme();
	const { activeLocale } = useNCoreLocalization();
	const { setCollapsed } = useContext(MainContext);

	const [mailData, setMailData] = useState({
		name: "",
		lastname: "",
		email: "",
		message: "",
	});

	const sendMail = () => {
		axios
			.post("http://localhost:5000/api/contact/mail", mailData)
			.then((res) => {
				console.log(res.status);
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
		setCollapsed(false);
	}, []);

	return (
		<div
			className={classes.mainContainer}
			style={{ backgroundColor: colors.background }}
		>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className={classes.form}
			>
				<div className={classes.formNames}>
					<TextInput
						placeholder={activeLocale === "tr" ? "Ad" : "Name"}
						className={classes.formInput}
						onChangeText={(value) => {
							setMailData({ ...mailData, name: value });
						}}
					/>
					<TextInput
						placeholder={
							activeLocale === "tr" ? "Soyad" : "Lastname"
						}
						className={classes.formInput}
						onChangeText={(value) => {
							setMailData({ ...mailData, lastname: value });
						}}
					/>
				</div>
				<TextInput
					placeholder="Email"
					className={classes.formInput}
					onChangeText={(value) => {
						setMailData({ ...mailData, email: value });
					}}
				/>
				<TextInput
					multiline
					placeholder={activeLocale === "tr" ? "Mesaj" : "Message"}
					className={classes.formInput}
					onChangeText={(value) => {
						setMailData({ ...mailData, message: value });
					}}
				/>
				<Button
					className={classes.formButton}
					spreadBehaviour="stretch"
					type="submit"
					title={activeLocale === "tr" ? "Gönder" : "Send"}
					onClick={() => {
						sendMail();
					}}
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
				{socialsData.map((social, index) => {
					return (
						<a key={index} href={social.link} target="blank">
							<ReactSVG
								className={classes.socialsItem}
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
