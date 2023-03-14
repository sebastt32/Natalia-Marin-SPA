const validate = (req, res, next) => {
    const {name, email, phone} = req.body;
    if (!name) return res.status(400).json({ error: "Missing name"});
    if (!email) return res.status(400).json({error: "Missing email"});
    if (!phone) return res.status(400).josn({error: "Missing phone"});
    
    // if (!name || !email || !phone) 
    // res.status(400).json({error: "Missing data"});
    next();
};

module.exports = {validate};