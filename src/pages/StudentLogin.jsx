
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useApp } from "../context/AppContext";

function StudentLogin() {
    const { className } = useParams();
    const navigate = useNavigate();
    const { loginStudent } = useApp();
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");

    const enterClass = () => {
        if (!first || !last) return;
        const fullName = `${first} ${last}`;
        const success = loginStudent(fullName, className);

        if (success) {
            navigate(`/class/${className}/dashboard`);
        } else {
            alert("Class not found! Please check the URL.");
        }
    };

    return (
        <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md text-center border-b-4 border-brand-lightBlue">
                <div className="mb-6">
                    <span className="text-5xl">👋</span>
                </div>
                <h1 className="text-3xl font-extrabold text-brand-blue mb-2">¡Hola! Welcome to {className.replace("-", " ")}!</h1>
                <p className="text-slate-500 mb-8">Escribe tu nombre para entrar / Enter your name to join.</p>

                <div className="space-y-4 text-left">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 ml-1 mb-1">Nombre / First Name</label>
                        <input
                            className="input-field"
                            placeholder="e.g. Noah"
                            onChange={(e) => setFirst(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 ml-1 mb-1">Apellido / Last Name</label>
                        <input
                            className="input-field"
                            placeholder="e.g. K"
                            onChange={(e) => setLast(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    onClick={enterClass}
                    className="btn-primary w-full mt-8 text-lg"
                >
                    🚀 Entrar / Enter
                </button>
            </div>
        </div>
    );
}

export default StudentLogin;
