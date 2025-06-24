import initialTrips from "../../data/array";

import { useState } from "react";

export default function InsertNewTrip({ setTrips, trips }) {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    participants: [],
  });

  const handleTripChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrip = {
      id: trips.length + 1,
      ...formData,
    };
    setTrips([...trips, newTrip]);
    initialTrips.push(newTrip);
    setFormData({
      destination: "",
      startDate: "",
      endDate: "",
      participants: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="destination"
        value={formData.destination}
        onChange={handleTripChange}
        className="form-control mb-2"
        placeholder="Destinazione"
        required
      />
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleTripChange}
        className="form-control mb-2"
        required
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleTripChange}
        className="form-control mb-2"
        required
      />

      <button type="submit" className="btn btn-primary">
        Salva Viaggio
      </button>
    </form>
  );
}
