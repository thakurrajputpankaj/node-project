const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database');
const mongo = require('./util/mongoDatabase')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//const adminRoutes = require('./routes/admin');
//const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/admin', adminRoutes);
//app.use(shopRoutes);

app.use(errorController.get404);

mongo.mongoConnect(() => {
    const _db = mongo.getDB();

    _db.collection('products').insertOne({ name: 'A book', price: 100 }, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Product inserted successfully.');
        }
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});