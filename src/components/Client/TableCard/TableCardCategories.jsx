import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function TableCardCategories({ type, card, handleSetFilter }) {

    const handleFilter = (e) => {
        handleSetFilter(e, card.name)
    }

    return (
        <div onClick={handleFilter}>
            <Card
                className={`${type.view === 'row' ? 'card-wrapper-row' : 'card-wrapper'}`}
            >
                <CardMedia
                    className={`table-card-img`}
                    image={card.image_url}
                    title="tool"
                />
                <CardContent className='table-card-description'>
                    <Typography variant="h4" color="text.secondary" textAlign='center'>
                        {card.name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}