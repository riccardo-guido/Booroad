import ParticipantCard from "../components/ParticipantCard";
export default function ParticipantList({ participants }) {
  console.log(participants);
  return (
    <div className="container">
      <div className="row">
        <h1>Card Partecipants</h1>
        {participants.map((participant, index) => {
          return (
            <div key={index} className="col-4">
              <ParticipantCard
                idParticipant={participant.id}
                firstName={participant.firstName}
                lastName={participant.lastName}
                email={participant.email}
                phone={participant.phone}
                taxCode={participant.taxCode}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
