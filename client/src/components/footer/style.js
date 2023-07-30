import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
    footer: {
        color: theme.primary,
        textAlign: "center",
    }
}))

export default useStyles;