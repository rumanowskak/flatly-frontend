import React, { useState } from "react";

const AddFlat = () => {
  const [flat, setFlat] = useState({
    country: "",
    town: "",
    address: "",
    capacity: 0,
    rooms: 0,
    price: "",
    contactInfo: "",
    description: ""
  });

  const handleInputChange = (event : any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFlat({
      ...flat,
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
        <h3 className="text-center mb-4">Add New Flat</h3>
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
                  value={flat.country}
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
                  value={flat.town}
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
                  value={flat.address}
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
                  value={flat.capacity}
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
                  value={flat.rooms}
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
                        value={flat.price}
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
                                value={flat.contactInfo}
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
                                value={flat.description}
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

export default AddFlat;
