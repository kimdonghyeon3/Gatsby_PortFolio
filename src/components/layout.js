import { useStaticQuery, graphql } from "gatsby";
import React, { useEffect } from "react";
import Profile from "./profile.js"
import Nav from "./nav.js"
import {
  container,
  navContainer,
  mainContainer,
  mainProfile,
  contentContainer,
  contentContainerSub,
} from "./layout.module.css";

function Layout({ pageTitle, children }) {


  useEffect(() => {
                      var width, height, largeHeader, canvas, ctx, circles, animateHeader = true;

                        // Main
                        initHeader();

                        function initHeader() {
                            console.log("start bubble");
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
  },[])

            

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
  {/* <div class="pageloader"></div>
        <div class="infraloader is-active"></div> */}
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