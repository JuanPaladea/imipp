import React from 'react';
import { helix } from 'ldrs'
helix.register()

const LoaderComponent = () => {
    return (
        <l-helix
        size="90"
        speed="2.5"
        color="black" 
        ></l-helix>
    )
};

export default LoaderComponent;
