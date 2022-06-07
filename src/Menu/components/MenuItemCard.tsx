import { Grid, Stack, Typography, IconButton } from "@mui/material";
import { FC } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Dish } from "../models/Dish";
import { addToBasket, removeFromBasket } from "../redux/slices/basket";

interface MenuItemCardProps {
    dish: Dish;
}

export const MenuItemCard: FC<MenuItemCardProps> = ({ dish }) => {
    const ingredients = () => {
      let displayStr = `included: `;
      dish.ingredients.forEach((ingredient: string, idx: number)=> {
        displayStr += `${idx === dish.ingredients.length -1 ? `${ingredient}` :`${ingredient}, ` }`
      })

      return displayStr;
    }

    const dispatch = useAppDispatch();
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
            marginBottom: 6,
            marginTop: 3
            }}
          >
          <Grid item xs={9}>
            <Stack direction={"column"}>
              <Typography variant={"h4"}>{dish.title}</Typography>
              <Typography variant={"body2"}>{ingredients()}</Typography>
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
              }}
              onClick={()=> dispatch(addToBasket(dish.title))}>
              <AddIcon
               sx={{ 
                width:"1em",
                height:"1em",
              }}/>
            </IconButton>
            <IconButton
              color="primary"
              sx={{
                width:"2em",
                height:"2em",
                marginRight: "1em",
                marginBottom:"0.5em",
                alignSelf: "flex-end",
                backgroundColor: (theme) => (theme.palette.secondary.main),
              }}
              onClick={()=> dispatch(removeFromBasket(dish.title))}>
              <RemoveIcon
               sx={{ 
                width:"1em",
                height:"1em",
              }}/>
            </IconButton>
          </Grid>
        </Grid>
    );
  }