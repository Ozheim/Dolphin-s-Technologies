import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Accès refusé. Aucun token fourni.' });
    }

    try {
        const extractedToken = token.split(' ')[1];
        const decoded = jwt.verify(extractedToken, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token invalide.' });
    }
};

export const adminAuth = (req, res, next) => {
    auth(req, res, () => {
        if (req.user.role !== 'admin') {
            console.log('Accès refusé : utilisateur non admin.');
            return res.status(403).json({ message: 'Accès refusé. Vous devez être un admin pour accéder à cette ressource.' });
        }
        next();
    });
};

export const headhunterAuth = (req, res, next) => {
    auth(req, res, () => {
        if (req.user.role !== 'headhunter') {
            console.log('Accès refusé : utilisateur non headhunter.');
            return res.status(403).json({ message: 'Accès refusé. Seuls les headhunters peuvent accéder à cette ressource.' });
        }
        next();
    });
};
