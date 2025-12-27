import { useState } from "react";
import ClassCard from "../components/ClassCard";
import AddClassModal from "../components/AddClassModal";

function TeacherDashboard() {
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addClass = (className) => {
    setClasses([...classes, { name: className }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Teacher Dashboard</h1>

      <button onClick={() => alert("Add Game (coming soon)")}>
        ➕ Add Game
      </button>

      <button onClick={() => setShowModal(true)} style={{ marginLeft: "10px" }}>
        ➕ Add Class
      </button>

      <div style={{ marginTop: "20px" }}>
        {classes.map((cls, index) => (
          <ClassCard key={index} name={cls.name} />
        ))}
      </div>

      {showModal && (
        <AddClassModal
          onClose={() => setShowModal(false)}
          onAdd={addClass}
        />
      )}
    </div>
  );
}

export default TeacherDashboard;
