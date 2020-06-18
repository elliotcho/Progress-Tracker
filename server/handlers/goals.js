const {Goal} = require('../dbschema');

const map={
    'TierS': 0, 
    'TierA': 1,
    'TierB': 2,
    'TierC': 3,
    'TierD': 4
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

