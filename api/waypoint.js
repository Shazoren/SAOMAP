const { PrismaClient } = require('@prisma/client');

// On réutilise la même instance entre les invocations pour éviter
// de trop ouvrir de connexions dans Vercel Serverless.
let prisma;
if (!global._prisma) {
  global._prisma = new PrismaClient();
}
prisma = global._prisma;

module.exports = async (req, res) => {
  // On ne gère que GET
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const waypoints = await prisma.waypoint.findMany();
    return res.status(200).json(waypoints);
  } catch (err) {
    console.error('Erreur /api/waypoints :', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};