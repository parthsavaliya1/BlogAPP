
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ crumbs }) => {
    return (
        <div className="breadcrumbs">
            {crumbs.map((crumb, index) => (
                <span key={index}>
                    {index !== 0 && <span className='bredcumb-label'> &gt; </span>}
                    {crumb.path ? (
                        <Link className='bredcumb-label' to={crumb.path}>{crumb.label}</Link>
                    ) : (
                        <span className='bredcumb-label'>{crumb.label}</span>
                    )}
                </span>
            ))}
        </div>
    );
};

export default Breadcrumbs;
