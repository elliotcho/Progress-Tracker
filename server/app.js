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
    deleteWeeklyObjective,
    checkWeeklyObjective
}=require('./handlers/weekly');

const {
    loadDailyTask,
    addDailyTask,
    deleteDailyTask
} =require('./handlers/daily');

const {
    loadGoal,
    addGoal,
    deleteGoal
} =require('./handlers/goals');

app.post('/loadobj', loadWeeklyObjectives);
app.post('/addobj', addWeeklyObjective);
app.post('/deleteobj', deleteWeeklyObjective);
app.post('/checkobj', checkWeeklyObjective);

app.post('/loadtask', loadDailyTask);
app.post('/addtask', addDailyTask);
app.post('/deletetask', deleteDailyTask);

app.post('/loadgoal', loadGoal);
app.post('/addgoal', addGoal);
app.post('/deletegoal', deleteGoal);

app.listen(3000);