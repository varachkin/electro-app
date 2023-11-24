export default function RoundItem({ children }) {
    
    return (
        <div className="round-item-block"
            style={{
                height: '3.5rem',
                aspectRatio: '1/1',
                borderRadius: '50%',
                border: '3px solid white',
                display: 'flex',
                lineHeight: '3.5rem',
                justifyContent: 'center',
                backgroundColor: 'white',
                color: '#010631',
                fontSize: '2rem',
                fontWeight: '600'
            }}>
            {children}
        </div>
    )
}