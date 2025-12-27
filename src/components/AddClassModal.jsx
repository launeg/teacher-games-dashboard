import { useState } from "react";

function AddClassModal({ onClose, onAdd }) {
    const [className, setClassName] = useState("");

    const handleSubmit = () => {
        const trimmedName = className.trim();
        if (!trimmedName) return;
        onAdd(trimmedName);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl scale-100 animate-pop-in">
                <div className="text-center mb-6">
                    <span className="text-4xl">✨</span>
                    <h2 className="text-2xl font-bold text-brand-text mt-2">Nueva Clase / New Class</h2>
                    <p className="text-slate-500 text-sm">Create a space for your estudiantes.</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Nombre de la Clase</label>
                        <input
                            className="input-field"
                            placeholder="e.g. Spanish 101"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                            autoFocus
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button onClick={onClose} className="flex-1 py-3 px-4 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors">
                            Cancelar
                        </button>
                        <button onClick={handleSubmit} className="flex-1 btn-primary">
                            Crear / Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddClassModal;
