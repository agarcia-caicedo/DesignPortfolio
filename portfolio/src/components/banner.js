import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"



const useStyles = makeStyles({
  root: {
    backgroundColor: "#f94d2f",
    height: "100vh",
    position: "relative",
  },
  box: {
    position: "absolute",
    top: "40%",
    marginTop: "-50px",
    margin: "0 auto",
    width: "100%",
  },
  title: {
    fontSize: "8rem",
    letterSpacing: "1.5rem",
    lineHeight: 1,
  },
  subtitle: {
    lineHeight: 2,
    letterSpacing: "1rem",
    color: "#f9f4a2",
  },
  button: {
    "&:hover": {
      backgroundColor: "secondary",
    },
  },
  fab: {
    position: "absolute",
    left: "48%",
    bottom: "1rem",
  },
})

const Banner = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root} id="scroll-down-anchor">
        <Box className={classes.box}>
          <Typography align="center" color="primary" className={classes.title}>
            ANA GARCIA
          </Typography>
          <Typography align="center" variant="h4" className={classes.subtitle}>
            Learn • Design • Code
          </Typography>
        </Box>
        <div className={classes.fab}>
            <Fab
              color="secondary"
              className={classes.button}
              aria-label="scroll-down"
            >
              <KeyboardArrowDownIcon color="primary" />
            </Fab>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner
