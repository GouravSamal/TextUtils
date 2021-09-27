import React from "react";
import PropTypes from "prop-types"; 
import { Link } from "react-router-dom";

const Navbar = (props) => {


    const changeBlue=()=>{

        if(props.mode==='dark')
        {
            document.body.style.backgroundColor='blue';
            props.showAlert('Blue background active successfully','success')
        }
        else{
            props.showAlert('Blue background is applied only in dark mode','warning')
        }

    }

    const changeRed=()=>{

        if(props.mode==='dark'){

            document.body.style.backgroundColor='red';
            props.showAlert('Red background active successfully','success')
        }
        else{
            props.showAlert('Red background is applied only in dark mode','warning')
        }
    }

    const changeGreen=()=>{

        if(props.mode==='dark'){

            document.body.style.backgroundColor='green';
            props.showAlert('Green background active successfully','success')
        }
        else{
            props.showAlert('Green background is applied only in dark mode','warning')
        }

    }

    const changeYellow=()=>{

        if(props.mode==='dark'){

            document.body.style.backgroundColor='yellow';
            props.showAlert('Yellow background active successfully','success')
        }
        else{
            props.showAlert('Yellow background is applied only in dark mode','warning')
        }

    }

    return (
        <>

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link mx-2" to="/about">{props.aboutText}</Link>
                                {/* <a className="nav-link mx-2" href="/about">{props.aboutText}</a> */}
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form> */}

                        {/* <div className={`form-check form-switch text-${props.bgcolor}`}> */}


                        <div className='mx-3'>
                            <button className="btn btn-primary mx-1" onClick={changeBlue}>Blue</button>

                            <button className="btn btn-warning mx-1" onClick={changeYellow}>Yellow</button>

                            <button className="btn btn-danger mx-1" onClick={changeRed}>Red</button>

                            <button className="btn btn-success mx-1" onClick={changeGreen}>Green</button>
                        </div>

                        <div className={`form-check form-switch text-${(props.mode==='dark')?'light':'dark'}`}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                        </div>


                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes={
                    title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string.isRequired  
                 }

//default props
Navbar.defaultProps={
    title:'Set title here',
    aboutText:'About text here'
};

export default Navbar;
