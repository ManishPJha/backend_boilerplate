export class ErrorHandler extends Error {
    public readonly message!: string;
    public readonly statusCode!: number;

    /**
     * 
     * @param message Error Message
     * @param statusCode Error Response Code
     */
    constructor(message: string, statusCode: number){
        super(message);

        this.message = message;
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}