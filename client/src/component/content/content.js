import React from 'react';
import "./content.css";

class Content extends React.Component {
    state = {}
    render() {
        return (

            <div className="container">
                <main className="content">
                    <section className="content__followers">
                        <div className="followers">
                            <div className="followers-bar facebook-bg"></div>
                            <div className="followers__header">
                                <i className="header-icon fab fa-facebook-square facebook-color"></i>
                                <p className="header-username">@PieroMerino3</p>
                            </div>
                            <div className="followers__main">
                                <strong className="main-quantity">1987</strong>
                                <span>FOLLOWERS</span>
                            </div>
                            <div className="followers__footer">
                                <i class="fas fa-caret-up"></i>
                                <p className="footer-count up">122 Today</p>

                            </div>
                        </div>

                        <div className="followers">
                            <div className="followers-bar twitter-bg"></div>
                            <div className="followers__header">
                                <i className="header-icon fab fa-twitter twitter-color"></i>
                                <p className="header-username">@PieroMerino3</p>
                            </div>
                            <div className="followers__main">
                                <strong className="main-quantity">1987</strong>
                                <p>FOLLOWERS</p>
                            </div>
                            <div className="followers__footer">

                                <i class="fas fa-caret-up"></i>
                                <p className="footer-count up">52 Today</p>
                            </div>
                        </div>

                        <div className="followers">
                            <div className="followers-bar instagram-bg"></div>
                            <div className="followers__header">
                                <i className="header-icon fab fa-instagram instagram-color"></i>
                                <p className="header-username">@PieroMerino3</p>
                            </div>
                            <div className="followers__main">
                                <strong className="main-quantity">1987</strong>
                                <p>FOLLOWERS</p>
                            </div>
                            <div className="followers__footer">
                                <i class="fas fa-caret-up"></i>
                                <p className="footer-count up">80 Today</p>
                            </div>
                        </div>

                        <div className="followers">
                            <div className="followers-bar youtube-bg"></div>
                            <div className="followers__header">
                                <i className="header-icon fab fa-youtube youtube-color"></i>
                                <p className="header-username">@PieroMerino3</p>
                            </div>
                            <div className="followers__main">
                                <strong className="main-quantity">1987</strong>
                                <p>FOLLOWERS</p>
                            </div>
                            <div className="followers__footer">
                                <i class="fas fa-caret-down"></i>
                                <p className="footer-count down">12 Today</p>
                            </div>
                        </div>
                    </section>

                    <section className="content__today">
                        <h2 className="today-title">Overview - Today</h2>

                        <div class="today-card">
                            <div className="card">
                                <span class="card-title">Page Views</span>
                                <i class="card-icon fab fa-facebook-square facebook-color"></i>
                            </div>

                            <div className="card">
                                <strong class="card-number">87</strong>
                                <div class="card-stats">
                                    <i class="fas fa-caret-down"></i>
                                    <span class="stats-count down">3%</span>
                                </div>
                            </div>

                        </div>

                        <div class="today-card">
                            <div className="card">
                                <span class="card-title">Likes</span>
                                <i class="card-icon fab fa-facebook-square facebook-color"></i>
                            </div>

                            <div className="card">
                                <strong class="card-number">87</strong>
                                <div class="card-stats">
                                    <i class="fas fa-caret-down"></i>
                                    <span class="stats-count down">3%</span>
                                </div>
                            </div>

                        </div>

                        <div class="today-card">
                            <div className="card">
                                <span class="card-title">Likes</span>
                                <i class="card-icon fab fa-instagram instagram-color"></i>
                            </div>

                            <div className="card">
                                <strong class="card-number">87</strong>
                                <div class="card-stats">
                                    <i class="fas fa-caret-down"></i>
                                    <span class="stats-count down">3%</span>
                                </div>
                            </div>

                        </div>

                        <div class="today-card">
                            <div className="card">
                                <span class="card-title">Profile Views</span>
                                <i class="card-icon fab fa-instagram instagram-color"></i>
                            </div>

                            <div className="card">
                                <strong class="card-number">87</strong>
                                <div class="card-stats">
                                    <i class="fas fa-caret-down"></i>
                                    <span class="stats-count down">3%</span>
                                </div>
                            </div>

                        </div>

                        <div class="today-card">
                            <div className="card">
                                <span class="card-title">Retweets</span>
                                <i class="card-icon fab fa-twitter twitter-color"></i>
                            </div>

                            <div className="card">
                                <strong class="card-number">87</strong>
                                <div class="card-stats">
                                    <i class="fas fa-caret-down"></i>
                                    <span class="stats-count down">3%</span>
                                </div>
                            </div>

                        </div>
                    
                        <div class="today-card">
                            <div className="card">
                                <span class="card-title">Likes</span>
                                <i class="card-icon fab fa-twitter twitter-color"></i>
                            </div>

                            <div className="card">
                                <strong class="card-number">87</strong>
                                <div class="card-stats">
                                    <i class="fas fa-caret-down"></i>
                                    <span class="stats-count down">3%</span>
                                </div>
                            </div>

                        </div>
                   
                        <div class="today-card">
                            <div className="card">
                                <span class="card-title">Likes</span>
                                <i class="card-icon fab fa-youtube youtube-color"></i>
                            </div>

                            <div className="card">
                                <strong class="card-number">87</strong>
                                <div class="card-stats">
                                    <i class="fas fa-caret-down"></i>
                                    <span class="stats-count down">3%</span>
                                </div>
                            </div>

                        </div>
                   
                        <div class="today-card">
                            <div className="card">
                                <span class="card-title">Total Views</span>
                                <i class="card-icon fab fa-youtube youtube-color"></i>
                            </div>

                            <div className="card">
                                <strong class="card-number">87</strong>
                                <div class="card-stats">
                                    <i class="fas fa-caret-down"></i>
                                    <span class="stats-count down">3%</span>
                                </div>
                            </div>

                        </div>
                   
                   </section>
                </main>
            </div>


        );
    }
}

export default Content;