
import { useApp } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function StudentDashboard() {
    const { currentUser, classes, logout } = useApp();
    const { className } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate(`/ class/ ${className} `);
        }
    }, [currentUser, navigate, className]);

    if (!currentUser) return null;

    // Find current class to get games
    const currentClass = classes.find(c => c.slug === className);
    const classGames = currentClass ? currentClass.games : [];

    return (
        <div className="min-h-screen bg-brand-cream p-6">
            <header className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm mb-8">
                <h1 className="text-xl font-bold text-slate-700">
                    ¡Hola, <span className="text-brand-blue">{currentUser.name}</span>! 👋
                </h1>
                <div className="flex gap-4 items-center">
                    <div className="bg-brand-yellow/20 text-yellow-700 px-4 py-2 rounded-full font-bold text-sm">
                        🏆 Puntos: 0
                    </div>
                    <button onClick={() => { logout(); navigate(`/ class/ ${className} `); }} className="text-sm font-bold text-slate-400 hover:text-brand-blue">
                        Logout
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Games Section (Main) */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        👾 Mis Juegos / My Games
                    </h2>
                    {classGames.length === 0 ? (
                        <div className="bg-white p-8 rounded-2xl text-center border-dashed border-2 border-slate-200">
                            <p className="text-slate-400">No games assigned to this class yet!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {classGames.map(game => (
                                <div key={game.id} className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-brand-green hover:-translate-y-1 transition-transform cursor-pointer group">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                        {game.type === 'Platformer' ? '🏃‍♂️' : '📝'}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800">{game.title}</h3>
                                    <p className="text-slate-400 text-sm mt-1">{game.description}</p>
                                    <button className="mt-4 w-full py-2 bg-brand-green/10 text-brand-green font-bold rounded-lg group-hover:bg-brand-green group-hover:text-white transition-colors">
                                        Jugar / Play
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Leaderboard Section (Sidebar) */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                        🏆 Tabla de Puntos / Leaderboard
                    </h2>
                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <ol className="space-y-4">
                            <li className="flex items-center justify-between p-3 bg-brand-yellow/10 rounded-xl border border-brand-yellow/30">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-yellow-600 text-lg w-6">1</span>
                                    <span className="font-semibold text-slate-800">Emma R.</span>
                                </div>
                                <span className="font-bold text-brand-blue">120 pts</span>
                            </li>
                            <li className="flex items-center justify-between p-3 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-slate-400 text-lg w-6">2</span>
                                    <span className="font-semibold text-slate-800">Lucas M.</span>
                                </div>
                                <span className="font-bold text-brand-blue">95 pts</span>
                            </li>
                            <li className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 ring-2 ring-brand-blue/20">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-slate-400 text-lg w-6">3</span>
                                    <span className="font-bold text-brand-blue">You</span>
                                </div>
                                <span className="font-bold text-brand-blue">0 pts</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;
