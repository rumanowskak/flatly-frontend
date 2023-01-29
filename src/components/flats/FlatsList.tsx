import React from 'react'
import { useState } from 'react';
import FlatItem from './FlatItem';
import myData from './flats.json';

interface FilterOptions {
  page: number,
  size: number,
  sort: string,
  latitude: string,
  longitude: string,
  radius: number,
  minPrice: number,
  maxPrice: number,
  dateFrom: string,
  dateTo: string
}

const PAGE_SIZE = 4

export function FlatsList(props : any)
{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [filterOptions, setFilterOptions] = useState<FilterOptions>({
      page: 0,
      size: PAGE_SIZE,
      sort: "",
      latitude: "",
      longitude: "",
      radius: -1,
      minPrice: 0,
      maxPrice: 10000,
      dateFrom: "",
      dateTo: ""
    })

    const [sortBy, setSortBy] = useState("");
    const [searchBy, setSearchBy] = useState("");

    function fetchFlats() {
        let url = "https://pw-flatly.azurewebsites.net/flats?page=" + filterOptions.page + "&size=" + filterOptions.size;
        url += (filterOptions.sort !== "") && ("&sort=" + filterOptions.sort);

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

    function handleSubmit(e : any)
    {
      // fetchFlats();
      setData(myData.slice(filterOptions.page * PAGE_SIZE, (filterOptions.page + 1) * PAGE_SIZE))
    }

    function handlePaging(e : any)
    {
      if (e.target.value == "prevPage")
      {
        setFilterOptions({...filterOptions, page: filterOptions.page - 1})
        setData(myData.slice((filterOptions.page - 1) * PAGE_SIZE, filterOptions.page * PAGE_SIZE))
      }
      if (e.target.value == "nextPage")
      {
        setFilterOptions({...filterOptions, page: filterOptions.page + 1})
        setData(myData.slice((filterOptions.page + 1) * PAGE_SIZE, (filterOptions.page + 2) * PAGE_SIZE))
      }
      
    }

    React.useEffect(() => {
        // fetchFlats();
        setData(myData.slice(filterOptions.page * PAGE_SIZE, (filterOptions.page + 1) * PAGE_SIZE))
    }, []);

    return (
      <>
      <div className="w-75 m-auto d-flex" style={{textAlign: 'left'}}>
        <div className="flex-grow-1">
          <button className='btn btn-secondary' value="addFlat" onClick={props.updateTab}>Add Flat</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex">
            <div className='mx-2 my-auto'>
              <label htmlFor="sortBy" className="mx-1">Sort By:</label>
              <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="">None</option>
                <option value="priceAsc">Price (Ascending)</option>
                <option value="priceDesc">Price (Descending)</option>
                <option value="capacityAsc">Capacity (Ascending)</option>
                <option value="capacityDesc">Capacity (Descending)</option>
              </select>
            </div>
            <div className='mx-2 my-auto'>
              <label htmlFor="minPrice" className="mx-1">Min Price:</label>
              <input id="minPrice" type="number" value={filterOptions.minPrice} 
              onChange={(e) => setFilterOptions({...filterOptions, minPrice: Number(e.target.value)})} />
            </div>
            <div className='mx-2 my-auto'>
              <label htmlFor="maxPrice" className="mx-1">Max Price:</label>
              <input id="maxPrice" type="number" value={filterOptions.maxPrice} 
              onChange={(e) => setFilterOptions({...filterOptions, maxPrice: Number(e.target.value)})} />
            </div>
            <button className="btn btn-success" type="submit">Submit</button>
            </div>
          </form>
      </div>
      <div>
        {data.map(flat => (
              <FlatItem key={flat.id} item={flat} setCurrentFlat={props.setCurrentFlat} switchToEditTab={props.switchToEditTab}/>
          ))}
      </div>
      <div>
      <button className="btn btn-dark mx-1 my-3" disabled={filterOptions.page===0} value="prevPage" 
            onClick={handlePaging} style={{width: 150}}>Previous Page</button>
      <button className="btn btn-dark mx-1 my-3" disabled={myData.length < PAGE_SIZE} value="nextPage" 
            onClick={handlePaging} style={{width: 150}}>Next Page</button>
      </div>
        
      </>
    );
}
