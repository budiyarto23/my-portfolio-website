import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./detailCase.scss";

import Case from "../../Homepage/Case";
import Button from "elements/Button";

import Dummy1 from "assets/images/detail-case-1.png";
import Persona from "assets/images/user-persona.png";
import Sitemap from "assets/images/sitemap.png";


export default function DetailCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = useNavigate();
  const goToBack = () => goBack(-1);

  return (
    <div className="container-fluid p-0">
      <header className="bg-detail-case-study">
        <div className="container based-detail-case-study">
          <div className="frame-btn-back">
            <Button className="btn btn-outline-light btn-back" onClick={goToBack}>
              Back
            </Button>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p className="main-title-case-study">
                Microsite Diving Indonesia
              </p>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 layout-mobile">
              <p className="title-detail-case-study">Company</p>
              <p className="description-case-study">
                Ministry of Tourism and Creative Economy of the Republic of
                Indonesia (Kemenpar)
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 layout-mobile">
              <p className="title-detail-case-study">Project Duration</p>
              <p className="description-case-study">
                Start from March 8, 2021 - April 16, 2021 (6 weeks)
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 layout-tablet layout-mobile">
              <p className="title-detail-case-study">My Role</p>
              <p className="description-case-study">
                Product Designer - My responsibilities include user research,
                ensuring design aligns with business, KPIs, sitemaps,
                wireframing, prototyping, usability testing and Stakeholder
                presentations.
              </p>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 margin-each-section">
              <p className="title-detail-case-study">About the Project</p>
              <p className="description-case-study">
                Dive Indonesia is a microsite that displays various information
                about diving, such as diving locations, cave diving,
                liveaboards, hyperbaric chambers, and diving regulations in
                Indonesia. <br />
                <br />
                This microsite is a manifestation of the Ministry of Tourism's
                concern to promote and increase diving tourism in Indonesia.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 margin-each-section">
              <div className="frame-image-case">
                <img className="image-detail-case" src={Dummy1} alt="trd" />
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 margin-each-section">
              <p className="title-detail-case-study">Challenge</p>
              <p className="description-case-study">
                The diving industry in Indonesia has decreased by 66% based on
                data from the Indonesian Diving Tourism Entrepreneurs
                Association (PUWSI). Visits of local and foreign tourists have
                also decreased since Covid-19.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 margin-each-section">
              <p className="title-detail-case-study">Goals</p>
              <p className="description-case-study">
                Increasing the dive tourism industry in Indonesia after Covid-19
                and introducing diving spots and dive tourism services in
                Indonesia to local and foreign tourists.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <header className="bg-detail-case-study-1">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-lg-12 margin-each-section">
                  <p className="title-detail-case-study text-center">
                    Solution
                  </p>
                  <div className="description-case-study-single text-center mx-auto">
                    To get an effective product design solution, my team and I
                    use the design thinking methodology which is divided into 5
                    processes. <br />
                    <br /> The process includes Empathize, Define, Ideate,
                    Design, and Test. Here are the details:
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-3 col-lg-3 margin-each-section">
                  <p className="title-detail-case-study pt-5">Empathize</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-lg-9 margin-each-section container-design-process">
                  <div className="bg-solution">
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">Target User</p>
                      <p className="description-detail-solution">
                        People around 20-45 years old who like diving sports
                        including freediving, scuba diving, cave diving and many
                        more.
                      </p>
                    </div>
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">
                        Research Objectives
                      </p>
                      <ul className="description-detail-solution">
                        <li className="">
                          Identify user goals when visiting the dive site.
                        </li>
                        <li className="">
                          Identify user expectations when visiting the dive
                          site.
                        </li>
                        <li className="">
                          Identify the things that make users interested in
                          diving spots.
                        </li>
                        <li className="">
                          Identify the user's pain point when determining the
                          diving spots.
                        </li>
                        <li className="">
                          Identifying good and bad user experiences when
                          visiting diving spots.
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex flex-column">
                      <p className="title-detail-solution">Research Method</p>
                      <p className="description-detail-solution">
                        To answer the research objectives, my team and I use
                        Generative research methods that aim to find
                        opportunities, solutions and innovations. The research
                        used is a User Interview with a semi-structured type
                        with open questions that explore information from users
                        in detail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-3 col-lg-3 margin-each-section">
                  <p className="title-detail-case-study pt-5">Define</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-lg-9 margin-each-section container-design-process">
                  <div className="bg-solution">
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">Synthesizing Data</p>
                      <p className="description-detail-solution">
                        After the empathy process is complete, the next step is
                        to analyze and synthesize the data and then create a
                        problem statement which will then be developed into
                        design ideas.
                      </p>
                    </div>
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">Problem Statement</p>
                      <p className="description-detail-solution">
                        To formulate the problem formulation, we use the Four W
                        technique and the following are the results of the
                        problem formulation: <br /> <br /> “Divers have
                        difficulty finding information about spot diving
                        destinations and the lack of access to visit these
                        destinations. Due to the limited information available
                        on the internet and also the regulatory constraints of
                        COVID-19.”
                      </p>
                    </div>
                    <div className="d-flex flex-column">
                      <p className="title-detail-solution">User Persona</p>
                      <p className="description-detail-solution">
                        To provide an overview of the target user, based on the
                        results of research, here is a user persona to be a
                        description of the target user:
                      </p>
                      <div className="frame-persona">
                        <img
                          className="content-persona"
                          src={Persona}
                          alt="persona"
                        />
                      </div>
                      <p className="text-note">
                        Click the image to see the detail!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-3 col-lg-3 margin-each-section">
                  <p className="title-detail-case-study pt-5">Ideate</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-lg-9 margin-each-section container-design-process">
                  <div className="bg-solution">
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">Brainstorming</p>
                      <p className="description-detail-solution">
                        From the problem statement, we brainstormed to find
                        ideas that would later be used as features/services to
                        solve user problems. After that, we create a user flow
                        to describe how users use the website and also a sitemap
                        to describe the composition of the website.
                      </p>
                    </div>
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">Design Ideas</p>
                      <ul className="description-detail-solution">
                        <li className="">
                          Displays the location of diving spots in Indonesia
                          along with information on how to get to that location.
                        </li>
                        <li className="">
                          Displays the location of dive centers in Indonesia so
                          that users can find services when visiting certain
                          diving locations.
                        </li>
                        <li className="">
                          Displays a list of liveaboard service providers
                          available in Indonesia.
                        </li>
                        <li className="">
                          Displays a list of freediving, cave diving, and living
                          reef tourist destinations, so that it can be used as a
                          reference when users will visit certain destinations.
                        </li>
                        <li className="">
                          Displays a list of hyperbaric chambers to make it
                          easier for travellers to access first aid in case of
                          an emergency.
                        </li>
                        <li className="">
                          Displays the latest regulations for tourists regarding
                          health protocols, diving guidelines and more.
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex flex-column">
                      <p className="title-detail-solution">Sitemap</p>
                      <p className="description-detail-solution">
                        Here is a sitemap to describe the composition of the
                        site.
                      </p>
                      <div className="frame-persona">
                        <img
                          className="content-persona"
                          src={Sitemap}
                          alt="persona"
                        />
                      </div>
                      <p className="text-note">
                        Click the image to see the detail!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-3 col-lg-3 margin-each-section">
                  <p className="title-detail-case-study pt-5">Design</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-lg-9 margin-each-section container-design-process">
                  <div className="bg-solution">
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">
                        Gather Ideas With Design Studio
                      </p>
                      <p className="description-detail-solution">
                        Increasing the dive tourism industry in Indonesia after
                        Covid-19 and introducing diving spots and dive tourism
                        services in Indonesia to local and foreign tourists.
                      </p>
                    </div>
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">Wireframe</p>
                      <p className="description-detail-solution">
                        Here is a wireframe that we created based on the ideas
                        we gathered during the brainstorming session.
                      </p>
                      <div className="frame-persona">
                        <img
                          className="content-persona"
                          src={Sitemap}
                          alt="persona"
                        />
                      </div>
                      <p className="text-note">
                        Click the image to see the detail!
                      </p>
                    </div>
                    <div className="d-flex flex-column">
                      <p className="title-detail-solution">
                        High-fidelity Design
                      </p>
                      <p className="description-detail-solution">
                        Here is a wireframe that we created based on the ideas
                        we gathered during the brainstorming session.
                      </p>
                      <div className="frame-persona">
                        <img
                          className="content-persona"
                          src={Sitemap}
                          alt="persona"
                        />
                      </div>
                      <p className="text-note">
                        Click the image to see the detail!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-3 col-lg-3 margin-each-section">
                  <p className="title-detail-case-study pt-5">Test</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-lg-9 margin-each-section container-design-process">
                  <div className="bg-solution">
                    <div className="d-flex flex-column">
                      <p className="title-detail-solution">Usability Testing</p>
                      <p className="description-detail-solution">
                        After making some improvements from the results of the
                        concept test. We conducted usability testing with the
                        aim of finding out how easy it is for users to
                        understand and use the features on the site. <bt />
                        <br />
                        After that, we made some design improvements based on
                        user feedback.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 col-lg-12 margin-each-section-result">
                  <p className="title-detail-case-study text-center">Result</p>
                  <div className="description-case-study-single text-center mx-auto">
                    The design solutions we provide are visual displays that
                    highlight the beauty of Indonesia's underwater scenery and
                    matters related to diving tourism such as hyperbaric
                    chambers, regulations, liveaboards, and many more. <br />
                    <br /> In addition to the desktop version, we also make a
                    responsive version for tablets and mobile devices.
                    Hopefully, this microsite can help promote diving tourism in
                    Indonesia.
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid bg-other-case">
              <Case />
            </div>
          </header>
        </div>
      </header>
    </div>
  );
}
