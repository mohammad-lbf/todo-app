import React from 'react';
import Plus from '../shared/Plus';
import Skills from './Skills';

const AboutDeveloper = () => {
    return (
        <div className="home rounded p-3">
            <div>
                <p className="lh-lg text-end text-center text-lg-end">
                : مشخصات طراح و توسعه دهنده پروژه
                <br />
                نام و نام خانوادگی : محمد لبافی
                <br />
                <br />
                </p>
               <Skills />
            </div>
            <Plus />
        </div>
    );
};

export default AboutDeveloper;