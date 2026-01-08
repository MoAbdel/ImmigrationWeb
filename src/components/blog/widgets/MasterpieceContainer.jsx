import React from 'react';

const MasterpieceContainer = ({ children, title, subtitle }) => {
    return (
        <div className="my-8 rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white">
            {(title || subtitle) && (
                <div className="bg-slate-900 px-6 py-4 text-white">
                    {title && <h3 className="text-xl font-bold font-serif">{title}</h3>}
                    {subtitle && <p className="text-slate-300 text-sm mt-1">{subtitle}</p>}
                </div>
            )}
            <div className="p-6">
                {children}
            </div>
        </div>
    );
};

export default MasterpieceContainer;
