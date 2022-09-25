import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { determineColorsTheme } from './services/colorsService';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/api/v1/colors', (req, res) => {
    let shadesColorList = determineColorsTheme(req.body)
    return res.status(201).json({ shadesColorList });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000...');
})


