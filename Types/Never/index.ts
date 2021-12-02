const generateError = (message: string, code: number): never => {
    throw { message, errorCode: code };
};  

generateError("An error occurred!", 500);

// we should use never type to describe a function that never returns anything , here when the function uses throw , everything stops , it cant not return anything