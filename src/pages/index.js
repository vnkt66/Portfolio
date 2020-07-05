import React, { useEffect } from "react"
import { navigate } from "@reach/router"
import { gsap } from "gsap"

import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import IndexStyles from "./index.module.css"

const IndexPage = () => {
  let appFirstSection = null
  let appSecondSection = null
  let appDrawer = null

  useEffect(() => {
    let children = []
    let divChildren = []
    let drawerChildren = []
    for (let i = 0; i < appFirstSection.childNodes.length; i++) {
      children.push(appFirstSection.childNodes[i])
    }
    let div1 = children[0]
    let div2 = children[1]
    let div3 = children[2]
    let div4 = children[3]
    for (let i = 0; i < children[4].childNodes.length; i++) {
      divChildren.push(children[4].childNodes[i])
    }
    const animateDrawer = () => {
      for (let i = 0; i < appDrawer.childNodes.length; i++) {
        drawerChildren.push(appDrawer.childNodes[i])
      }
      let t2 = gsap.timeline({
        onComplete: async () => {
          await navigate("/about", { replace: false })
        },
      })
      t2.to(drawerChildren, {
        duration: 0.8,
        x: -800,
        stagger: { each: 0.25 },
        ease: "power3.inOut",
      })
    }
    let t1 = gsap.timeline({
      delay: 1,
      onComplete: () => {
        console.log("ended")
        appFirstSection.style.display = "none"
        appSecondSection.style.display = "block"
        animateDrawer()
      },
    })
    t1.to(divChildren, {
      duration: 0.5,
      opacity: 1,
      y: -10,
      stagger: { each: 0.2 },
      ease: "power3.out",
    })
      .to(divChildren, {
        duration: 0.3,
        opacity: 0,
        y: 10,
        stagger: { each: 0.1 },
        ease: "power3.in",
      })
      .to(div1, { duration: 0.8, y: 1024 }, "-=0.1")
      .to(div2, { duration: 0.8, y: 1024 }, "-=0.7")
      .to(div3, { duration: 0.8, y: 1024 }, "-=0.7")
      .to(div4, { duration: 0.8, y: 1024 }, "-=0.7")
  }, [appFirstSection, appSecondSection, appDrawer])

  return (
    <>
      <section
        className="row m-0 p-0"
        style={{
          height: "100%",
          overflow: "hidden",
          position: "relative",
        }}
        ref={section => (appFirstSection = section)}
      >
        <div
          className="col-3 col-md-3"
          style={{
            height: "100%",
            backgroundColor: "black",
          }}
        >
          Div1
        </div>
        <div
          className="col-3 col-md-3"
          style={{
            height: "100%",
            backgroundColor: "black",
            borderRight: "1px solid white",
          }}
        >
          Div2
        </div>
        <div
          className="col-3 col-md-3"
          style={{
            height: "100%",
            backgroundColor: "black",
          }}
        >
          Div3
        </div>
        <div
          className="col-3 col-md-3"
          style={{
            height: "100%",
            backgroundColor: "black",
          }}
        >
          Div4
        </div>
        <div className={IndexStyles.co_de_te}>
          <span className={IndexStyles.coder}>Coder, </span>
          <span className={IndexStyles.teacher}>Teacher, </span>
          <span className={IndexStyles.designer}>Designer.</span>
        </div>
      </section>
      <section
        id="app_main_wrapper"
        ref={section => (appSecondSection = section)}
        style={{ display: "none" }}
      >
        <SEO title="Home" description="Home Page for my portfolio" />
        <Header siteTitle="Venkanna" />
        <section className="container-fluid mt-0">
          <div
            className="row"
            style={{
              padding: "0",
              overflow: "hidden",
            }}
          >
            <div
              className="col-md-6 d-none d-md-block p-0 px-0 px-md-0"
              id="app_main_drawer"
              ref={div => (appDrawer = div)}
              style={{
                overflow: "hidden",
                height: "556px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "25%",
                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  width: "100%",
                  height: "25%",

                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  width: "100%",
                  height: "25%",

                  backgroundColor: "black",
                }}
              ></div>
              <div
                style={{
                  width: "100%",
                  height: "25%",

                  backgroundColor: "black",
                }}
              ></div>
            </div>
            <div
              className="col-md-6 p-0 px-3 px-md-5"
              style={{
                overflow: "hidden",
                height: "556px",
              }}
            >
              <p className={IndexStyles.venkanna_penubothu}>
                Venkanna Penubothu.
              </p>
            </div>
          </div>
        </section>
        <Footer siteTitle="Venkanna" />
      </section>
    </>
  )
}

export default IndexPage
