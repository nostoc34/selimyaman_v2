import { useState, useEffect, useContext } from "react";
import contactStyles from "./styles";
import { ReactSVG } from "react-svg";
import { useNCoreTheme, useNCoreLocalization } from "ncore-web";
import MainContext from "../../MainContext";
import axios from "axios";
import { Formik, Field } from "formik";
import contactBg from "../../assets/contactBg.png";

function Contact({ children, ...props }) {
	const [socialsData, setSocialsData] = useState([]);
	const classes = contactStyles(props);
	const { colors } = useNCoreTheme();
	const { activeLocale } = useNCoreLocalization();
	const { setCollapsed } = useContext(MainContext);

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
			<img
				className={classes.backgroundImg}
				src={contactBg}
				alt="contactBg"
			/>
			<div
				className={classes.formContainer}
				style={{ backgroundColor: colors.background }}
			>
				<Formik
					onSubmit={(values, onSubmitProps) => {
						axios
							.post(
								"http://localhost:5000/api/contact/mail",
								values
							)
							.then((res) => {
								console.log(res.status);
							})
							.catch((err) => {
								console.log(err);
							})
							.finally(() => {
								onSubmitProps.resetForm();
							});
					}}
					initialValues={{
						name: "",
						email: "",
						message: "",
					}}
				>
					{({ values, handleBlur, handleChange, handleSubmit }) => (
						<form onSubmit={handleSubmit} className={classes.form}>
							<Field
								className={classes.formInput}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.name}
								name="name"
								autocomplete="off"
								placeholder={
									activeLocale === "tr" ? "Ad" : "Name"
								}
							/>
							<Field
								className={classes.formInput}
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								name="email"
								autocomplete="off"
								placeholder="Email"
							/>
							<Field
								className={classes.formInput}
								as="textarea"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.message}
								name="message"
								autocomplete="off"
								placeholder={
									activeLocale === "tr" ? "Mesaj" : "Message"
								}
								style={{
									resize: "vertical",
									minHeight: "200px",
								}}
							/>

							<button
								className={classes.formButton}
								type="submit"
							>
								{activeLocale === "tr" ? "Gönder" : "Send"}
							</button>
						</form>
					)}
				</Formik>
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
		</div>
	);
}

export default Contact;
