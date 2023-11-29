import React from 'react';
import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
// import SendRoundedIcon from '@mui/icons-material/SendRounded';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
    backgroundColor: '#e0e0e0'
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});

const Chat = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} >
          <Typography variant="h5" className="header-message">Chat</Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
              </ListItemIcon>
              <ListItemText primary="John Wick"></ListItemText>
            </ListItem>
          </List>
          <Divider />
          <Grid item xs={12} style={{ padding: '10px' }}>
            <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
          </Grid>
          <Divider />
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
              </ListItemIcon>
              <ListItemText primary="Remy Sharp" secondary="online" />
            </ListItem>
            <ListItem button key="Alice">
              <ListItemIcon>
                <Avatar alt="Alice" src="https://mui.com/static/images/avatar/3.jpg" />
              </ListItemIcon>
              <ListItemText primary="Alice" />
            </ListItem>
            <ListItem button key="CindyBaker">
              <ListItemIcon>
                <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/2.jpg" />
              </ListItemIcon>
              <ListItemText primary="Cindy Baker" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List className={classes.messageArea}>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText primary="Hey man, What's up ?"></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText secondary="09:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText primary="Hey, I am Good! What about you ?"></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText secondary="09:31"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText primary="Cool. I am good, let's catch up!"></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText secondary="10:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={11}>
              <TextField id="outlined-basic-email" label="Type Something" fullWidth />
            </Grid>
            {/* <Grid xs={1} align="right">
              <Fab color="primary" aria-label="add"><SendRoundedIcon /></Fab>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Chat;