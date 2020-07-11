import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';
import Triangle from "../media/triangles_Red.png"
import TriangleBlue from "../media/triangles_Blue.png"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff!important",
    height: "100vh!important",
    flexWrap: "wrap!important",
  },
  pages: {
    padding: "7px!important",
    maxHeight: "100vh!important",
  },
  pageDesign: {
    backgroundColor: "#FFCB51!important",
    height: "100%!important",
  },
  triangle: {
    width: "80%!important",
    height: "auto!important",
  },
  title:{
    fontFamily: "'Chelsea Market', cursive!important",
    position: "absolute!important",
    top: "15vh!important",
    left: "1vw!important",
    color: "#430C05!important",
  },
  title2:{
    fontFamily: "'Chelsea Market', cursive!important",
    position: "absolute!important",
    top: "26vh!important",
    left: "1vw!important",
    color: "#430C05!important",
  },
  text:{
    fontFamily: "'Oswald', sans-serif!important",
    color: "#00363D!important",
    position: "absolute!important",
    bottom: "33vh!important",
    right: "2vh!important",
  },
  text2:{
    fontFamily: "'Oswald', sans-serif!important",
    color: "#00363D!important",
    position: "absolute!important",
    bottom: "27vh!important",
    right: "2vh!important",
  },
  text3:{
    fontFamily: "'Oswald', sans-serif!important",
    color: "#00363D!important",
    position: "absolute!important",
    bottom: "21vh!important",
    right: "2vh!important",
  },
  text4:{
    fontFamily: "'Oswald', sans-serif!important",
    color: "#00363D!important",
    position: "absolute!important",
    bottom: "15vh!important",
    right: "2vh!important",
  },
  text5:{
    fontFamily: "'Oswald', sans-serif!important",
    color: "#00363D!important",
    position: "absolute!important",
    bottom: "9vh!important",
    right: "2vh!important",
  },
  text6:{
    fontFamily: "'Oswald', sans-serif!important",
    color: "#00363D!important",
    position: "absolute!important",
    bottom: "2vh!important",
    right: "2vh!important",
  }
})

const Banner = () => {
  const classes = useStyles()

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
          <Typography variant="h3" className={classes.text}>Hi!</Typography>
          <Typography variant="h3" className={classes.text2}>I'm a</Typography>
          <Typography variant="h3" className={classes.text3}>Software</Typography>
          <Typography variant="h3" className={classes.text4}>Development</Typography>
          <Typography variant="h3" className={classes.text5}>student with an</Typography>
          <Typography variant="h3" className={classes.text6}>interest in UI design</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Banner
