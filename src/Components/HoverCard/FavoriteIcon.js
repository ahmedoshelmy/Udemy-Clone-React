import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.info.main}`,
    color: theme.palette.info.main,
  },
}));

export default function FavoriteIcon() {
  const classes = useStyles();
  return (
    <Avatar className={classes.avatar}>
      <FavoriteBorderIcon />
    </Avatar>
  );
}