import express from 'express';
import cors from 'cors';
import propertyRoutes from './routes/propertyRoutes.js';




const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/properties', propertyRoutes);

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Reno Homes API');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
