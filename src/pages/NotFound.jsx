import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center p-4 text-center">
            <div className="text-6xl mb-4">🤔</div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Page Not Found / Página No Encontrada</h1>
            <p className="text-slate-500 mb-8 max-w-md">
                The link you clicked seems to be broken or the class doesn't exist.
            </p>
            <Link to="/" className="btn-primary">
                🏠 Go Home / Ir al Inicio
            </Link>
        </div>
    );
}

export default NotFound;
