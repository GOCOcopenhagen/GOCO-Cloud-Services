
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
    switch (req.method) {
        case "OPTIONS":
            handleOPTIONS(req, res);
            break;
        case "POST":
            handlePOST(req, res);
            break;
        default:
            res.status(405).send({
                error: {
                    code: 405,
                    message: "Wrong HTTP method"
                }
            });
            break;
    }
};
