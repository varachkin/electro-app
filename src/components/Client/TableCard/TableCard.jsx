import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { themeDark, themeLight } from "../../../utils/theme";
import { ThemeProvider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectTool } from "../../../features/table/tableSlice";

export default function TableCard({ type, card }) {
    const dispatch = useDispatch();

    const handleChooseTool = (event) => {
        console.dir(event.currentTarget)
        dispatch(selectTool(event.currentTarget.id))
    }
    return (
        <ThemeProvider theme={card.selected || !card.available ? themeDark : themeLight}>
            <Card
                className={`${type === 'row' ? 'card-wrapper-row' : 'card-wrapper'} ${card.selected || !card.available ? 'dark-card' : 'light-card'} ${!card.available ? 'disabled-card' : ''}`}
                onClick={card.available ? handleChooseTool : null}
                id={card.id}
            >
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
                <Button
                    style={{fontSize: '0.75rem'}}
                    variant='contained'
                    color={card.selected ? 'info' : 'primary'}
                    className='table-card-btn'

                    disabled={!card.available}
                >
                    {card.selected ? 'Return' : card.available ? 'Choose' : 'not available'}
                </Button>
            </Card>
        </ThemeProvider>
    )
}