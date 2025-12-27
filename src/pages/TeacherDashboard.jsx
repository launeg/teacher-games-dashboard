
import { useState } from "react";
import { Link } from "react-router-dom";
import ClassCard from "../components/ClassCard";
import AddClassModal from "../components/AddClassModal";
import { useApp } from "../context/AppContext";

function TeacherDashboard() {
    const { classes, addClass } = useApp();
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="min-h-screen bg-brand-cream p-8">
            <header className="mb-10 flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-extrabold text-brand-blue tracking-tight">Español con Negrin</h1>
                    <p className="text-slate-500 mt-2 text-lg">Maestra Dashboard / Manage your classes</p>
                </div>
                <div className="flex gap-4">
                    <Link
                        to="/teacher/games"
                        className="btn-secondary flex items-center gap-2"
                    >
                        🧩 Add Game / Agregar Juego
                    </Link>
                    <button
                        onClick={() => setShowModal(true)}
                        className="btn-primary"
                    >
                        ✨ New Class / Nueva Clase
                    </button>
                </div>
            </header>

            {classes.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100 dashed-border">
                    <p className="text-2xl text-slate-400 font-medium">No classes yet / No hay clases</p>
                    <p className="text-slate-400 mt-2">Click "Nueva Clase" to get started.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((cls, index) => (
                        <ClassCard key={index} name={cls.name} slug={cls.slug} />
                    ))}
                </div>
            )}

            {showModal && (
                <AddClassModal
                    onClose={() => setShowModal(false)}
                    onAdd={addClass}
                />
            )}

            {/* Debug/Reset Footer */}
            <footer className="mt-20 border-t border-slate-200 pt-8 text-center">
                <p className="text-slate-400 text-sm mb-4">Debugging Tools</p>
                <button
                    onClick={() => {
                        if (confirm("Are you sure? This will delete all classes and games. / ¿Estás seguro?")) {
                            localStorage.clear();
                            window.location.reload();
                        }
                    }}
                    className="text-red-400 text-xs hover:text-red-600 underline"
                >
                    ⚠️ Reset All Data / Borrar Todo
                </button>
            </footer>
        </div>
    );
}

export default TeacherDashboard;
