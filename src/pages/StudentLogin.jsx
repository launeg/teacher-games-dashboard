import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function StudentLogin() {
    const { className } = useParams();
    const navigate = useNavigate();
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");

    const enterClass = () => {
        if (!first || !last) return;
        navigate(`/class/${className}/dashboard`, {
            state: { first, last },
        });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>{className.replace("-", " ")} Class</h1>

            <input placeholder="First name" onChange={(e) => setFirst(e.target.value)} />
            <br />
            <input placeholder="Last name" onChange={(e) => setLast(e.target.value)} />
            <br />
            <button onClick={enterClass}>Enter Class</button>
        </div>
    );
}

export default StudentLogin;
