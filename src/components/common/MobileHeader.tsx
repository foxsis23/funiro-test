import React from 'react';

const MobileHeader = (props) => {
    return(
        <div className="md:hidden fixed top-0 z-10 flex flex-row gap-4 p-3">
            <p className="text-xl font-bold">Funiro</p>
        </div>
    )
};

export default MobileHeader;