// IMPORTS
import { useState } from "react";
import initialTrips from "../../data/array";
import InsertNewTrip from "../components/InsertNewTrip";
import TripsCard from "../components/tripsCard";

export default function Homepage() {
  const [trips, setTrips] = useState(initialTrips);
  return (
    <div className="container my-5">
      <div className="row">
        {trips.map((trip) => {
          return (
            <div key={trip.id} className="col-4">
              <TripsCard
                id={trip.id}
                destination={trip.destination}
                startDate={trip.startDate}
                endDate={trip.endDate}
                participants={trip.participants}
                link={`/detail/${trip.id}`}
              />
            </div>
          );
        })}
        <InsertNewTrip setTrips={setTrips} trips={trips} />
      </div>
    </div>
  );
}
