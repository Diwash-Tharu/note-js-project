class errors extends Error {
    constructor(message="somting went wrong",
     statusCode,
     errors=[],
     stack=""
    ){
        // this is overwise the error message in the  error class
            super(message);
            this.statusCode=statusCode;
            this.data= null;
            this.error=errors;
            this.succes=false;
            if(stack){
                // this is used to fine the actual error in the file in the stack of the code
                this.stack=stack;
            }
            else
            {
                Error.captureStackTrace(this, this.constructor);
            }
     }
}


export {errors}