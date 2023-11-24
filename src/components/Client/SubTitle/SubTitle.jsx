export default function SubTitle({children, bold}){
    
    return (
        <h3 className={`subTitle ${bold? 'subTitle-bold' : ''}`}>
            {children.toUpperCase()}
        </h3>
    )
}