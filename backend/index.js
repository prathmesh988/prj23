const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') { 
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });
const JWTMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer JWT')) {
        next();
    } else {
        res.status(403).send({ error: 'JWT required' });
    }
};

const JWTAdminMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer JWTAdmin')) {
        next();
    } else {    
        res.status(403).send({ error: 'JWTAdmin required' });
    }
};

app.post('/login', (req, res) => {
    res.json({
        "access_token": "thejwt",
        "token_type": "bearer"
    });
});

app.post('/create_account', (req, res) => {
    res.json({ "success": true });
});

app.get('/get_current_price', JWTAdminMiddleware, (req, res) => {
    res.json({ "result": 200 });
});

app.post('/set_current_price', JWTAdminMiddleware, (req, res) => {
    res.json({ "result": true });
});

app.post('/give_credits', JWTAdminMiddleware, (req, res) => {
    res.json({ "result": true });
});

app.post('/order_labels', JWTMiddleware, (req, res) => {
    console.log(req.body)
    res.json({ "result": true });

    
});

app.post('/get_label_pdf', JWTMiddleware, (req, res) => {
    res.json({ "raw": "raw pdf content" });
});

app.get('/get_balance', JWTMiddleware, (req, res) => {
    res.json({ "result": 2600 });
});

app.get('/get_orders', JWTMiddleware, (req, res) => {
    res.json({
        "result": {
            "123234": [
                {
                    "type": "54c0b387-b5d5-42c4-a55c-9d71ea8c13c0",
                    "ToZip": "test",
                    "ToCity": "test",
                    "ToName": "test",
                    "Weight": "test",
                    "Widtht": "test",
                    "FromZip": "test",
                    "Heightt": "test",
                    "Lengtht": "test",
                    "Success": "False",
                    "ToPhone": "test",
                    "ToState": "test",
                    "FromCity": "test",
                    "FromName": "test",
                    "Provider": "",
                    "Saturday": false,
                    "ToStreet": "test",
                    "FromPhone": "test",
                    "FromState": "test",
                    "Signature": false,
                    "ToCompany": "test",
                    "ToCountry": "US",
                    "ToStreet2": "test",
                    "TrackLink": "",
                    "LabelID": "",
                    "FromStreet": "test",
                    "Reference1": "test",
                    "Reference2": "test",
                    "Description": "test",
                    "FromCompany": "test",
                    "FromCountry": "US",
                    "FromStreet2": "test"
                }
            ]
        }
    });
});

app.get('/get_order_by_batch', JWTMiddleware, (req, res) => {
    res.json({
        "result": {
            "123234": [
                {
                    "type": "54c0b387-b5d5-42c4-a55c-9d71ea8c13c0",
                    "ToZip": "test",
                    "ToCity": "test",
                    "ToName": "test",
                    "Weight": "test",
                    "Widtht": "test",
                    "FromZip": "test",
                    "Heightt": "test",
                    "Lengtht": "test",
                    "Success": "False",
                    "ToPhone": "test",
                    "ToState": "test",
                    "FromCity": "test",
                    "FromName": "test",
                    "Provider": "",
                    "Saturday": false,
                    "ToStreet": "test",
                    "FromPhone": "test",
                    "FromState": "test",
                    "Signature": false,
                    "ToCompany": "test",
                    "ToCountry": "US",
                    "ToStreet2": "test",
                    "TrackLink": "",
                    "LabelID": "",
                    "FromStreet": "test",
                    "Reference1": "test",
                    "Reference2": "test",
                    "Description": "test",
                    "FromCompany": "test",
                    "FromCountry": "US",
                    "FromStreet2": "test"
                }
            ]
        }
    });
});

app.get('/get_total_deposited', JWTMiddleware, (req, res) => {
    res.json({ "result": 100000 });
});

app.get('/get_plugs', JWTAdminMiddleware, (req, res) => {
    res.json({
        "result": {
            "plugs": ["Cheaplabels", "Shipd"]
        }
    });
});

app.post('/set_plug', JWTAdminMiddleware, (req, res) => {
    res.json({ "result": true });
});

app.get('/get_current_plug', JWTAdminMiddleware, (req, res) => {
    res.json({ "restult": "Cheaplabels" });
});

app.get('/get_all_sales_history', JWTAdminMiddleware, (req, res) => {
    res.json({ "result": { "1-21-23": 420 } });
});

app.post('/2fa_send', (req, res) => {
    res.json({ "success": true });
});

app.post('/2fa_confirm', (req, res) => {
    res.json({ "success": "usernewpassword" });
});

app.post('/create_buy_intent', (req, res) => {
    res.json({ "clientSecret": "clientsecret" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
