const redis_publisher = require('../redis/publisher');

exports.getById = async id => {
    return await redis_publisher.publishUserRequestEvent(id);
   
}

