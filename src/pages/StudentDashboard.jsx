import { useLocation } from "react-router-dom";

function StudentDashboard() {
    const { state } = useLocation();

    return (
        <div style={{ padding: "20px" }}>
            <h1>Welcome {state?.first} {state?.last}</h1>

            <h2>Games</h2>
            <ul>
                <li>Math Runner (coming soon)</li>
                <li>Word Match (coming soon)</li>
            </ul>

            <h2>Leaderboard</h2>
            <ol>
                <li>Emma R – 120 pts</li>
                <li>Lucas M – 95 pts</li>
                <li>You – 0 pts</li>
            </ol>
        </div>
    );
}

export default StudentDashboard;
