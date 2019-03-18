import React from 'react';

const Who = props => {
    return (
        <div className="About-section Who">
            <div className="About-section-header">WHO?</div>
            <div className="About-section-info">
                <div className="About-section-description">
                    <span>Hey, what&apos;s up? My full name is </span>
                    <span className="About-section-highlight">Zachary </span>
                    <span>but you can call me </span>
                    <span className="About-section-highlight">Zach</span>
                    <span>. I am a </span>
                    <span className="About-section-highlight">Software Engineer </span>
                    <span>with </span>
                    <span className="About-section-highlight">full-stack experience</span>
                    <span>, but a passion for working in the </span>
                    <span className="About-section-highlight">front-end</span>
                    <span>. For example, I made this page so I could play around with </span>
                    <span className="About-section-highlight">React</span>!
                </div>
            </div>
            <div className="About-section-info">
                <div className="About-section-description">
                    I also made versions of this page using Vue and ReasonML!  You can get to those using the menu.  They really aren&apos;t any different.  I just wanted to be able to compare the frameworks firsthand.
                </div>
            </div>
        </div>
    );
};

export default Who;
