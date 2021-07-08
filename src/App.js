import BackgroundImg from "./media/HoneycombBackground.png";
import LogoImg from "./media/Logo.png";

import "./App.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage:
      "url(" + BackgroundImg + "), linear-gradient(#6862f3,#8d4bfc)",
    backgroundPosition: "right",
    backgroundRepeat: "repeat-x",
    backgroundAttachment: "attach",
    minHeight: "100vh",
    minWidth: "100vw",
  },
  nav: {
    maxWidth: "1200px",
    margin: "0px auto 50px auto",
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  modal: {
    width: "500px",
    maxWidth: "80%",
    backgroundColor: "white",
    margin: "0px auto",
    borderRadius: 15,
    padding: 30,
  },
  videoWraper: {
    overflow: "hidden",
    paddingBottom: "56.25%",
    position: "relative",
    marginBottom: 50,
    height: 0,
    marginTop: -60,

    webkitBoxShadow: "0px 20px 25px -10px rgba(0,0,0,0.4)",
    boxShadow: "0px 20px 25px -10px rgba(0,0,0,0.4)",
  },
  videoIframe: {
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  question: {
    color: "#bbbfc9",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  titleContainer: {
    maxWidth: 370,
    margin: "0px auto",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 40,
  },
  button: {
    borderRadius: 50,
    width: "100%",
    justifyContent: "flex-start",
    fontSize: 12,
    padding: "10px 15px",
    border: "2px solid #e3ecf7",
    textAlign: "left",
    color: "#778093",
    backgroundColor: "white",
    fontWeight: "bold",
    transition: theme.transitions.create(["margin-top", "margin-bottom"], {
      duration: theme.transitions.duration.shortest,
    }),

    "&:hover": {
      backgroundColor: "white",
      color: "black",
      boxShadow: "0px 10px 25px -15px #A8C4E6",
      webkitBoxShadow: "0px 10px 25px -15px #A8C4E6",
      marginTop: -2,
      cursor: "pointer",
    },
    "&:focus": {
      color: "black",
      background: "#e3ecf7",
      marginTop: 0,
      boxShadow: "none",
    },
    "&:active": {
      color: "black",
      background: "#e3ecf7",
      marginTop: 0,
      boxShadow: "none",
    },
  },
  spacingBottom: {
    height: 20,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.nav}>
        <img src={LogoImg} />
      </div>
      <div className={classes.modal}>
        <div class={classes.videoWraper}>
          <iframe
            src="https://clips.twitch.tv/embed?clip=FantasticFreezingCrabBudStar&parent=localhost"
            class={classes.videoIframe}
            width="853"
            height="480"
            frameBorder="0"
            allowfullscreen
          ></iframe>
        </div>

        <div class={classes.question}>Question 1</div>

        <div class={classes.titleContainer}>
          <h1 class={classes.title}>
            What is the symbol for the EOS Blockchain?
          </h1>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <button variant="outlined" className={classes.button}>
              Chestahedron
            </button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <button variant="outlined" className={classes.button}>
              Chestahedron
            </button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <button variant="outlined" className={classes.button}>
              Chestahedron
            </button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <button variant="outlined" className={classes.button}>
              Chestahedron
            </button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <button variant="outlined" className={classes.button}>
              New Button 1
            </button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <button variant="outlined" className={classes.button}>
              New Button 2
            </button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <button variant="outlined" className={classes.button}>
              New Text
            </button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <button variant="outlined" className={classes.button}>
              New Button #44
            </button>
          </Grid>
        </Grid>
      </div>
      <div class={classes.spacingBottom}></div>
    </div>
  );
}

export default App;
