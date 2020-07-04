import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    height: "100vh",
  },
  sideBar:{
    backgroundColor: "#d24d22",
  },
  linkList:{
    backgroundColor: "#FFCB51",
    height: "8vh",
    marginTop: "25vh",
    marginBottom: "5vh",
    fontFamily: "'Oswald', sans-serif",
    color: "#430C05",
    display: "block",
    fontSize: "5vh",
    textAlign: "center",
  },
  linkList2:{
    backgroundColor: "#FFBA26",
    height: "8vh",
    marginBottom: "5vh",
    fontFamily: "'Oswald', sans-serif",
    color: "#430C05",
    display: "block",
    fontSize: "5vh",
    textAlign: "center",
  },
  linkList3:{
    backgroundColor: "#E67413",
    height: "8vh",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "5vh",
    color: "#430C05",
    display: "block",
    textAlign: "center",
  },
})

const Section = props => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root} spacing={0}>
       <Grid item xs={2} className={classes.sideBar}>
         <div className={classes.linkList}>About</div>
         <div className={classes.linkList2}>Work</div>
         <div className={classes.linkList3}>Contact</div>
       </Grid>
    </Grid>
  )
}

export default Section
