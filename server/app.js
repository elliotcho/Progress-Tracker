//require modules
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const express=require('express');
const app=express();

//connect to database
mongoose.connect('mongodb://localhost:27017/ProgressTracker', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.once('open', ()=>{ 
    console.log('Connected to database');
}).on('error', err => {console.log(err);});

//set up body-parser and static files
app.use(bodyParser.json());
app.use(express.static('../client/build'));

app.get('/', (req, res) => {
    res.sendFile('../client/build/index.html');
});

const {
    loadWeeklyObjectives,
    addWeeklyObjective,
    deleteWeeklyObjective
}=require('./handlers/weekly');

app.post('/loadobj', loadWeeklyObjectives);
app.post('/addobj', addWeeklyObjective);
app.post('/deleteobj', deleteWeeklyObjective);

app.listen(3000);