const redis = require('redis');


exports.subscribeUserInfo= async () => {
    const subscriber = redis.createClient();

    subscriber.on("message", (channel, message) => {
        console.log("Received data :" + message);
        const user_info = JSON.parse(message);
        console.log(user_info.user);
    })

    subscriber.subscribe("user-info-received");
}