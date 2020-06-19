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

exports.loadDailyTask=(req, res) =>{
    DailyTask.find({}).then(result =>{
        res.json(result);
    });
}

exports.addDailyTask=(req, res) =>{
    const newDailyTask = new DailyTask({
        day: req.body.day,
        description: req.body.description,
    });

    newDailyTask.save().then(result =>{
        res.json(result);
    });
}

exports.deleteDailyTask = (req, res) =>{
    DailyTask.deleteOne({_id: req.body.id}).then(()=>{
        res.json({msg: 'Success'});
    });
}