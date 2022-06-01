import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Dish, MenuConfig } from './models/MenuConfig';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
interface MenuProps {
    config: MenuConfig
}

function Menu(props: MenuProps) {
  return (
    <div className="App">
      <Grid 
          container
          direction={'column'}
          padding={4}
        >
        <Typography variant={"h2"} sx={{marginBottom: 6}}>Welcome to {props.config.restaurant.name}</Typography>
        
        <Box sx={{ display: 'grid', gridTemplateRows: `repeat(${props.config.dishes.length + 3}, 1fr)`, width: '100%' }}>
            { props.config.dishes.map((d) => <MenuItem dish={d}/>) }
        </Box>
      </Grid>
    </div>
  );
}

export default Menu;


interface MenuItemProps {
    dish: Dish;
}

const MenuItem: FC<MenuItemProps> = ({ dish }) => {
    return (
        <Grid 
          container
          direction={'row'}
          spacing={4}
          sx={{ 
            bgcolor: (theme) => (theme.palette.secondary.light),
            border: '1px solid',
            borderColor: (theme) => (theme.palette.secondary.light),
            borderRadius: '25px',
            }}
          >
          <Grid item xs={9}>
            <Stack direction={"column"}>
              <Typography variant={"h4"}>{dish.title}</Typography>
              <Typography variant={"body2"}>{dish.ingredients}</Typography>
            </Stack>
           </Grid>
          <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton
              color="primary"
              sx={{
                width:"2em",
                height:"2em",
                marginRight: "1em",
                marginBottom:"0.5em",
                alignSelf: "flex-end",
                backgroundColor: (theme) => (theme.palette.secondary.main),
              }}>
              <AddIcon
               sx={{ 
                width:"1em",
                height:"1em",
              }}/>
            </IconButton>
          </Grid>
        </Grid>
    );
  }