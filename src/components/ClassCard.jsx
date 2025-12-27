import { Link } from "react-router-dom";

function ClassCard({ name }) {
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    return (
        <div style={cardStyle}>
            <h3>{name}</h3>
            <p>Class URL:</p>
            <Link to={`/class/${slug}`}>
                /class/{slug}
            </Link>
        </div>
    );
}

const cardStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
};

export default ClassCard;
