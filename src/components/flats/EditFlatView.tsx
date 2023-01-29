import React, { useState } from "react";

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
    initialFlat: any,
}

const EditFlat: React.FC<Props> = ({ initialFlat }) => {
  const [currentFlat, setCurrentFlat] = useState(initialFlat)

  const handleInputChange = (event : any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setCurrentFlat({
      ...currentFlat,
      [name]: value
    });
  };

  const handleSubmit = (event : any) => {
    event.preventDefault();
    // send the data to the API here
  };

  return (
    <div className="d-flex align-items-center h-100">
      <form className="m-auto" onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Edit Flat</h3>
        <table className="table mb-0">
          <tbody>
            <tr>
              <td className="font-weight-bold">Country:</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  value={currentFlat.country}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Town:</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="town"
                  name="town"
                  value={currentFlat.town}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Address:</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={currentFlat.address}
                  onChange={handleInputChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Capacity:</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  id="capacity"
                  name="capacity"
                  value={currentFlat.capacity}
                  onChange={handleInputChange}
                  required
                  min={0}
                />
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Rooms:</td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  id="rooms"
                  name="rooms"
                  value={currentFlat.rooms}
                  onChange={handleInputChange}
                  required
                  min={0}
                />
              </td>
            </tr>
            <tr>
                <td className="font-weight-bold">Price:</td>
                <td>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        value={currentFlat.price}
                        onChange={handleInputChange}
                        required
                    />
            </td>
                    </tr>
                    <tr>
                    <td className="font-weight-bold">Contact Information:</td>
                    <td>
                    <input
                                type="text"
                                className="form-control"
                                id="contactInfo"
                                name="contactInfo"
                                value={currentFlat.contactInfo}
                                onChange={handleInputChange}
                                required
                                />
                    </td>
                    </tr>
                    <tr>
                    <td className="font-weight-bold">Description:</td>
                    <td>
                    <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={currentFlat.description}
                                onChange={handleInputChange}
                                required
                                maxLength={500}
                                />
                    </td>
                    </tr>
                    </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary mt-3">
                    Submit
                    </button>
                    </form>
                    </div>
                    );
};

export default EditFlat;
