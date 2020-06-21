const {DailyTask}=require('../dbschema');

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

exports.clearTasks = (req ,res) =>{
    DailyTask.deleteMany({}).then(()=>{
        res.json({msg: 'Success'});
    });
}