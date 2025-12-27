import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    // Load initial state from localStorage or use defaults
    const [classes, setClasses] = useState(() => {
        const saved = localStorage.getItem('classes');
        return saved ? JSON.parse(saved) : [];
    });

    const [games, setGames] = useState(() => {
        const saved = localStorage.getItem('games');
        return saved ? JSON.parse(saved) : [
            { id: 1, title: 'Verbo Run', description: 'Practice verb conjugations in this infinite runner.', type: 'Platformer' },
            { id: 2, title: 'Palabra Match', description: 'Match Spanish words with their English meanings.', type: 'Puzzle' }
        ];
    });

    const [currentUser, setCurrentUser] = useState(() => {
        const saved = localStorage.getItem('currentUser');
        return saved ? JSON.parse(saved) : null;
    });

    // Save to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem('classes', JSON.stringify(classes));
    }, [classes]);

    useEffect(() => {
        localStorage.setItem('games', JSON.stringify(games));
    }, [games]);

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
    }, [currentUser]);

    // Actions
    const addClass = (className) => {
        const safeName = className.trim();
        const newClass = {
            id: Date.now().toString(),
            name: safeName,
            slug: safeName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
            games: []
        };
        setClasses([...classes, newClass]);
    };

    const addGame = (game) => {
        const newGame = { ...game, id: Date.now() };
        setGames([...games, newGame]);
    };

    const assignGameToClass = (gameId, classId) => {
        setClasses(classes.map(cls => {
            // Find the class by name (since we use name/slug loosely here, but ideally ID)
            // For MVP we matched by name in the modal, let's support match by Name or ID if passed.
            if (cls.name === classId || cls.id === classId) {
                // Avoid duplicates
                const alreadyExists = cls.games.some(g => g.id === gameId);
                if (alreadyExists) return cls;

                const gameToAdd = games.find(g => g.id === gameId);
                return { ...cls, games: [...cls.games, gameToAdd] };
            }
            return cls;
        }));
    };

    const loginStudent = (name, classNameSlug) => {
        // Find class to validation
        const targetClass = classes.find(c => c.slug === classNameSlug);
        if (targetClass) {
            setCurrentUser({ name, role: 'student', classId: targetClass.id, className: targetClass.name });
            return true;
        }
        return false;
    };

    const logout = () => {
        setCurrentUser(null);
    };

    return (
        <AppContext.Provider value={{
            classes,
            games,
            currentUser,
            addClass,
            addGame,
            assignGameToClass,
            loginStudent,
            logout
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    return useContext(AppContext);
}
