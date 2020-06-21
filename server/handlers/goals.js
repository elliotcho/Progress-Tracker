const {Goal} = require('../dbschema');

exports.loadGoal=(req, res)=>{
    Goal.find({}).then(result =>{
        res.json(result);
    });
}

exports.addGoal=(req, res) =>{
    const newGoal=new Goal({
        tier: req.body.tier,
        description: req.body.description
    });

    newGoal.save().then(result =>{
        res.json(result);
    });
}

exports.deleteGoal = (req, res) =>{
    Goal.deleteOne({_id: req.body.id}).then(()=>{
        res.json('Success');
    });
};

exports.clearGoals = (req, res) =>{
    Goal.deleteMany({}).then(()=>{
        res.json(({msg: 'Success'}));
    });
}
