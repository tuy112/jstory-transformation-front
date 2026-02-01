import { useEffect, useRef, useState } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";
import "./musicBox.css";

function MusicBox() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.5;
        audio.play().catch(() => {
            setIsPlaying(false);
        });
    }, []);

    const toggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };
    
    return (
        <div className="music-box" onClick={toggleMusic}>
            <audio
                ref={audioRef}
                src="/music/tragic_village.mp3"
                loop
            />
            {isPlaying
                ? <FaMusic className="music-icon on" />
                : <FaVolumeMute className="music-icon off" />
            }
        </div>
    );
}

export default MusicBox;