const {WeeklyObjective} = require('../dbschema');

exports.loadWeeklyObjectives = (req , res) =>{
    WeeklyObjective.find({}).then(result =>{
        res.json(result);
    });
}

exports.addWeeklyObjective= (req, res) =>{
    const newObjective=new WeeklyObjective({
        description: req.body.description
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