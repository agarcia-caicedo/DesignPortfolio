import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';
import Triangle from "../media/triangles_Red.png"
import TriangleBlue from "../media/triangles_Blue.png"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    height: "100vh",
    flexWrap: "wrap",
  },
  pages: {
    padding: "7px",
    maxHeight: "100vh",
  },
  pageDesign: {
    backgroundColor: "#FFCB51",
    height: "100%",
  },
  triangle: {
    width: "80%",
    height: "auto",
  },
  title:{
    fontFamily: "'Chelsea Market', cursive",
    position: "absolute",
    top: "5vh",
    left: "3vw",
    color: "#430C05",
  },
  title2:{
    fontFamily: "'Chelsea Market', cursive",
    position: "absolute",
    top: "12vh",
    left: "3vw",
    color: "#430C05",
  },
  text:{
    fontFamily: "'Oswald', sans-serif",
    color: "#00363D",
    position: "absolute",
    bottom: "2vh",
    right: "2vh",
    width: "50vw",
    textAlign: "right",
  },
})

export default function MobileBanner() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item md={6} sm={12} xs={12} className={classes.pages}>
        <Grid container className={classes.pageDesign} spacing={0}>
          <Typography variant="h1" className={classes.title}>
            Ana
          </Typography>
          <Typography variant="h1" className={classes.title2}>
            Garcia
          </Typography>
          <img src={Triangle} alt="Red triangles" className={classes.triangle}></img>
        </Grid>
      </Grid>
      <Grid item md={6} sm={12} xs={12} className={classes.pages}>
        <Grid container justify="flex-end" className={classes.pageDesign} spacing={0}>
          <img src={TriangleBlue} alt="Blue triangles" className={classes.triangle}></img>
          <Typography variant="h4" className={classes.text}>Hi! I'm a Software Development student with an interest in UI design</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

