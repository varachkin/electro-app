import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import { markAsSelect } from '../../../features/user/userSlice';

export default function TableCardReturnList({ card }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleReturn = (event) => {
        dispatch(markAsSelect(event.currentTarget.id))
        navigate(`/return`)
    }
    return (

        <Card
            className={`card-wrapper-row`}
            onClick={!card.returned ? handleReturn : null}
            id={card.id}>
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
                color={`${card.returned ? 'success' : 'primary'}`}
                className='table-return-list-btn'

            >
                {card.returned ? <CheckCircleIcon /> : <ExitToAppIcon />}
            </IconButton>
        </Card>
    )
}