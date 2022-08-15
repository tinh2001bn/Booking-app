
const userRoutes = require('./user');
const hotelRoutes =require('./hotel')
function route(app){
    app.use('/api/auth', userRoutes);
    app.use('/api/hotels',hotelRoutes)
}        
 module.exports =route;