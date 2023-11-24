import Button from '@mui/material/Button';

export default function CustomButton({ variant, type, children, onClick, disabled }) {
    let btnStyle = {}

    switch (type) {
        case 'large':
            btnStyle = {
                padding: '1.5rem 3rem',
                border: '0.5px solid',
                width: '75%',
                fontSize: {
                    "xs": 14,
                    "sm": 17,
                    "md": 17,
                    "lg": 17,
                    "xl": 17
                },
                margin: '0.5rem'
            }
            break
        case 'medium':
            btnStyle = {
                padding: '0.75rem',
                border: '0.5px solid',
                width: '75%',
                fontSize: {
                    "xs": 17,
                    "sm": 17,
                    "md": 17,
                    "lg": 17,
                    "xl": 17
                },
                margin: '0.5rem'
            }
            break
        case 'small':
            btnStyle = {
                padding: '0.25rem 1rem',
                border: '0.5px solid',
                width: '75%',
                color: 'white',
                fontSize: {
                    "xs": 17,
                    "sm": 17,
                    "md": 17,
                    "lg": 17,
                    "xl": 17

                },
                margin: '0.5rem',
                borderRadius: '1.5rem'
            }
            break
    }
    return (
        <>
            <Button
                className={type}
                variant={variant}
                onClick={onClick}
                sx={{ ...btnStyle }}
                disabled={disabled}
            >

                {children}

            </Button>
        </>
    )
}