const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const WeeklyObjectiveSchema=new Schema({
    description: String,
    checked: Boolean
});

const DailyTaskSchema=new Schema({
    day: String,
    description: String
});

const WeeklyObjective=mongoose.model('weeklyobjective', WeeklyObjectiveSchema);
const DailyTask=mongoose.model('dailytask', DailyTaskSchema);

exports.WeeklyObjective=WeeklyObjective;
exports.DailyTask=DailyTask;