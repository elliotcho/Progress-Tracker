const {WeeklyObjective} = require('../dbschema');

exports.loadWeeklyObjectives = (req , res) =>{
    WeeklyObjective.find({}).then(result =>{
        res.json(result);
    });
}

exports.addWeeklyObjective= (req, res) =>{
    const newObjective=new WeeklyObjective({
        description: req.body.description,
        checked: false, 
        date: new Date().toLocaleString()
    });

    newObjective.save().then(()=>{
        res.json({...newObjective});
    });
}

exports.deleteWeeklyObjective = (req, res) => {
    WeeklyObjective.deleteOne({_id: req.body.id}).then(()=>{
        res.json({msg: 'Success'});
    });
}

exports.checkWeeklyObjective = (req, res) =>{
    WeeklyObjective.updateOne({_id: req.body.id}, {checked: req.body.checked}).then(()=>{
        res.json({msg: 'Success'});
    });
}

exports.clearObjectives = (req, res) =>{
    WeeklyObjective.deleteMany({}).then(()=>{
        res.json({msg: 'Success'});
    });
}