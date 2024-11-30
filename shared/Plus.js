import React from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
// import '../styles/Plus.css'
const Plus = () => {
    return (
        <Link href="/addwork">
         <div className="plus-btn">
            <i className="bi bi-plus-lg"></i>
        </div>
        </Link>
    );
};

export default Plus;