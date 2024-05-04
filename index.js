const express =  require("express");
const bodyParser =  require("body-parser");
const ejs = require("ejs");
const http = require('https');
const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
//connecting webpages
app.get("/",function(req,res){
    res.render("home.ejs");
});
app.get("/home",function(req,res){
    res.render("home.ejs");
});
app.get("/analyse",function(req,res){
    res.render("analysis.ejs");
});
app.get("/pinescript.html",function(req,res){//not required
  res.sendFile(__dirname + "/views/pinescript.html");
});
app.get("/guide",function(req,res){//not required
    res.sendFile(__dirname + "/views/index.html");

});
app.get("/predict",function(req,res){//not required
  res.sendFile(__dirname + "/views/index1.html");

});
app.get("/overview.html",function(req,res){//not required
    res.sendFile(__dirname + "/views/overview.html");

});
app.get("/feedback",function(req,res){//not required
    res.render("feedback.ejs");
});

//Analysis part
app.get('/daily-data', (req, res) => {
    const apiKey = 'XWT4BU7NOC73D1HZ';
    const symbol = req.query.symbol || 'APPL';
  
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
  

    http.get(apiUrl, (apiRes) => {
      let data = '';
  

      apiRes.on('data', (chunk) => {
        data += chunk;
      });

      apiRes.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
  

          res.json(parsedData);
        } catch (error) {
          console.error('Error parsing data:', error);
          res.status(500).json({ error: 'Error parsing data' });
        }
      });
    }).on('error', (error) => {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    });
  });

  

app.listen(3000,function(){
    console.log("Server started");
})