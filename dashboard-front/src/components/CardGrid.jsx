import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Radial from './Radial';
import { tokens } from "../Themes";
import { useTheme } from "@mui/material";


const CardGrid = ({ cardData }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ backgroundColor: '#599b77', color: colors.primary[400] }}>
              <CardContent>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>{card.title} </Typography>
                <Radial series={card.series}/>
                <Typography>{card.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default CardGrid;
  