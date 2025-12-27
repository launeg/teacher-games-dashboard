import { useState } from "react";

function AddClassModal({ onClose, onAdd }) {
    const [className, setClassName] = useState("");

    const handleSubmit = () => {
        if (!className) return;
        onAdd(className);
        onClose();
    };

    return (
        <div style={overlayStyle}>
            <div style={modalStyle}>
                <h2>Add New Class</h2>
                <input
                    placeholder="Class name (e.g. Second Grade)"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                />
                <div style={{ marginTop: "10px" }}>
                    <button onClick={handleSubmit}>Add</button>
                    <button onClick={onClose} style={{ marginLeft: "10px" }}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const modalStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
};

export default AddClassModal;
