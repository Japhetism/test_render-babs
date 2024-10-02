import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Pause, Play } from "../../../../public/assets/icons";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#383737",
  progressColor: "#B7B7B7",
  // cursorColor: "#A1C6EA",
  barWidth: 2,
  barRadius: 2,
  responsive: true,
  height: 40,
  normalize: true,
  partialRender: true,
});

const WaveSurfer = () => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);

  const url = "/music/baby.mp3";

  useEffect(() => {
    create();

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = async () => {
    const WaveSurfer = (await import("wavesurfer.js")).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
    }
  };

  return (
    <div className="waveChatReciver">
      <div className="flex items-center gap-2">
        {/* button */}
        <div>
          <button
            onClick={handlePlayPause}
            className="h-[50px] w-[50px] bg-white rounded-full flex items-center justify-center"
          >
            {!playing ? <Pause /> : <Play />}
          </button>
        </div>
        <div className="flex-grow">
          {/* This is the boy here ===> */}
          <div id="waveform" ref={waveformRef} />
        </div>
      </div>
    </div>
  );
};

export default WaveSurfer;
