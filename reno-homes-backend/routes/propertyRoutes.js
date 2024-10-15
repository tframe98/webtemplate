import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Get all properties
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const property = await prisma.property.findUnique({
        where: { id: parseInt(id) },
      });
      if (property) {
        res.json(property);
      } else {
        res.status(404).json({ error: 'Property not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch property details' });
    }
  });

// Add a new property
router.post('/', async (req, res) => {
  const { address, city, price, bedrooms, bathrooms, description, imageUrl } = req.body;
  try {
    const newProperty = await prisma.property.create({
      data: { address, city, price, bedrooms, bathrooms, description, imageUrl },
    });
    res.json(newProperty);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create property' });
  }
});

export default router;
