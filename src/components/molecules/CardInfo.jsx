import React from 'react';

import {Paper,Typography, } from "@material-ui/core"
import { styled } from '@material-ui/styles';

const Card = styled(Paper)({
    width: "100%",
    maxWidth: "370px",
    height: "422px",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    justifyContent:" space-around",
    alignItems: "center",
    borderRadius: "3px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
    margin: "10px 0 24px 0",
    padding: "10px",
    textAlign: "center"
})

const CardInfo = () => {
    return ( <Card>
<Typography variant="h3"><Typography variant="h3" color="primary"> FREE SHOUTCAST</Typography> SERVER</Typography>
<Typography variant="h2">FREE</Typography>

    </Card> );
}
 
export default CardInfo;