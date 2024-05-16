const express = require('express');
const cors = require('cors');
const app = express();

const multer = require('multer')
const FormData = require('form-data');
const {Readable} = require('stream');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const OpenAI =  require("openai");

require('dotenv').config();

const openai = new OpenAI({ apiKey: 'sk-proj-m1jylEjGDMeRPSfigtGHT3BlbkFJD1bmeUiRQBcT082c0zAK', dangerouslyAllowBrowser: true });
const speechFile = path.resolve("./audio.mp3");

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

const bufferToStream = (buffer) => {
    return  Readable.from(buffer);
}

app.get('/', (req, res) => {
    res.send('Welcome to the Speech-to-Text API!');
});

app.post('/api/transcribe', upload.single('file'), async (req, res) => {
    try {
      const  audioFile  = req.file;
      if (!audioFile) {
        console.log("audioFile null");
        return res.status(400).json({ error: 'No audio file provided' });
      }

      const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(`uploads/${audioFile.originalname}`),
        model: "whisper-1",
      });

      res.json({ transcription });
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error transcribing audio' });
    }
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});