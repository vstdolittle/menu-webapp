import React, { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Dish, MenuConfig } from './models/MenuConfig';
import { MenuItemCard } from './components/MenuItem';
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
        <UserMenu dishes={props.config.dishes} />
      </Grid>
    </div>
  );
}


type UserMenuProps = {
  dishes: Dish[];
};
const UserMenu: FC<UserMenuProps> = ({ dishes }) => {
  if(!dishes) {
    return (
      <Typography variant="h1">No dishes found. Probably something is wrong</Typography>
    );
  }
  return (
    <Box sx={{ display: 'grid', gridTemplateRows: `repeat(${dishes.length + 3}, 1fr)`, width: '100%' }}>
      { dishes.map((d: Dish) => <MenuItemCard dish={d}/>) }
    </Box>
  );
}

export default Menu;

