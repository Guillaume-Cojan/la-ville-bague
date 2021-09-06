import { Link } from "react-router-dom";

function Event({ title, img, description }) {
    return (
        <div>
            <div
                style={{
                    borderTop: "1px solid rgb(226, 226, 226) ",
                }}
            ></div>
            <div className="event-card">
                <h3>{title}</h3>
                <Link className="event-link" to="/">
                    <img className="img-polaroid" src={img} alt="event" />
                </Link>
                <p>{description}</p>
                <Link className="event-link" to="/">
                    EN SAVOIR PLUS
                </Link>
            </div>
        </div>
    );
}

export default Event;
