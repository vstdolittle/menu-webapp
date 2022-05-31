import { Box } from '@mui/material';
import React, { FC } from 'react';
import { Dish, MenuConfig } from './models/MenuConfig';

interface MenuProps {
    config: MenuConfig
}

function Menu(props: MenuProps) {
  return (
    <div className="App">
      <header className="App-header">
        {props.config.restaurant.name}
      </header>
      <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
          { props.config.dishes.map((d) => <MenuItem dish={d}/>) }
      </Box>
    </div>
  );
}

export default Menu;


interface MenuItemProps {
    dish: Dish;
}

const MenuItem: FC<MenuItemProps> = ({ dish }) => {
    return (
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700'
        }}
      >
        <h4>{dish.title}</h4>
        <p>{dish.ingredients}</p>
      </Box>
    );
  }
