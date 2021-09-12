import React from "react";

import { Paper, Typography, List, ListItem, Link } from "@material-ui/core";
import useStyles from "./sueStyles";

const CardInfo = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.card}>
      <Typography variant="h3" textAlign="center" paragraph>
        <Typography variant="h3" color="primary">
          {" "}
          FREE SHOUTCAST
        </Typography>{" "}
        SERVER
      </Typography>
      <Typography variant="h2" color="primary">
        FREE
      </Typography>
      <List>
        <ListItem style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="subtitle1">
            Online Radio Control Panel
          </Typography>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="subtitle1">Stream Live</Typography>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="subtitle1">AutoDJ Mode</Typography>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="subtitle1">Radio Player {"&"} Page</Typography>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="subtitle1">LiveChat Support</Typography>
        </ListItem>
        <ListItem style={{ display: "flex", justifyContent: "center" }}>
          <Link href="#" className={classes.cardLink}>
            <Typography>and more...</Typography>
          </Link>{" "}
        </ListItem>
      </List>
    </Paper>
  );
};

export default CardInfo;
