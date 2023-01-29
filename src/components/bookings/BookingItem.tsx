import Moment from 'moment';

interface Tenant
{
    name: string,
    surname: string,
    email: string,
}


interface Booking
{
    id: number,
    flatId: number,
    tenant: Tenant,
    dateFrom: string,
    dateTo: string,
}

interface Props
{
    item: Booking,
}


export default function BookingItem(props : Props)
{
    const item = props.item;

    function handleCancleButton(e : any)
    {
        fetch("https://pw-flatly.azurewebsites.net/bookings/" + e.target.value, 
        {
            method: "DELETE",
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {console.log("Could not cancel booking")})
    }

    return (
        <div className="m-auto bg-light w-75 mt-2 d-flex rounded">
            <div className="w-25 flex-grow-1" style={{textAlign: "left"}}>
                <b>{item.tenant.name} {item.tenant.surname} ({item.tenant.email})</b><br/>
                <b>From: </b>{Moment(item.dateFrom).format('DD-MM-YYYY')}<br/>
                <b>To: </b>{Moment(item.dateTo).format('DD-MM-YYYY')}<br/>
                <b>Flat: </b>{item.flatId}<br/>
            </div>
            <div className='my-auto mx-2 align-middle d-flex'>
                <button className="btn btn-danger h-50" value={item.id} onClick={handleCancleButton}>Cancel</button>
            </div>
        </div>
    )
}