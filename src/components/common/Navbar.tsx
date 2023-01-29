import React from 'react'

export default function Navbar(props : any)
{
    return (
        <div className='m-2 d-flex border-bottom border-dark'>
            <div style={{textAlign: 'left'}} className="flex-grow-1">
                <button className="btn btn-primary m-2" style={{width: 150}} onClick={props.updateTab} value="flatsList">Flats</button>
                <button className="btn btn-primary m-2" style={{width: 150}} onClick={props.updateTab} value="bookingsList">Bookings</button>
            </div>
            <div style={{textAlign: 'right'}}>
                <button className="btn btn-secondary m-2" style={{width: 100}} onClick={props.updateTab} value="loginView">Sign In</button>
                <button className="btn btn-secondary m-2" style={{width: 100}} onClick={props.updateTab} value="registrationView">Sign Up</button>
            </div>
            
        </div>
    )
}