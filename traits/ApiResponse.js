const responseNotFound = (res) => {
    return res.status(404).json({
         success: false,
         message: 'Not Found'
     })
 }
 
 const responseSuccess = (res, result, message) => {
     return  res.status(200).json({
         success: true,
         message: message,
         data: result
     })
 }
 
 const responseFailValidate = (res, message) => {
    return res.status(400).json({
        success:false,
        message:message
    })
 }
 const responseAuthSuccess = (res, token, message, user) => {
    return res.status(200).json({
        success : true,
        token: token,
        message: message,
        user: user
    })
 }
 module.exports = {
     responseNotFound,
    responseSuccess
 };
 