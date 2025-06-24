import { useState } from "react";

export default function InsertNewParticipant({
  participants,
  setParticipants,
}) {
  const [participantInput, setParticipantInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    taxCode: "",
  });

  const handleParticipantChange = (e) => {
    const { name, value } = e.target;
    setParticipantInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addParticipant = () => {
    if (!participantInput.firstName || !participantInput.lastName) return;
    setParticipants([...participants, participantInput]);
    setParticipantInput({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      taxCode: "",
    });
  };

  return (
    <div className="container my-5">
      <h5>Aggiungi partecipante</h5>
      <input
        name="firstName"
        value={participantInput.firstName}
        onChange={handleParticipantChange}
        className="form-control mb-2"
        placeholder="Nome"
        required
      />
      <input
        name="lastName"
        value={participantInput.lastName}
        onChange={handleParticipantChange}
        className="form-control mb-2"
        placeholder="Cognome"
        required
      />
      <input
        name="email"
        value={participantInput.email}
        onChange={handleParticipantChange}
        className="form-control mb-2"
        placeholder="Email"
      />
      <input
        name="phone"
        value={participantInput.phone}
        onChange={handleParticipantChange}
        className="form-control mb-2"
        placeholder="Telefono"
      />
      <input
        name="taxCode"
        value={participantInput.taxCode}
        onChange={handleParticipantChange}
        className="form-control mb-2"
        placeholder="Codice Fiscale"
      />

      <button
        type="button"
        className="btn btn-secondary mb-3"
        onClick={addParticipant}
      >
        Aggiungi partecipante
      </button>
    </div>
  );
}
