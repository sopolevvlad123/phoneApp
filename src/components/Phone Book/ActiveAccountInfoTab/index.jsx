import './style.scss';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from 'react-avatar';
import randomColor from 'randomcolor';

// eslint-disable-next-line no-unused-vars
const ActiveAccountInfoTab = ({ activeAccount }) => (
  <List>
    <ListItem className="infoTab">
      <ListItemAvatar className="avatarGroup">
        <Avatar color={randomColor()} name={activeAccount.name.charAt(0)} size="40" src={activeAccount.avatar} />
        <ListItemText primary={activeAccount.name} />
        <ListItemText primary={activeAccount.surname} />
      </ListItemAvatar>
      <ListItemText primary={activeAccount.phone} />
      <ListItemText primary={activeAccount.email} />
    </ListItem>
  </List>
);

export default ActiveAccountInfoTab;
