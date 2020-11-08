const redis = require('redis');


exports.publishUserRequestEvent = async (id) => {
    const publisher = redis.createClient();
    const user = {
        id: id
    }

    publisher.publish("user-notify", JSON.stringify(user))
    return;
}