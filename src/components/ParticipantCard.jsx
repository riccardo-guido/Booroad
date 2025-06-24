import { Link, useParams } from "react-router-dom";

export default function ParticipantCard({
  idParticipant,
  firstName,
  lastName,
}) {
  const { id } = useParams();
  return (
    <div className="card h-100 mb-0" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">{`${firstName} ${lastName}`}</h5>
            <Link
              to={`/detail/${id}/info/${idParticipant}`}
              className="btn btn-primary"
            >
              Vedi info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
