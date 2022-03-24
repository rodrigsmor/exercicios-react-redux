import React from 'react';
import ReactDOM from 'react-dom';
import Family from './Family';
import Member from './Member';

ReactDOM.render(
    <div>
        <Family lastName={'Silva'}>
            <Member name={'Rodrigo '} />
        </Family>
    </div>,
    document.getElementById('app')
)