
function handlePOST(req, res) {
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).send({
        data: {
            code: 200,
            message: "Mail sent"
        }
    });
}
function handleOPTIONS(req, res) {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).end();
}

exports.signUp = (req, res) => {
    res.status(200).send({
        data: {
            code: 200,
            message: "Mail sent"
        }
    });
};
