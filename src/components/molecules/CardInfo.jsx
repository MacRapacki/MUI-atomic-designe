import React from "react";

import { Paper, Typography, List, ListItem, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    width: "100%",
    maxWidth: "370px",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    justifyContent: " space-around",
    alignItems: "center",
    border: "1px solid rgba(0, 0, 0, 0.075)",
    borderRadius: "3px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
    margin: "10px 0 24px 0",
    padding: "20px",
    textAlign: "center",
  },
});

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
          <Link href="#">
            <Typography>and more...</Typography>
          </Link>{" "}
        </ListItem>
      </List>
    </Paper>
  );
};

export default CardInfo;
