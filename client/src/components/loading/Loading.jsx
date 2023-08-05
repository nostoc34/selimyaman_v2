import logo from "../../assets/logo.png";
import loadingStyles from "./styles";

function Loading() {

    const classes = loadingStyles();
    
	return (
		<div className={classes.loading}>
			<img src={logo} alt="logo" />
		</div>
	);
}

export default Loading;
