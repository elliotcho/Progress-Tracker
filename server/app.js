//require modules
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
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

app.use(bodyParser.json());
app.use(cors());

const {
    loadWeeklyObjectives,
    addWeeklyObjective,
    deleteWeeklyObjective,
    checkWeeklyObjective, 
    clearObjectives
}=require('./handlers/weekly');

const {
    loadDailyTask,
    addDailyTask,
    deleteDailyTask, 
    clearTasks
} =require('./handlers/daily');

const {
    loadGoal,
    addGoal,
    deleteGoal,
    clearGoals
} =require('./handlers/goals');

app.post('/loadobj', loadWeeklyObjectives);
app.post('/addobj', addWeeklyObjective);
app.post('/deleteobj', deleteWeeklyObjective);
app.post('/checkobj', checkWeeklyObjective);
app.post('/clearobjs', clearObjectives);

app.post('/loadtask', loadDailyTask);
app.post('/addtask', addDailyTask);
app.post('/deletetask', deleteDailyTask);
app.post('/cleartasks', clearTasks);

app.post('/loadgoal', loadGoal);
app.post('/addgoal', addGoal);
app.post('/deletegoal', deleteGoal);
app.post('/cleargoals', clearGoals);

app.listen(5000);