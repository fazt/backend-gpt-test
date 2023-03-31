// app.js
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Configurar middlewares
app.use(express.json());

// Configurar rutas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

export default app 