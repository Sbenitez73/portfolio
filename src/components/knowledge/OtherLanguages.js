import React, { useState } from 'react';

export const OtherLanguages = () => {

    const [visible, setVisibility] = useState(false);

    return (
        <>
            <div className="row row-bottom-padded-sm">
                <div className="row">
                    <h1 
                        className="to-animate mb-10 titles-sections" 
                        style={{ color: '#52d3aa', cursor: 'pointer' }} 
                        onClick={ () =>
                            setVisibility(!visible)}
                    >
                        Other Languages / Tools
                        <i 
                            style={{ marginLeft: '10px' }}
                            className={!visible ? 
                                "fas fa-chevron-up" : "fas fa-chevron-down" } 
                            onClick={ () =>
                            setVisibility(!visible)} 
                        >
                        </i> 
                    </h1>
                </div>
                {visible &&
                    <div className="animate__animated animate__fadeInDown">

                        <div className="fh5co-block animate__fadeInRight">
                            <div className="overlay-darker"></div>
                            <div className="overlay"></div>
                            <div className="fh5co-text">
                                <i className="fh5co-intro-icon devicon-html5-plain"></i>
                                <h2>HTML 5</h2>
                                <p>I have worked with this language for more than 4 years.</p>
                            </div>
                        </div>
                        <div className="fh5co-block animate__fadeInRight">
                            <div className="overlay-darker"></div>
                            <div className="overlay"></div>
                            <div className="fh5co-text">
                                <i className="fh5co-intro-icon devicon-css3-plain"></i>
                                <h2>CSS 3</h2>
                                <p>I have worked with CSS3 for more than 4 years, my knowledge in css is advanced.</p>
                            </div>
                        </div>
                        <div className="fh5co-block animate__fadeInRight">
                            <div className="overlay-darker"></div>
                            <div className="overlay"></div>
                            <div className="fh5co-text">
                                <i className="fh5co-intro-icon devicon-sass-original"></i>
                                <h2>SASS</h2>
                                <p>I have worked with SASS and SASS partials for a little over two years.</p>
                            </div>
                        </div>

                        <div className="fh5co-block animate__fadeInRight">
                            <div className="overlay-darker"></div>
                            <div className="overlay"></div>
                            <div className="fh5co-text">
                                <i className="fh5co-intro-icon devicon-linux-plain"></i>
                                <h2>Linux</h2>
                                <p>I have experience configuring linux servers. Based on CentOS, I can configure FTP, Samba, and SQL Data Bases.</p>
                            </div>
                        </div>
                        <div className="fh5co-block animate__fadeInRight">
                            <div className="overlay-darker"></div>
                            <div className="overlay"></div>
                            <div className="fh5co-text">
                                <i className="fh5co-intro-icon devicon-git-plain"></i>
                                <h2>Git</h2>
                                <p>I have integrated git in more than 7 projects, I have been using git for more than 3 years, in an advanced way.</p>
                            </div>
                        </div>
                        <div className="fh5co-block animate__fadeInRight">
                            <div className="overlay-darker"></div>
                            <div className="overlay"></div>
                            <div className="fh5co-text">
                                <i className="fh5co-intro-icon devicon-github-original"></i>
                                <h2>GitHub</h2>
                                <p>GitHub has been with me for more than three years, I know the flow of approval (reviewer), pull request, tasks, etc.</p>
                            </div>
                        </div>

                        <div className="fh5co-block animate__fadeInRight">
                            <div className="overlay-darker"></div>
                            <div className="overlay"></div>
                            <div className="fh5co-text">
                                <i className="fh5co-intro-icon devicon-npm-original-wordmark"></i>
                                <h2>npm</h2>
                                <p>React and angular use this package management system to build projects, implement libraries, etc. so I have experience using npm.</p>
                            </div>
                        </div>
                        <div className="fh5co-block animate__fadeInRight">
                            <div className="overlay-darker"></div>
                            <div className="overlay"></div>
                            <div className="fh5co-text">
                                <i className="fh5co-intro-icon devicon-redux-original"></i>
                                <h2>Redux</h2>
                                <p>I am currently learning to use redux, for the implementation in applications with react, I have implemented redux in just one project so my knowledge is basic.</p>
                            </div>
                        </div>
                        <div className="fh5co-block animate__fadeInRight">
                            <div className="overlay-darker"></div>
                            <div className="overlay"></div>
                            <div className="fh5co-text">
                                <i className="fh5co-intro-icon devicon-bash-plain"></i>
                                <h2>Bash</h2>
                                <p>My main programming system, and site layout is linux, so I have used bash for a long time, navigating into it and executing the vast majority of its commands.</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
