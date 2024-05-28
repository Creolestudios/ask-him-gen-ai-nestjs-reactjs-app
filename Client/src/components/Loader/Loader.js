import React from 'react';
import { LoaderWrapper } from './Loader.styles';

const Loader = () => {
    return (
        <LoaderWrapper>
            <div className='flexbox'>
              <div>
                <div className='dot-loader'></div>
                <div className='dot-loader dot-loader--2'></div>
                <div className='dot-loader dot-loader--3'></div>
              </div>
            </div>
        </LoaderWrapper>
    );
};

export default Loader;