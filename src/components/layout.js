import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import Profile from "./profile.js"
import Nav from "./nav.js"
import $ from 'jquery'
import {
  container,
  navContainer,
  mainContainer,
  mainProfile,
  contentContainer,
  contentContainerSub,
} from "./layout.module.css";

function Layout({ pageTitle, children }) {

  
            $(document).ready(function ($) {
                "use strict";

                if ($('.pageloader').length) {

                    $('.pageloader').toggleClass('is-active');

                    $(window).on('load', function () {
                        var pageloaderTimeout = setTimeout(function () {
                            $('.pageloader').toggleClass('is-active');
                            $('.infraloader').toggleClass('is-active')
                            clearTimeout(pageloaderTimeout);
                        }, 700);
                    })
                }
                //Index hero animated header
                if ($('#large-header').length) {
                    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
                    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
                    // requestAnimationFrame polyfill by Erik MÃ¶ller. fixes from Paul Irish and Tino Zijdel
                    // MIT license
                    (function () {
                        var lastTime = 0;
                        var vendors = ['ms', 'moz', 'webkit', 'o'];
                        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                            || window[vendors[x] + 'CancelRequestAnimationFrame'];
                        }

                        if (!window.requestAnimationFrame)
                            window.requestAnimationFrame = function (callback, element) {
                                var currTime = new Date().getTime();
                                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                                var id = window.setTimeout(function () { callback(currTime + timeToCall); },
                                                           timeToCall);
                                lastTime = currTime + timeToCall;
                                return id;
                            };

                        if (!window.cancelAnimationFrame)
                            window.cancelAnimationFrame = function (id) {
                                clearTimeout(id);
                            };
                    }());

                    (function () {

                        var width, height, largeHeader, canvas, ctx, circles, animateHeader = true;

                        // Main
                        initHeader();

                        function initHeader() {
                            width = window.innerWidth;
                            height = window.innerHeight;

                            largeHeader = document.getElementById('large-header');
                            largeHeader.style.height = height + 'px';

                            canvas = document.getElementById('demo-canvas');
                            canvas.width = width;
                            canvas.height = height;
                            ctx = canvas.getContext('2d');

                            // create particles
                            circles = [];
                            for (var x = 0; x < width * 0.5; x++) {
                                var c = new Circle();
                                circles.push(c);
                            }
                            animate();
                        }

                        function animate() {
                            if (animateHeader) {
                                ctx.clearRect(0, 0, width, height);
                                for (var i in circles) {
                                    circles[i].draw();
                                }
                            }
                            requestAnimationFrame(animate);
                        }

                        // Canvas manipulation
                        function Circle() {
                            var _this = this;

                            // constructor
                            (function () {
                                _this.pos = {};
                                init();
                            })();

                            function init() {
                                _this.pos.x = Math.random() * width;
                                _this.pos.y = height + Math.random() * 100;
                                _this.alpha = 0.1 + Math.random() * 0.3;
                                _this.scale = 0.3 + Math.random() * 0.3;
                                _this.velocity = Math.random();
                            }

                            this.draw = function () {
                                if (_this.alpha <= 0) {
                                    init();
                                }
                                _this.pos.y -= _this.velocity;
                                _this.alpha -= 0.0005;
                                ctx.beginPath();
                                ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
                                ctx.fillStyle = 'rgba(54,209,220,' + _this.alpha + ')';
                                ctx.fill();
                            };
                        }

                    })();
                }

            })

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className={container}>
{/* 배경 buble관련 */}
  <div class="pageloader"></div>
        <div class="infraloader is-active"></div>
        <div id="large-header" className="hero is-slanted is-relative is-gradient is-fullheight is-halfed-mobile">
          <div id="main-hero" className="hero-body">
                <div id="main-landing-title" className="container has-text-centered">
                    <div className="columns">
                        <div className="column is-6 is-offset-3 has-text-centered">
                         </div>
                    </div>
                </div>
            </div>
            <canvas id="demo-canvas"></canvas>
        </div>

{/* 메인 정보 html */}
         <main className={mainContainer}>

        <div className={mainProfile}>
          <Profile></Profile>
        </div>
        <div className={contentContainer}>
          <div className={contentContainerSub}>
          {children}
          </div>
        </div>

      <nav className={navContainer}>
        <Nav></Nav>
      </nav>

      </main>

      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      
    </div>
  );
}

export default Layout;