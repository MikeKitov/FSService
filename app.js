const express = require("express");

const getJsonResponse = require("./models/fs");
 
const app = express();
app.get("/", function(request, response){
     
    response.send("<h1>Главная страница</h1>");
});
app.get("/about", function(request, response){
     
    response.send("<h1>О сайте</h1>");
});
app.get("/contact", function(request, response){
     
    response.send("<h1>Контакты</h1>");
});

app.get("/api/getPathInfo", async function(request, response){
    const path = request.query.path;

    try {
		let res = await getJsonResponse(path);
        response.json(res);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal Server Error" });
    }
});
app.listen(3000);
//curl
//routs -g