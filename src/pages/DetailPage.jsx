import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import trips from "../../data/array";
import ParticipantList from "../components/ParticipantList";

export default function DetailPage() {
  const initialValue = "";

  const { id } = useParams();
  const tripId = parseInt(id);
  const trip = trips.find((t) => t.id === tripId);
  const participants = trip.participants;

  const [filterText, setFilterText] = useState("");
  const [participantsTrip, setParticipantsTrip] = useState(participants);
  console.log(participantsTrip);

  useEffect(() => {
    // Se il campo è vuoto, mostra tutti
    if (filterText.trim() === "") {
      setParticipantsTrip(participants);
    } else {
      const filtered = participants.filter(
        (p) =>
          p.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
          p.lastName.toLowerCase().includes(filterText.toLowerCase())
      );
      setParticipantsTrip(filtered);
    }
  }, [filterText, participants]);

  function handleFilter(e) {
    const data = e.target.value;
    setFilterText(data);
    // filterPartecipant();
  }

  return (
    <>
      <section>
        <div className="container my-4">
          <h2>{trip.id}</h2>
          <p>{trip.destination}</p>
          <p>{trip.startDate}</p>
          <p>{trip.endDate}</p>
        </div>
      </section>

      <section>
        <div className="container my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Cerca partecipante per nome o cognome..."
            value={filterText}
            onChange={handleFilter}
          />
        </div>

        <ParticipantList participants={participantsTrip} />
      </section>
    </>
  );
}
