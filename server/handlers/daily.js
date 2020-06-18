const {DailyTask}=require('../dbschema');

const map ={
    'Monday': 0,
    'Tuesday': 1,
    'Wednesday': 2,
    'Thursday': 3,
    'Friday': 4,
    'Saturday': 5,
    'Sunday': 6
}

exports.addDailyTask=(req, res) =>{
    const newDailyTask = new DailyTask({
        day: req.body.day,
        description: req.body.description
    });

    newDailyTask.save().then(()=>{
        res.json({...newDailyTask, idx: map[req.body.day]});
    });
}
