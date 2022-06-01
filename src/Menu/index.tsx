import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Dish, MenuConfig } from './models/MenuConfig';

interface MenuProps {
    config: MenuConfig
}

function Menu(props: MenuProps) {
  return (
    <div className="App">
        <Box
          sx={{
            border: '1px solid',
            borderColor: (theme) =>
            theme.palette.primary.main,
            p: 1,
            m: 1,
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700'
          }}
        >
        <Typography variant={"h2"}>{props.config.restaurant.name}</Typography>
        
        <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
            { props.config.dishes.map((d) => <MenuItem dish={d}/>) }
        </Box>
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
          bgcolor: (theme) => (theme.palette.primary.light),
          color: (theme) => ('grey.300'),
          border: '1px solid',
          borderColor: (theme) =>
          theme.palette.primary.main,
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700'
        }}
      >
        <Typography variant={"h4"}>{dish.title}</Typography>
        <Typography variant={"body2"}>{dish.ingredients}</Typography>
      </Box>
    );
  }
