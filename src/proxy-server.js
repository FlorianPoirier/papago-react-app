import express, { json } from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

const tokenClientID = "YOUR_TOKEN_CLIENT_ID"
const tokenClientSecret = "YOUR_TOKEN_CLIENT_SECRET";

const headers = {
    'Access-Control-Allow-Origin': "*",
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Naver-Client-Id': tokenClientID,
    'X-Naver-Client-Secret': tokenClientSecret,
};


app.use(json());

app.post('/api/translate', async (req, res) => {
    const { source, target, text } = req.body;
    let api_url = `https://openapi.naver.com/v1/papago/n2mt?source=${source}&target=${target}&text=${text}`;

    try {
        const response = await axios.post(api_url, {}, { headers });
        res.json(response.data);
    } catch (error) {
        console.error('Query error: ', error);
        res.status(500).json({ error: 'Remote server request error' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});



