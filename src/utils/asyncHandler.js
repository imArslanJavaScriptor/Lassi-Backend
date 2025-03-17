// Wrapper Function with Promisses Method: 1
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }

}
export {asyncHandler}






// HigherOrderFunction Method: 2
// const asynHandler = (fn) => {}
// const asynHandler = (fn) => () => {}
// const asynHandler = (fn) => async () => {}

// This is nothing but just a wrapper function
// that we will be use in everywhere we need it.
// Wrapper Function with TryCatch()
// const asyncHandler = (func) => async (req, res, next) => {
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message: error.message
//         })
        
//     }
    
// }