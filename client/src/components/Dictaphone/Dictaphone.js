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

  const resetandstart = function () {
    resetTranscript();
    SpeechRecognition.startListening();
  };

  const stoplinss = function () {
    SpeechRecognition.stopListening();
    setMessage(transcript);
  };

  return (
    <div className="VOICEform">
      {/* <form className="VOICEform"> */}
      <input
        className="Voiceinput"
        type="text"
        placeholder="Say something ..."
        value={transcript}
      />

      {/* <textarea className="Voiceinput" value={transcript} /> */}

      <button className="startVoice" onClick={resetandstart}>
        <div>
          <i className="fa fa-microphone" aria-hidden="true" />
          &nbsp; Start
        </div>
      </button>

      <button className="stopVoice" onClick={stoplinss}>
        <div>
          <i className="fa fa-arrow-up" />
          &nbsp; Get
        </div>
      </button>

      {/* <button className="resetVoice" onClick={resetTranscript}>
        <div>
          <i className="fas fa-trash-restore-alt" />
          &nbsp; Reset
        </div>
      </button> */}
      {/* <p>{transcript}</p> */}
      {/* </form> */}
    </div>
  );
};
