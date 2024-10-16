import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.header('Authorization');
    const huntertoken = req.header('Authorization');

    if (!token || !huntertoken) {
        return res.status(401).json({ message: 'Accès refusé. Aucun token fourni.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        req.hunter = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token invalide.' });
    }
    
};

export default auth;
