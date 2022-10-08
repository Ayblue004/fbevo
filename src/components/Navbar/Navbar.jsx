import './Navbar.css';

function Navbar(){
    return(
        <nav>
            <div className="navbar">
                <h4 className='logo'>fbEvo</h4>
                <span className='head'>What is fbEvo?</span>
                <select>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                </select>
            </div>
        </nav>
    )
}

export default Navbar