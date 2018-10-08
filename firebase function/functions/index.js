const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.sendNotification = functions.database.ref('/todos/{todoId}')
    .onCreate((snapshot, context) => {
        // Grab the current value of what was written to the Realtime Database.
        const todo = snapshot.val();
        const senderUid = snapshot.from;
        const receiverUid = snapshot.to;
        
        if (senderUid === receiverUid) {
            return
        }

        // The topic name can be optionally prefixed with "/topics/".
        var topic = 'main';

        // See documentation on defining a message payload.
        var message = {
            data: {
                todo: todo
            },
            topic: topic
        };

        // Send a message to devices subscribed to the provided topic.
        admin.messaging().send(message)
            .then((response) => {
                // Response is a message ID string.
                console.log('Successfully sent message:', response);
                return
            })
            .catch((error) => {
                console.log('Error sending message:', error);
            });
        
    });
