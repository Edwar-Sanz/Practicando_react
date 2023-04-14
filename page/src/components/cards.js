import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard({title, description, image, to, height}) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea component={Link} to={to}>
        <CardMedia
          component="img"
          height={height}
          src={image}
          alt="Project image"
          
        />
        
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}