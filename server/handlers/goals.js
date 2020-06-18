const {Goal} = require('../dbschema');

const map={
    'TierS': 0, 
    'TierA': 1,
    'TierB': 2,
    'TierC': 3,
    'TierD': 4
}

exports.loadGoal=(req, res)=>{
    Goal.find({}).then(result =>{
        const goals=result.map(goal =>{
            const modified={...goal._doc};
            
            modified.idx=map[modified.tier];

            return modified;
        });

        res.json(goals);
    });
}

exports.addGoal=(req, res) =>{
    const newGoal=new Goal({
        tier: req.body.tier,
        description: req.body.description
    });

    newGoal.save().then(result =>{
        res.json({...result, idx: map[req.body.tier]});
    });
}

exports.deleteGoal = (req, res) =>{
    Goal.deleteOne({_id: req.body.id}).then(()=>{
        res.json('Success');
    });
};
