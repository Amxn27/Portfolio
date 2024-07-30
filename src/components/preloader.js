import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { gsap } from "gsap";
import './preloader.scss';

const loadingGif = 'https://user-images.githubusercontent.com/69011963/137184767-79a13ec7-1bb3-4341-a6da-3a149c9c159a.gif';

function LinearProgressWithLabel(props) {
    const el = React.useRef();
    const tl = React.useRef();
    const q = gsap.utils.selector(el);

    React.useEffect(() => {
        tl.current = gsap.timeline()
            .to(q(".square"), {
                opacity: .7
            })
            .to(q(".square"), {
                duration: 1.5,
                ease: "powerInOut",
                opacity: 1,
                repeat: -1,
                yoyo: true
            });
    }, []);

    return (
        <div className="loader">
            <LinearProgress variant="determinate" {...props} />
            <div className="progress">
                <Typography variant="body2" color="">{`${Math.round(props.value)}%`}</Typography>
            </div>
        </div>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
    const [progress, setProgress] = React.useState(10);
    const textRef = React.useRef();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 500);
        return () => {
            clearInterval(timer);
        };
    }, []);

    React.useEffect(() => {
        gsap.fromTo(textRef.current, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1.5, repeat: -1, yoyo: true }
        );
    }, []);

    return (
        <Box>
            <style jsx>{`
                .anime {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    height: 100vh;
                }

                .load {
                    position: relative;
                    text-align: center;
                }

                .loading-image {
                    width: 50%; /* Adjusted size for the image */
                    height: auto;
                    margin-bottom: 20px; /* Space between the image and the text */
                }

                .debugging-text {
                    color: green;
                    font-size: 36px; /* Increased size */
                    font-weight: bold; /* Bold text */
                    margin-top: 20px;
                }

                .loader {
                    margin-top: 20px;
                    width: 90%;
                }

                .progress {
                    margin-top: 10px;
                }

                @media (max-width: 600px) {
                    .loader {
                        width: 100%;
                    }

                    .debugging-text {
                        font-size: 28px; /* Adjusted size for smaller screens */
                    }

                    .loading-image {
                        width: 70%; /* Adjusted size for smaller screens */
                    }
                }
            `}</style>
            <div className="anime">
                <div className="load">
                    <img src={loadingGif} alt="Loading" className="loading-image" />
                    <div ref={textRef} className="debugging-text">debugging</div>
                    <LinearProgressWithLabel value={progress} />
                </div>
            </div>
        </Box>
    );
}
