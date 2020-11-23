const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

const app = express();
admin.initializeApp({

    credential: admin.credential.cert('./credential.json'),
    databaseURL: "https://social-dashboard-fb.firebaseio.com"
});

const database = admin.firestore();

app.get('/hello', (req, res) => {
    return res.status(200).json({ message: 'Hello World' })
})

app.post('/social', async (req, res)=>{
    try {
        await database.collection("users")
            .doc("/" + req.body.id + "/")
            .create(
                {
                    //* Facebook
                    fb_name: req.body.fb_name,
                    fb_followers: req.body.fb_followers,
                    fb_followers_count: req.body.fb_followers_count,
                    fb_page_views: req.body.fb_page_views,
                    fb_likes: req.body.fb_likes,
                    //* Twitter
                    tw_name: req.body.tw_name,
                    tw_followers: req.body.tw_followers,
                    tw_followers_count: req.body.tw_followers_count,
                    tw_retweets: req.body.tw_retweets,
                    tw_likes: req.body.tw_likes,
                    //* Instagram
                    in_name: req.body.in_name,
                    in_followers: req.body.in_followers,
                    in_followers_count: req.body.in_followers_count,
                    in_profile_views: req.body.in_profile_views,
                    in_likes: req.body.in_likes,
                    //* YouTube
                    yt_name: req.body.yt_name,
                    yt_followers: req.body.yt_followers,
                    yt_followers_count: req.body.yt_followers_count,
                    yt_total_views: req.body.yt_total_views,
                    yt_likes: req.body.yt_likes,
                } )
                return res.status(204).json();
    } catch (err) {
        console.log(error);
        return res.status(500).send(error)
    }
});

app.get('/social/:id', async (req, res)=>{
    try {
        const doc = database.collection('users').doc(req.params.id)
        const user = await doc.get()
        const data =  user.data()
        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).send(err)
    }
})

exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
