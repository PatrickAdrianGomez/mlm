var Consumer = require('../models/consumer.model');

exports.buscaConsumer = async(req, res, next) => {
    var regex = new RegExp(req.query.phone, "i");
    const docs = await Consumer.find({ phone: regex });
    res.status(200).json(docs);
}
