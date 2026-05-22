const mongoose = require('mongoose');

const dotenv = require('dotenv');
const app  = require('./app');

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongDB Connected");

    app.listen(PORT, () => {
        console.log(`Server is online on port ${PORT}`);
    })
}).catch((err) => {
   console.log(err);
});