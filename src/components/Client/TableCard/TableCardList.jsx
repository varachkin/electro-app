import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromList } from "../../../features/table/tableSlice";

export default function TableCardList({ card }) {
    const dispatch = useDispatch();
    const handleRemoveFromList = (e) => {
        dispatch(removeFromList(e.currentTarget.id))
    }

    return (
        <Card className={`card-wrapper-row`}>
            <CardMedia
                className='table-card-img'
                image={card.image_url}
                title="tool"
            />
            <CardContent className='table-card-description'>
                <Typography variant="h5" color="text.secondary">
                    {card.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {card.description}
                </Typography>
            </CardContent>
            <IconButton
                variant='contained'
                color='error'
                className='table-card-list-btn'
                onClick={handleRemoveFromList}
                id={card.id}
            >
                <CancelIcon />
            </IconButton>
        </Card>
    )
}