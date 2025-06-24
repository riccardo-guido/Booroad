import { useParams } from "react-router-dom";
import trips from "../../data/array";

export default function ParticipantDetailPage() {
  const { id, idParticipant } = useParams();

  console.log(id);
  console.log(idParticipant);
  const participantId = parseInt(idParticipant);
  const tripId = parseInt(id);

  const trip = trips.find((t) => t.id === tripId);

  const participant = trip.participants.find((p) => p.id === participantId);

  return (
    <>
      <h2>{`${participant.firstName} ${participant.lastName}`}</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{participant.phone}</li>
        <li className="list-group-item">{participant.email}</li>
        <li className="list-group-item">{participant.taxCode}</li>
      </ul>
    </>
  );
}
