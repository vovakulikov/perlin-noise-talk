import React from 'react';
import PlainSlide from "../components/plain-slide";

export default function(props) {
    return (
        <PlainSlide {...props}>
            <video autoPlay={true} src="./images/perlin-noise-example.mov"></video>
        </PlainSlide>

    );
}
