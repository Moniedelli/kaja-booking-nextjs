// pages/api/middleware/isAdmin.js
import { getSession } from 'next-auth/react';

const isAdmin = async (req, res, next) => {
  try {
    const session = await getSession({ req });

    // Check if the user is authenticated and has the 'ADMIN' role
    if (!session || session.user.role !== 'ADMIN') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    // If the user is authenticated and has the 'ADMIN' role, proceed to the next middleware
    return next();
  } catch (error) {
    console.error('Error in isAdmin middleware:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default isAdmin;
