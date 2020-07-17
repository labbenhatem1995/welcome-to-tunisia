import React from 'react';

export default function Background({children,image,clName}) {
    return (
        <header className={clName} style={{background: `url(${image}) center/cover no-repeat`}}>
        {children}
        </header>
    )
}
