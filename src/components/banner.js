import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
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
})

const Banner = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item md={6} sm={12} xs={12} className={classes.pages}>
        <Grid container className={classes.pageDesign} spacing={0}>
          <img src={Triangle} alt="Red triangles" className={classes.triangle}></img>
        </Grid>
      </Grid>
      <Grid item md={6} sm={12} xs={12} className={classes.pages}>
        <Grid container justify="flex-end" className={classes.pageDesign} spacing={0}>
          <img src={TriangleBlue} alt="Blue triangles" className={classes.triangle}></img>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Banner
