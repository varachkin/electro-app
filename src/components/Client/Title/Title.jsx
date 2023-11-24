export default function Title({children}){
    return (
        <h2 className='title'>
            {children.toUpperCase()}
        </h2>
    )
}