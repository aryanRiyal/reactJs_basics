import React, { useState, createRef } from 'react';
import { Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { exportComponentAsJPEG } from 'react-component-export-image';
import Text from '../components/Text';

const EditPage = function () {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef = createRef();
    const addText = function () {
        setCount(count + 1);
    };
    return (
        <div>
            <div
                style={{ width: '500px', border: '1px solid' }}
                ref={memeRef}
                className='meme mt-5 mb-5'
            >
                <img src={params.get('url')} alt='Meme' width='300px' />
                {Array(count)
                    .fill(0)
                    .map((e) => (
                        <Text />
                    ))}
            </div>
            <Button onClick={addText}>Add Text</Button>
            <Button variant='success' onClick={(e) => exportComponentAsJPEG(memeRef)}>
                Save
            </Button>
        </div>
    );
};

export default EditPage;
