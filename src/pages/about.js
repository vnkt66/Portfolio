import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import ImageOne from "../components/imageone"
import ImageTwo from "../components/imagetwo"
import ImageThree from "../components/imagethree"
import WorkSvg from "../images/work.svg"
import SkillSvg from "../images/skills.svg"
import ProjectSvg from "../images/project.svg"
import LocationSvg from "../images/location.svg"
import AboutStyles from "./about.module.css"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" description="About Page for my portfolio" />
      <section className="container-fluid mt-0">
        <div className="row" style={{ padding: "0", overflow: "hidden" }}>
          <div
            className="col-12"
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "130px 0 80px 0px",
            }}
          >
            <p className={AboutStyles.one}>HELLO</p>
            <p className={AboutStyles.two}>
              I'M <span style={{ color: "#1c93d2" }}>VENkANNA</span>
            </p>
            <p className={AboutStyles.three}>
              I'M A WEB <span>DEVELOPER</span>
            </p>
            <p className={AboutStyles.four}>MY FOCUS IS ON CREATING USER</p>
            <p className={AboutStyles.five}>CENTRIC & FOCUSSED</p>
            <p className={AboutStyles.six}>APPLICATIONS.</p>
          </div>
        </div>
        <div className="row py-md-5" style={{ overflow: "hidden" }}>
          <div
            className="col-sm m-0 p-0 px-sm-4 order-md-1 col-md-6"
            style={{
              overflow: "hidden",
            }}
          >
            <div className={AboutStyles.experiences}>
              <p className={AboutStyles.experiences_p}>
                <span
                  style={{ fontWeight: "bolder" }}
                  role="img"
                  aria-label="WorkSvg"
                >
                  <img
                    src={WorkSvg}
                    alt="WorkSvg"
                    style={{
                      width: "30px",
                      height: "30px",
                      verticalAlign: "sub",
                    }}
                  />
                  Work History
                </span>
              </p>
            </div>
            <div
              className={`${AboutStyles.experienceschildren} ${AboutStyles.experiences_jp_morgan}`}
            >
              <div
                className={`${AboutStyles.experienceschildrenone} ${AboutStyles.experienceschildren_jp_morgan}`}
              >
                <p className={AboutStyles.experience_num}>1</p>
                <p className={AboutStyles.experience_work}>FREELANCER</p>
                <p className={AboutStyles.experience_pos}>React Tutor</p>
                <div className={AboutStyles.experience_icon_loc}>
                  <span
                    className={AboutStyles.experience_icon}
                    role="img"
                    aria-label="LocationSvg"
                  >
                    <img
                      src={LocationSvg}
                      style={{ height: "36px", marginBottom: "0" }}
                      alt="LocationSvg"
                    />
                  </span>
                  <span className={AboutStyles.experience_loc}>London,UK</span>
                </div>
                <ul className={AboutStyles.experience_desc_ul}>
                  <li className={AboutStyles.experience_desc_li}>
                    TAUGHT A MARKETING TURNED CODER HOW TO CODE IN REACT FROM
                    BEGINNING.
                  </li>
                  <li className={AboutStyles.experience_desc_li}>
                    GUIDED HIM ON HIS BOOTCAMP PROJECT
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-sm m-0 p-0 pb-4 mt-4 m-md-0 px-sm-4 order-md-2 col-md-6"
            style={{ overflow: "hidden" }}
          >
            <div
              className={AboutStyles.experienceschildren}
              style={{ marginBottom: "20px" }}
            >
              <div className={`${AboutStyles.experienceschildrenone}`}>
                <p className={AboutStyles.experience_num}>2</p>
                <p className={AboutStyles.experience_work}>JP MORGAN & CHASE</p>
                <p
                  className={AboutStyles.experience_pos}
                  style={{ fontSize: "12px" }}
                >
                  SOFTWARE ENGINEER VIRTUAL INTERN
                </p>
                <ul
                  className={AboutStyles.experience_desc_ul}
                  style={{ top: "120px" }}
                >
                  <li className={AboutStyles.experience_desc_li}>
                    WORKED ON MAKING MODULAR CHANGES TO THE CODE.
                  </li>
                  <li className={AboutStyles.experience_desc_li}>
                    USING PERSPECTIVE FROM JP MORGAN & CHASE CREATED A GRAPH
                    THAT VISUALIZES THE STOCKS TAKEN FROM JP MORGAN & CHASE API.
                  </li>
                </ul>
              </div>
            </div>
            <div className={AboutStyles.experienceschildren}>
              <div className={`${AboutStyles.experienceschildrenone}`}>
                <p className={AboutStyles.experience_num}>3</p>
                <p className={AboutStyles.experience_work}>Y-COMBINATOR</p>
                <p
                  className={AboutStyles.experience_pos}
                  style={{ fontSize: "12px" }}
                >
                  FULL STACK VIRTUAL INTERN
                </p>
                <ul
                  className={AboutStyles.experience_desc_ul}
                  style={{ top: "120px" }}
                >
                  <li className={AboutStyles.experience_desc_li}>
                    BUILT A TASKS CHECKER APPLICATION USING REACT, NODE, SQLITE.
                  </li>
                  <li className={AboutStyles.experience_desc_li}>
                    WORKED ON DRAGULA LIBRARY TO IMPLEMENT DRAG AND DROP
                    FUNCTIONALITY USING REFS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ overflow: "hidden", padding: '100px 0 50px 0'}}>
          <div
            className="col-sm m-0 p-0 px-sm-4 order-md-2 col-md-6"
            style={{
              margin: "20% auto 0 auto",
              overflow: "hidden",
            }}
          >
            <div className={AboutStyles.skills}>
              <p className={AboutStyles.skills_p}>
                <span
                  style={{ fontWeight: "bolder" }}
                  role="img"
                  aria-label="SkillSvg"
                >
                  <img
                    src={SkillSvg}
                    alt="SkillSvg"
                    style={{
                      width: "30px",
                      height: "30px",
                      verticalAlign: "top",
                    }}
                  />{" "}
                  Skills
                </span>
              </p>
            </div>
          </div>
          <div className="col-sm m-0 p-0 mt-4 m-md-0 px-sm-4 order-md-1 col-md-6">
            <div
              className={AboutStyles.skills_circle}
              style={{ color: "#1c93d2" }}
            >
              <span className={AboutStyles.html}>HTML 5</span>
              <span className={AboutStyles.css}>CSS</span>
              <span className={AboutStyles.js}>JavaScript</span>
              <span className={AboutStyles.bootstrap}>Bootstrap</span>
              <span className={AboutStyles.react}>ReactJs</span>
              <span className={AboutStyles.vue}>VueJs</span>
              <span className={AboutStyles.angular}>Angular9</span>
              <span className={AboutStyles.node}>NodeJs</span>
              <span className={AboutStyles.php}>Php</span>
              <span className={AboutStyles.laravel}>Laravel</span>
              <span className={AboutStyles.django}>Django</span>
              <span className={AboutStyles.ruby}>Ruby On Rails</span>
              <span className={AboutStyles.mongo}>MongoDb</span>
              <span className={AboutStyles.sql}>MySql</span>
              <span className={AboutStyles.redis}>Redis</span>
              <span className={AboutStyles.sqlite}>Sqlite</span>
              <span className={AboutStyles.rest}>REST</span>
              <span className={AboutStyles.graphql}>Graphql</span>
              <span className={AboutStyles.git}>Git</span>
            </div>
          </div>
        </div>
        <div className="row pt-2 pt-md-5" style={{ overflow: "hidden" }}>
          <div className="col-12 m-0 p-0 py-5" style={{ overflow: "hidden" }}>
            <div className={AboutStyles.projects}>
              <p className={`${AboutStyles.projects_p}`}>
                <span
                  style={{ fontWeight: "bolder" }}
                  role="img"
                  aria-label="ProjectSvg"
                >
                  <img
                    src={ProjectSvg}
                    alt="ProjectSvg"
                    style={{
                      width: "30px",
                      height: "30px",
                      verticalAlign: "sub",
                      overflow: "hidden",
                    }}
                  />{" "}
                  Projects
                </span>
              </p>
            </div>
            <div className={AboutStyles.image_relative_one}>
              <div className={AboutStyles.imageone_absolute_one}>
                <div className={AboutStyles.image_relative_two}>
                  <Image imgStyle={{ width: "100%", height: "100%" }} />
                </div>
                <p
                  style={{
                    marginBottom: "10px",
                    fontSize: "37px",
                    lineHeight: "28px",
                    letterSpacing: "0.082em",
                    fontWeight: "900",
                    fontStyle: "normal",
                  }}
                >
                  Foodbe
                </p>
                <p
                  style={{
                    marginBottom: "0px",
                    fontSize: "10px",
                    letterSpacing: "0.077em",
                    lineHeight: "22px",
                  }}
                >
                  Left Out Food Collection App
                </p>
              </div>
              <div className={AboutStyles.imagetwo_absolute_one}>
                <div className={AboutStyles.image_relative_two}>
                  <ImageOne imgStyle={{ width: "100%", height: "100%" }} />
                </div>
                <p
                  style={{
                    marginBottom: "10px",
                    fontSize: "35px",
                    lineHeight: "30px",
                    fontWeight: "700",
                  }}
                >
                  InstaCar
                </p>
                <p
                  style={{
                    marginBottom: "0px",
                    fontSize: "10px",
                    letterSpacing: "-0.002em",
                    fontWeight: "500",
                  }}
                >
                  Cab Booking Application Prototype
                </p>
              </div>
              <div className={AboutStyles.imagethree_absolute_one}>
                <div className={AboutStyles.image_relative_two}>
                  <ImageTwo imgStyle={{ width: "100%", height: "100%" }} />
                </div>
                <p
                  style={{
                    marginBottom: "10px",
                    fontSize: "25px",
                    fontWeight: "700",
                    lineHeight: "21px",
                  }}
                >
                  Omdb Clone
                </p>
                <p
                  style={{
                    marginBottom: "0px",
                    fontSize: "10px",
                    lineHeight: "15px",
                    fontWeight: "400",
                    letterSpacing: "0.373em",
                  }}
                >
                  Lists out the movie collection from Omdb
                </p>
              </div>
              <div className={AboutStyles.imagefour_absolute_one}>
                <div className={AboutStyles.image_relative_two}>
                  <ImageThree imgStyle={{ width: "100%", height: "100%" }} />
                </div>
                <p
                  style={{
                    marginBottom: "10px",
                    fontSize: "24px",
                    lineHeight: "25px",
                    fontWeight: "700",
                  }}
                >
                  Stock Trader
                </p>
                <p
                  style={{
                    marginBottom: "0px",
                    fontSize: "10px",
                    lineHeight: "20px",
                    letterSpacing: "-0.002em",
                    fontWeight: "500",
                  }}
                >
                  Graphically Represents the stocks for traders
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0" style={{ overflow: "hidden" }}>
          <div
            className="col-sm-12 col-md-6 ml-4"
            style={{ padding: "120px 0 80px 0", overflow: "hidden" }}
          >
            <p className={AboutStyles.work}>
              Let's work together on your next project.
            </p>
          </div>
        </div>
        <div className="row p-0" style={{ overflow: "hidden" }}>
          <div
            className="col-md-12 ml-4 p-0"
            style={{
              fontSize: "19px",
              fontWeight: "700",
              color: "black",
              overflow: "hidden",
            }}
          >
            Email address
          </div>
          <div
            className="col-md-12 m-0 ml-4 p-0"
            style={{ fontSize: "19px", lineHeight: "37px", overflow: "hidden" }}
          >
            <a
              href="mailto:venkanna.penubothu@gmail.com?subject=Hi%20Venkanna!%20%E2%9C%8B"
              className={AboutStyles.email}
            >
              venkanna.penubothu@gmail.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
