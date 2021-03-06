import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";

import Telescope from "../media/telescope.png"
import Hex from "../media/hex.png"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff!important",
    height: "100vh!important",
  },
  sideBar: {
    backgroundColor: "#d24d22",
  },
  linkList: {
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
  linkList2: {
    backgroundColor: "#FFBA26",
    height: "8vh",
    marginBottom: "5vh",
    fontFamily: "'Oswald', sans-serif",
    color: "#430C05",
    display: "block",
    fontSize: "5vh",
    textAlign: "center",
  },
  linkList3: {
    backgroundColor: "#E67413",
    height: "8vh",
    fontFamily: "'Oswald', sans-serif",
    fontSize: "5vh",
    color: "#430C05",
    display: "block",
    textAlign: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontFamily: "'Galada', cursive",
    color: "#0b3638",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    width: "47vw",
    padding: "2vh",
  },
  text: {
    fontFamily: "'Oswald', sans-serif",
    color: "#0b3638",
  },
  b: {
    fontFamily: "'Oswald', sans-serif",
    color: "#0b3638",
    margin: "1vw",
    position: "relative",
    right: "-35vw",
    border: "solid 1px #0b3638"
  }
})

function Example(props) {
  var items = [
    {
      name: "Latest Project",
      description: "Telescope is an open-source blog aggregator that keeps track of blogs written by Seneca College students about the open source community.",
      images: Telescope,
      txtColor:"#0b3638",
      bgColor: "#03c5ce",
    },
    {
      name: "Other Projects",
      description: "HEX - A short horror film screened at the 2020 Western Smartphone Film Festival (WSFF). Directed and edited by me. ",
      images: Hex,
      txtColor: "#430c05",
      bgColor: "#c45124",
    },
  ]

  return (
    <Carousel autoPlay={false}>
      {items.map(item => (
        <Item item={item} />
      ))}
    </Carousel>
  )
}

function Item(props) {
  const classes = useStyles()
  return (
    <Card  className={classes.card}>
      <CardHeader
        title={props.item.name}
        className={classes.header}
        titleTypographyProps={{variant:'h3' }}
        style={{
          backgroundColor: `${props.item.bgColor}`,
          color: `${props.item.txtColor}`
        }}
      />
      <CardMedia
        className={classes.media}
        image={props.item.images}
        title="Telescope"
      />
       <CardContent>
        <Typography variant="body1"  component="p"  className={classes.text}>
          {props.item.description}
        </Typography>
      </CardContent>
      <Button className={classes.b}>Check it out!</Button>
    </Card>
  )
}

const Section = props => {
  const classes = useStyles()
  return (
    <>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={2} className={classes.sideBar}>
          <div className={classes.linkList}>About</div>
          <div className={classes.linkList2}>Work</div>
          <div className={classes.linkList3}>Contact</div>
        </Grid>
        <Grid item xs={10} className={classes.center}>
          <Example />
        </Grid>
      </Grid>
    </>
  )
}

export default Section
