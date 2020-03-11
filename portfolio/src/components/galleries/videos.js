import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"

const tileData = [
  {
    title: "Hex",
    vid: "https://www.youtube.com/embed/7g_QBjzUpQI",
  },
]

const useStyles = makeStyles({
  root: {
    width: "70vw",
  },
})

const Videos = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cellHeight={400} cols={1.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.vid}>
            <iframe
              width="640"
              height="360"
              src={tile.vid}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <br/>
    </div>
  )
}
export default Videos
