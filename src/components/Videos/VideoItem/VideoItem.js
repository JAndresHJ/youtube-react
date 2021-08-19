import React from 'react';

// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';

// Styles
import { useStyles } from './styles';

const VideoItem = ({ title, publishTime, thumbnails, description }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={publishTime.substring(0, 10)} />
      <CardActionArea>
        <CardMedia className={classes.media} image={thumbnails.high.url} title={title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default VideoItem;
