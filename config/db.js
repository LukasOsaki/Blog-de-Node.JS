if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://Lukas:32662371@blogapp-mbe0m.mongodb.net/test?retryWrites=true&w=majority/"}
}else {
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}