export const getnum = async (req, res) => {
    const a=Math.random()*10
    res.json({message:`lucky number is ${a} `});
};