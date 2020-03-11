import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Telescope from "../../media/telescope.png"
import Go from "../../media/go.png"

const tileData = [{
    title: 'Telescope',
    img: Telescope,
    },
    {
    title: 'Go!',
    img: Go,
    },
]

const useStyles = makeStyles({
    root:{
        width: "80vw",
    },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: '#9cede1',
    fontSize: '1.5rem',
    textShadow: '3px 3px 10px #131c3f',
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
      height: "12vh",
  },
  icon: {
    color: '#9cede1',
  },
})

const WebDesign = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight={450} cols={1.5}>
    {tileData.map(tile => (
      <GridListTile key={tile.img}>
        <img src={tile.img} alt={tile.title} />
        <GridListTileBar
          title={tile.title}
          classes={{
            root: classes.titleBar,
            title: classes.title,
          }}
          actionIcon={
            <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    ))}
  </GridList>
    </div>
    )
}
export default WebDesign
