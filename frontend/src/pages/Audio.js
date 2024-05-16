import React, { useState } from "react";
import "../App.css";
import AudioRecorder from "../components/AudioRecorder";

function Audio() {
  return (
    <>
        <h2>Voice Commander</h2>
        <AudioRecorder />
    </>
  )
}

export default Audio;
