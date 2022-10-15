import './Main.css'

const Main=(props)=>{
    return(
        <div className='alpha'>
            <div className="ui">
                {props.children}
            </div>  
        </div>
    )
}

export default Main