const redis = require('redis');
const { EventEmitter } = require('events');


exports.subscribeUserInfo = async () => {
    let user_info = {} ;
    const subscriber = redis.createClient(); 

    subscriber.on("message", (channel, message) => {
        const user_info_event = new EventEmitter();
        // console.log("Received data :" + message);
        user_info = JSON.parse(message);
        console.log('user-info',user_info.user);
        user_info_event.emit("user", user_info );
        return user_info;       

    });

    subscriber.subscribe("user-info-received");

    
}


receiveUserInfo = async () => {
  

    
}

