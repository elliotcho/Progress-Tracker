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
        const tasks=result.map(task => { 
            const modified = {...task._doc};
            
            modified.idx=map[modified.day];
            
            return modified;
        });

        res.json(tasks);
    });
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
