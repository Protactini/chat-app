import React from "react";

import "font-awesome/css/font-awesome.min.css";

import "./Dictaphone.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const Dictaphone = ({ setMessage }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   return null;
  // }

  const stoplinss = function () {
    SpeechRecognition.stopListening();
    setMessage(transcript);
  };

  return (
    <div>
      {/* // <form className="VOICEform"> */}
      {/* <input
        className="Voiceinput"
        type="text"
        placeholder="Type a message..."
        value={transcript}
      /> */}

      <button className="startVoice" onClick={SpeechRecognition.startListening}>
        <div>
          <i className="fas fa-microphone" aria-hidden="true" />
          &nbsp; Start
        </div>
      </button>

      <button className="stopVoice" onClick={stoplinss}>
        <div>
          <i className="fas fa-microphone-slash" />
          &nbsp; Stop
        </div>
      </button>

      <button className="resetVoice" onClick={resetTranscript}>
        <div>
          <i className="fas fa-trash-restore-alt" />
          &nbsp; Reset
        </div>
      </button>
      <p>{transcript}</p>
      {/* </form> */}
    </div>
  );
};
