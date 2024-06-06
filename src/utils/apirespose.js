class apirespose {
    constructor(statusCode, message="success", data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.sucssess= statusCode < 400;
        // status code shoubl be lee than 400 in the web

    }
}