 const logger= (req ,res,next)=>{
    console.log (`Requestmethod:${req.method}`);
    console.log (`RequestURL:${req.url}`);
    next();
 }
 module.exports = logger;
