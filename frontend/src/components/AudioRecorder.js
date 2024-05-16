import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import OpenAI from "openai";

const mimeType = "audio/webm";

const openai = new OpenAI({ apiKey: 'sk-proj-m1jylEjGDMeRPSfigtGHT3BlbkFJD1bmeUiRQBcT082c0zAK', dangerouslyAllowBrowser: true });

const AudioRecorder = () => {
	const [permission, setPermission] = useState(false);

	const mediaRecorder = useRef(null);

	const [recordingStatus, setRecordingStatus] = useState("inactive");

	const [stream, setStream] = useState(null);

	const [audio, setAudio] = useState(null);

	const [audioChunks, setAudioChunks] = useState([]);

	const [uploading, setUploading] = useState(false);
  	
	const [transcription, setTranscription] = useState('');

	useEffect(() => {
        getMicrophonePermission();
    });

	const getMicrophonePermission = async () => {
		if ("MediaRecorder" in window) {
			try {
				const mediaStream = await navigator.mediaDevices.getUserMedia({
					audio: true,
					video: false,
				});
				setPermission(true);
				setStream(mediaStream);
			} catch (err) {
				alert(err.message);
			}
		} else {
			alert("The MediaRecorder API is not supported in your browser.");
		}
	};

	const startRecording = async () => {
		setRecordingStatus("recording");
		const media = new MediaRecorder(stream, { type: mimeType });

		mediaRecorder.current = media;

		mediaRecorder.current.start();

		let localAudioChunks = [];

		mediaRecorder.current.ondataavailable = (event) => {
			if (typeof event.data === "undefined") return;
			if (event.data.size === 0) return;
			localAudioChunks.push(event.data);
		};

		setAudioChunks(localAudioChunks);
	};

	const stopRecording = () => {
		setRecordingStatus("inactive");
		mediaRecorder.current.stop();

		mediaRecorder.current.onstop = () => {
			const audioBlob = new Blob(audioChunks, { type: mimeType });
			const audioUrl = URL.createObjectURL(audioBlob);

			setAudio(audioUrl);

			transcribeAudio(audioBlob);

			setAudioChunks([]);
		};
	};

	const texttospeech = async (text) => {
		try {
			const response = await openai.audio.speech.create({
				model: "tts-1",
				voice: "nova",
				input: `${text}`,
			});

			const audioBlob = await response.blob();
			const audioUrl = URL.createObjectURL(audioBlob);

			setAudio(audioUrl);
		} catch (error) {
			console.log(error);
		}
	  }

	const transcribeAudio = async (audioBlob) => {	
		setUploading(true);
		try {
			const formData = new FormData();
			audioBlob && formData.append('file', audioBlob, 'audio.webm');

			console.log(audioBlob);

			const response = await axios.post(`http://localhost:3001/api/transcribe`, formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			});

			setTranscription(response.data.transcription);
			console.log("Transcription successful.");
			texttospeech(response.data.transcription.text);
		} catch (error) {
			console.log("An error occurred during transcription.");
			texttospeech("An error occurred during transcription.");
		} finally {
			setUploading(false);
		}
	};

	return (
		<div>
			{getMicrophonePermission}
			<h2>Audio Recorder</h2>
			<main>
				<div className="audio-controls">
					{permission && recordingStatus === "inactive" ? (
						<button onClick={startRecording} type="button">
							Start Recording
						</button>
					) : null}
					{recordingStatus === "recording" ? (
						<button onClick={stopRecording} type="button">
							Stop Recording
						</button>
					) : null}
				</div>
				{audio ? (
					<div className="audio-player">
						<audio src={audio} controls></audio>
						{/* <ReactPlayer url={audio} controls /> */}
						<a download href={audio}>
							Download Recording
						</a>
					</div>
				) : null}
			</main>
		</div>
	);
};

export default AudioRecorder;
