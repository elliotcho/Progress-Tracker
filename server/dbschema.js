const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const WeeklyObjectiveSchema=new Schema({
    description: String,
    checked: Boolean
});

const WeeklyObjective=mongoose.model('weeklyobjective', WeeklyObjectiveSchema);

exports.WeeklyObjective=WeeklyObjective;