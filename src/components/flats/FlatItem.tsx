import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import flatIcon from "./icon.jpg"

interface Flat {
    id : number,
    country : string,
    town : string,
    address : string,
    capacity : number,
    rooms : number,
    footage : number,
    price: string,
    contactInfo : string,
    description : string,
    thumbnail : string
}

interface Props {
    item: Flat,
    setCurrentFlat: any,
    switchToEditTab: any
}

export default function FlatList(props : Props)
{
    const item = props.item;

    function handleEditButton(e : any)
    {
        // call API to fetch flat using e.target.value
        const newFlat : Flat = {
            id: 1,
            country: "Poland",
            town: "Warsaw",
            address: "Filtrowa",
            capacity: 1,
            rooms: 2,
            footage: 3,
            price: "12.00",
            contactInfo: "kontakt",
            description: "Hello!",
            thumbnail: "thumbnail"
        };

        let flatToEdit = null;
        fetch("https://pw-flatly.azurewebsites.net/flats/" + e.target.value)
          .then((response) => {
            console.log(response);
            return response;
          })
          .then((response) => response.json())
          .then((json) => {
            flatToEdit = json})
          .catch((error) => {console.log("Could not fetch falt. Using a placeholder"); flatToEdit = newFlat})

        props.switchToEditTab(newFlat);
    }

    function handleDeleteButton(e : any)
    {
        fetch("https://pw-flatly.azurewebsites.net/flats/" + e.target.value, 
        {
            method: "DELETE",
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {console.log("Could not delete flat")})
    }

    return (
    <div className="m-auto bg-light w-75 mt-2 d-flex rounded">
        <div className="text-left">
            {/* <img src={flatIcon} style={{width: 100, height: 100}}/> */}
            <img src={`data:image/jpeg;base64,${item.thumbnail}`} style={{width: 100, height: 100}}/>
        </div>
        <div className="w-25" style={{textAlign: "left"}}>
            <b>{item.address}</b><br/>
            <b>Price: </b>{item.price}<br/>
            <b>Capacity: </b>{item.capacity}<br/>
            <b>Rooms: </b>{item.rooms}<br/>
        </div>
        <div className='flex-grow-1' style={{textAlign: "left"}}>
            {item.description}
        </div>
        <div className='my-auto mx-2 align-middle'>
            <button className="btn btn-warning mx-1 btn-sm" style={{width: 80}} value={item.id} onClick={handleEditButton}>Edit</button>
            <button className="btn btn-danger mx-1 btn-sm" style={{width: 80}} value={item.id} onClick={handleDeleteButton}>Delete</button>
        </div>
    </div>
    )
}

//export default FlatItem;