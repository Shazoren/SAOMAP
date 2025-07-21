import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const wps = await prisma.waypoint.findMany()
    return res.status(200).json(wps)
  }
  res.setHeader('Allow', 'GET')
  res.status(405).end('Method Not Allowed')
}
