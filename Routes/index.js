
const userRoutes = require('./user');
const hotelRoutes =require('./hotel')
const roomRoutes = require('./room')
function route(app){
    app.use('/api/auth', userRoutes);
    app.use('/api/hotels',hotelRoutes)
    app.use('/api/rooms',roomRoutes)
}        
 module.exports =route;