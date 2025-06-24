import { Link } from "react-router-dom";
export default function TripsCard({
  id,
  link,
  destination,
  startDate,
  endDate,
}) {
  return (
    <div className="card h-100 mb-0" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">{destination}</h5>
            <p className="card-text">{startDate}</p>
            <p className="card-text fw-bold ">{endDate}</p>
            <Link to={`/detail/${id}`} className="btn btn-primary">
              Vedi altro
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
