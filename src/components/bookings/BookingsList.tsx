import React, { useState } from "react";
import BookingItem from "./BookingItem";
import myData from "./bookings.json"

const PAGE_SIZE = 4


export function BookingsList(props : any)
{
    const [isLoading, setLoading] = useState(true);
    const [page, setPage] = useState(0)
    const [data, setData] = useState<any[]>([])

    function fetchFlats() {
      let url = "https://pw-flatly.azurewebsites.net/bookings?page=" + page + "&size=" + PAGE_SIZE;

      setLoading(true);
      fetch(url)
        .then((response) => {
          console.log(response);
          return response;
        })
        .then((response) => response.json())
        .then((json) => {
          setData([...data, ...json])})
        .catch((error) => {})
        .finally(() => {
      setLoading(false)})
    }

    function handlePaging(e : any)
    {
      if (e.target.value == "prevPage")
      {
        setPage(page - 1)
        setData(myData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE))
      }
      if (e.target.value == "nextPage")
      {
        setPage(page + 1)
        setData(myData.slice((page + 1) * PAGE_SIZE, (page + 2) * PAGE_SIZE))
      }
      
    }

    React.useEffect(() => {
        setData(myData.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE))
        console.log(data.length)
    }, []);

    return (
        <div>
            {data.map(booking => (
                <BookingItem key={booking.id} item={booking}/>
            ))}
        </div>
    )

}