import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./detailCaseOR.scss";
// import "../DetailDiving/detailCase.scss";

import Case from "../../Homepage/Case";
import Button from "elements/Button";

import Persona from "assets/images/or-user-persona.webp";
import UserFlow from "assets/images/or-user-flow.webp";
import Wireframe from "assets/images/or-wireframe.webp";
import HiFi from "assets/images/or-hifi.webp";

export default function DetailCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = useNavigate();
  const goToBack = () => goBack(-1);

  return (
    <div className="container-fluid p-0">
      <header className="bg-detail-case-study-or">
        <div className="container based-detail-case-study">
          <div className="frame-btn-back">
            <Button
              className="btn btn-outline-light btn-back"
              onClick={goToBack}
            >
              Back
            </Button>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p className="main-title-case-study">
                Online Registration System
              </p>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 layout-mobile">
              <p className="title-detail-case-study">Company</p>
              <p className="description-case-study">
                Bina Antar Budaya (Binabud)
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 layout-mobile">
              <p className="title-detail-case-study">Project Duration</p>
              <p className="description-case-study">
                Start from July 12, 2021 - August 23, 2021 (6 weeks)
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 layout-tablet layout-mobile">
              <p className="title-detail-case-study">My Role</p>
              <p className="description-case-study">
                Product Designer - I am responsible for
                ensuring that business requirements stay aligned with user
                needs, conducting user research, information architecture,
                wireframing, prototyping, usability testing and presentation to
                clients.
              </p>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 margin-each-section">
              <div className="case-study-divider"></div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 margin-each-section">
              <p className="title-detail-case-study text-center">About the Project</p>
              <p className="description-case-study-single text-center mx-auto">
                This online registration system was created to make it easier
                for high school students or equivalent to register and
                participate in the selection process for student exchange
                abroad.
                <br />
                <br />
                This website will capture the entire process from registration
                until the student is declared to have failed or passed the
                selection.
                <br />
                <br />
                This website is also operated by the Admin to manage student
                data who register and also conduct file selection and interviews
                that determine student graduation. So there are two main types
                of users who access the website.
                <br />
                <br />
                Disclaimer: I only show the design process for the user view,
                while for the admin version I don't show the design process and
                results.
              </p>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 margin-each-section">
              <div className="case-study-divider"></div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 margin-each-section">
              <p className="title-detail-case-study">Challenge</p>
              <p className="description-case-study">
                So far, the registration and selection process for student
                exchanges has been carried out offline and has been carried out
                throughout Indonesia.
                <br />
                <br />
                So that the process is very difficult for students and
                administrators in coordinating the administration and selection
                process. This makes the selection and registration process
                ineffective.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 margin-each-section">
              <p className="title-detail-case-study">Goals</p>
              <p className="description-case-study">
                Make the student exchange registration process and the entire
                selection process done online and simultaneously, the goal is to
                make it more effective and efficient.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <header className="bg-detail-case-study-1-or">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-lg-12 margin-each-section">
                  <p className="title-detail-case-study text-center">
                    Solution
                  </p>
                  <div className="description-case-study-single text-center mx-auto">
                    From the initial meeting with the client, they want to
                    realize a website or dashboard to manage the registration
                    and selection process. To validate this, we conducted
                    various research and stakeholder interviews to validate
                    business and student needs.
                    <br />
                    <br />
                    We employ the following design thinking strategies:
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-3 col-lg-3 margin-each-section">
                  <p className="title-detail-case-study pt-5">Empathize</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-lg-9 margin-each-section container-design-process">
                  <div className="bg-solution">
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="description-detail-solution">
                        I only show the research process to gather information
                        from the main target users (high school students). As for internal research users (admins),
                        I'm not showing the details.
                      </p>
                    </div>
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">Target User</p>
                      <p className="description-detail-solution">
                        High school students who want to take part
                        in the selection of student exchange abroad.
                      </p>
                    </div>
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">
                        Problem Statement (for research)
                      </p>
                      <ul className="description-detail-solution">
                        <li className="">
                          What are the obstacles experienced by participants
                          when they will register for the selection?
                        </li>
                        <li className="">
                          After registering, what obstacles did participants
                          experience during the selection process?
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">
                        Research Objectives
                      </p>
                      <ul className="description-detail-solution">
                        <li className="">
                          Identify the pain points of participants when
                          registering.
                        </li>
                        <li className="">
                          Identify the goals of participants for the selection
                          registration process.
                        </li>
                        <li className="">
                          Identify participants' expectations of the
                          registration process.
                        </li>
                        <li className="">
                          Identify participants' pain points when filling out
                          the registration form.
                        </li>
                        <li className="">
                          Identify participants' pain points during the
                          selection process.
                        </li>
                        <li className="">
                          Identify participant goals during the selection
                          process.
                        </li>
                        <li className="">
                          Identify participants' expectations during the
                          selection process.
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex flex-column">
                      <p className="title-detail-solution">Research Method</p>
                      <p className="description-detail-solution">
                        My team and I did primary research to find out details
                        about pain points, goals and expectations of high school
                        students as the main target users. We conduct in-depth
                        interviews with generative methods to find
                        opportunities, solutions and innovations. While doing
                        desk research for admin users by utilizing the resources
                        owned by the client.
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
                        After the empathy process is complete, we synthesize the
                        data into empathy maps and affinity diagrams. The goal
                        is to group the findings that are important to be
                        followed up.
                      </p>
                    </div>
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">User Persona</p>
                      <p className="description-detail-solution">
                        To provide an overview of the target users, based on the
                        research results, we created two user personas, one for
                        the main target users (high school students) and the
                        second for the admin users. This is what I provided from
                        the persona for the main target user.
                      </p>
                      <div className="frame-persona">
                        <img
                          className="content-persona"
                          src={Persona}
                          alt="persona"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <p className="title-detail-solution">Problem Statement</p>
                      <p className="description-detail-solution">
                        After synthesizing the research results, we summarize
                        the problem statement that will be developed into a
                        design/product idea. The following is the problem
                        statement that we summarize:
                        <br />
                        <br />
                        “Students have difficulty registering and participating
                        in the selection process due to limited information and
                        internet access. Meanwhile, to carry out the
                        registration process, a lot of data must be completed.”
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
                        From the problem statement, we brainstorm to find ideas
                        that will later be used as features/services to solve
                        user problems. After that, we create a user flow to
                        describe how users use the website and also a sitemap to
                        describe the composition of the website.
                      </p>
                    </div>
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">Mind Maps</p>
                      <p className="description-detail-solution">
                        After brainstorming I created a mind map to group
                        information from brainstorming to planning content on
                        the website and classifying it.
                      </p>
                    </div>
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">Design Ideas</p>
                      <ul className="description-detail-solution">
                        <li className="">
                          Displays program options on the home page so that it
                          is easily selected by the user when registering.
                          Displays chapter offices throughout Indonesia.
                        </li>
                        <li className="">
                          The goal is that all users in various regions of
                          Indonesia can reach.
                        </li>
                        <li className="">
                          Display a review of personal data that has been filled
                          in by the user before submitting.
                        </li>
                        <li className="">
                          Create separate self-data filling forms based on
                          categories.
                        </li>
                        <li className="">
                          Create a download menu and upload the files needed for
                          registration needs.
                        </li>
                        <li className="">
                          Displays the results of the selection of students who
                          passed.
                        </li>
                        <li className="">
                          Update notification info via email about graduation
                          status.
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex flex-column">
                      <p className="title-detail-solution">
                        User journey maps, Storyboard, and User flow
                      </p>
                      <p className="description-detail-solution">
                        Next, we create a user journey map, storyboard, as well
                        as a user flow to illustrate how users can interact with
                        the product.
                      </p>
                      <div className="frame-persona">
                        <img
                          className="content-persona"
                          src={UserFlow}
                          alt="persona"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-3 col-lg-3 margin-each-section">
                  <p className="title-detail-case-study pt-5">Design</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-lg-9 margin-each-section container-design-process">
                  <div className="bg-solution">
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">Wireframe</p>
                      <p className="description-detail-solution">
                      Here is a wireframe that we created based on the ideas we gathered during the brainstorming session.
                      </p>
                      <div className="frame-persona mb-4">
                        <img
                          className="content-persona"
                          src={Wireframe}
                          alt="wireframe"
                        />
                      </div>
                      <p className="description-detail-solution">
                      After the wireframe is complete, we do a concept test to validate whether the wireframe that we created is in accordance with the user's needs or not. Then we revamp according to user feedback.
                      </p>
                    </div>
                    <div className="d-flex flex-column margin-each-solution-detail">
                      <p className="title-detail-solution">
                        Design System
                      </p>
                      <p className="description-detail-solution">
                      We create a design system with the aim of making it easier for the team to design maintenance and make a consistent and professional design.
                      </p>
                    </div>
                    <div className="d-flex flex-column">
                      <p className="title-detail-solution">
                        High-fidelity Design
                      </p>
                      <p className="description-detail-solution">
                      After validating the wireframe through concept testing, we made some adjustments and moved on to a high-fidelity design. After that, we convert the wireframe to hi-fi by implementing the design system. And here is the result:
                      </p>
                      <div className="frame-persona">
                        <img
                          className="content-persona"
                          src={HiFi}
                          alt="hifi"
                        />
                      </div>
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
                      After making some improvements from the results of the concept testing, we conducted usability testing for a high-fidelity design. The purpose of usability testing is to find out how easy it is for users to understand and use the features on the website.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 col-lg-12 margin-each-section-result">
                  <p className="title-detail-case-study text-center">Result</p>
                  <div className="description-case-study-single text-center mx-auto">
                  After the online registration website was published, the number of registrants for 2021 was 32,000 students, an increase of 36% from the previous year.
                  <br/><br/>
                  This is one measure that the presence of this online registration system is quite effective in increasing student interest in registering and participating in the selection. Because the process is much easier and more effective than before.
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
