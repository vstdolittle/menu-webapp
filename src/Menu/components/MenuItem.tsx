import { Grid, Stack, Typography, IconButton } from "@mui/material";
import { FC } from "react";
import { Dish } from "../models/MenuConfig";
import AddIcon from '@mui/icons-material/Add';

interface MenuItemCardProps {
    dish: Dish;
}

export const MenuItemCard: FC<MenuItemCardProps> = ({ dish }) => {
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