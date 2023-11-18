if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb://CleberGrosskopf:Zelita0408@cluster0.t7lh1xr.mongodb.net/?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}