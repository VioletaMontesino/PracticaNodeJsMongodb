import userRoutes from './routes/user.routes.js'

export default (app) => {

  app.use('/api', userRoutes);

  
}