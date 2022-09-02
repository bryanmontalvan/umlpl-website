import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';


const ProgressBar = ({ file, title, setFile }) => {
    const { url, progress } = useStorage(file, title);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <div className="progress-bar" style={{ width: progress + '%', height: '5px', backgroundColor: 'red', marginTop: '20px' }}>
            progress
        </div>
    )
}

export default ProgressBar;
