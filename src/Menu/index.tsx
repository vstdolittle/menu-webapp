import React, { FC } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { Dish, MenuConfig } from './models/MenuConfig';
import { MenuItemCard } from './components/MenuItemCard';
import { ShoppingBasket } from '@mui/icons-material';
interface MenuProps {
    config: MenuConfig
}

const Menu: FC<MenuProps> = ({ config }) => {
  return (
      <Grid 
          container
          direction={'column'}
          padding={4}
        >
        <Typography variant={"h2"} sx={{marginBottom: 6}}>Welcome to {config.restaurant.name}</Typography>
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
              <ShoppingBasket
               sx={{ 
                width:"1em",
                height:"1em",
              }}/>
            </IconButton>
        <UserMenu dishes={config.dishes} />
      </Grid>
  );
}


interface UserMenuProps {
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
      { dishes.map((d: Dish, idx: number) => <MenuItemCard dish={d} key={idx}/>) }
    </Box>
  );
}

export default Menu;