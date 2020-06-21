const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const WeeklyObjectiveSchema=new Schema({
    description: String,
    checked: Boolean, 
    date: Date
});

const DailyTaskSchema=new Schema({
    day: String,
    description: String,
    date: String
});

const GoalSchema = new Schema({
    tier: String,
    description: String
});

const WeeklyObjective=mongoose.model('weeklyobjective', WeeklyObjectiveSchema);
const DailyTask=mongoose.model('dailytask', DailyTaskSchema);
const Goal=mongoose.model('goal', GoalSchema);

exports.WeeklyObjective=WeeklyObjective;
exports.DailyTask=DailyTask;
exports.Goal=Goal;