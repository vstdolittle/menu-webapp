
import { ShoppingBasket } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';


const BasketHeader: FC = () => {
  const count = useAppSelector((state) => state.basket.itemsCount);
  
    return (
        <Grid 
            container
            direction={'row'}
            padding={1}
            paddingRight={3}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                border: '1px solid',
                borderColor: (theme) => (theme.palette.secondary.light),
                borderRadius: '1px',
            }}
          >
          <Typography variant="body2" sx={{alignSelf: "center", padding: 5}}>{count} items selected</Typography>
          <IconButton
                color="primary"
                sx={{
                  width:"2em",
                  height:"2em",
                  marginRight: "0.5em",
                  marginBottom:"0.5em",
                  alignSelf: "flex-end",
                  alignContent: "flex-end",
                  backgroundColor: (theme) => (theme.palette.secondary.main),
                }}>
                <ShoppingBasket
                 sx={{ 
                  width:"1em",
                  height:"1em",
                }}/>
              </IconButton>
        </Grid>
    );
  }

export default BasketHeader;