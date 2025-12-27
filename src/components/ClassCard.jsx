import { Link } from "react-router-dom";

function ClassCard({ name, slug }) {
    // Paranoia: Force clean the slug even if it was passed in props
    const rawSlug = slug || name;
    const safeSlug = rawSlug.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

    return (
        <div className="card group hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
                <div className="bg-brand-lightBlue/20 p-3 rounded-full">
                    <span className="text-3xl">🎓</span>
                </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-2">{name}</h3>
            <p className="text-slate-400 text-sm mb-4">Class URL:</p>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center justify-between">
                <code className="text-sm text-brand-blue font-mono">/class/{safeSlug}</code>
                <Link
                    to={`/class/${safeSlug}`}
                    className="text-brand-green font-bold text-sm hover:underline"
                >
                    Open ➜
                </Link>
            </div>
        </div>
    );
}

const cardStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
};

export default ClassCard;
