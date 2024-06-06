
// this the method of the async handler without try catch with primise
const asyncHandler=(requestHandler) =>{
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => {next(err)}) 
    }
}


export default {asyncHandler}



//this is the process of the async handler with try catch 
//passing the function inside the function 
// const asyncHandler = (fn) => async(req, res, next) => {

//     try{
//         await fn(req, res, next);
//     }
//     catch(err){
//         res.status(err.status || 500).json({
//             success: false,
//             message: err.message})
//         console.log(err);
//         next(err);
//     }
// }
