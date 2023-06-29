import React from 'react';
import './code.css';
import Cimage from './download.png';

const CodeOfConduct = () => {
  return (
    <div className='code_body'>
      <div className="code_container">
        <div className="page article-page">
          {/* Header section */}
          <header className="code_header">
            <img src={Cimage} alt="Devfolio" />
            <h1 className="code_heading">Code of Conduct</h1>
          </header>

          {/* Applicability section */}
          <section className="code_section">
            <h2 className="codesub_heading">Applicability</h2>
            <p className="code_description">
              This policy shall be applicable on all spaces related to Devfolio,
              including the following, as well as their online counterparts (if
              any):
            </p>
            <ul>
              <li>hackathons</li>
              <li>talks, presentations, or demos</li>
              <li>workshops</li>
              <li>parties and social events</li>
              <li>social media channels, etc.</li>
            </ul>
            <p className="code_description">
              This Code of Conduct also applies equally to all sponsors and
              partners of hackathons, and to all projects that are made at the
              hackathon.
            </p>
          </section>

          {/* No plagiarism or re-using of past work section */}
          <section className="code_section">
            <h2 className="sub-heading">No plagiarism or re-using of past work</h2>
            <p className="code_description">
              We encourage you to submit projects only prepared in the duration
              of the hackathon. <br />
              However, if you decide to submit projects consisting of re-used
              code, or re-submit a project that you have already submitted
              previously to any other hackathon, you are to disclose such
              previous use and its extent with the submission.
            </p>
            <br />
            <p className="code_description">
              If upon inspection, it is found that the project has re-used code
              that was not disclosed with the submission, the organizer may ask
              the participant to point out similarities and differences between
              the old and new work, and/or disqualify the submission from
              winning awards automatically.
            </p>
          </section>

          {/* No discrimination section */}
          <section className="code_section">
            <h2 className="sub-heading">No discrimination</h2>
            <p className="code_description">
              Hackathons hosted on Devfolio are dedicated to providing a safe
              and comfortable environment and harassment-free experience for
              everyone. No discrimination, on the basis of the following, shall
              be tolerated:
            </p>
            <ul>
              <li>gender</li>
              <li>gender identity and expression</li>
              <li>age</li>
              <li>sexual orientation</li>
              <li>disability</li>
              <li>physical appearance</li>
              <li>body size</li>
              <li>race</li>
              <li>ethnicity</li>
              <li>nationality</li>
              <li>religion</li>
              <li>political views</li>
              <li>previous hackathon attendance or lack of</li>
              <li>computing experience or lack of</li>
              <li>chosen programming language or tech stack</li>
            </ul>
          </section>

          {/* Summary section */}
          <section className="code_section">
            <h2 className="sub-heading">Summary</h2>
            <p className="code_description">
              The Code of Conduct outlined here is intended to promote a
              respectful and inclusive environment for all participants. By
              participating in a hackathon hosted on Devfolio, you agree to
              comply with this Code of Conduct and to act in accordance with its
              guidelines.
            </p>
          </section>

          {/* No harassment section */}
          <section className="custom-section">
            <h2 className="custom-section-heading">No harassment</h2>
            <p className="custom-section-description">
              We do not tolerate harassment of hackathon participants in any form,
              including offensive discriminatory verbal comments, public display of sexual
              material, in public spaces, deliberate intimidation, stalking, wilful
              disruption, inappropriate physical contact, unwelcome sexual advances, and
              the taking of photographs and audio/video recordings without the subject's
              consent.
            </p>
          </section>

          {/* No recording without consent section */}
          <section className="custom-section">
            <h2 className="custom-section-heading">No recording without consent</h2>
            <p className="custom-section-description">
              While photography and videography is encouraged, other participants must be
              given a reasonable chance to opt out from being photographed. If they object
              to the taking of their photograph, comply with their request.
            </p>
            <br />
            <p className="custom-section-description">
              If they express their disapproval after the photo or video has been captured,
              please delete it from your records, and in case it has been shared online,
              take reasonable steps to retract it from social media as well.
            </p>
            <br />
            <p className="custom-section-description">
              It is inappropriate to take photographs in contexts where people have a
              reasonable expectation of privacy (in bathrooms or where participants are
              sleeping).
            </p>
          </section>

          {/* Creation of a safe space section */}
          <section className="custom-section">
            <h2 className="custom-section-heading">Creation of a safe space</h2>
            <p className="custom-section-description">
              No sponsors, partners, or participants shall use sexualised images,
              activities, or other material at the hackathons for any non-permitted
              purpose. The use of sexualised clothing/uniforms/costumes, and anything that
              creates a sexualised environment is prohibited.
            </p>
          </section>

          {/* Intellectual Property section */}
          <section className="custom-section">
            <h2 className="custom-section-heading">Intellectual Property</h2>
            <p className="custom-section-description">
              You will own any developments made by you, and all rights, titles and
              interests in those developments, including the intellectual property rights
              therein, shall belong to you. By posting your submission on Devfolio, you are
              granting Devfolio a non-exclusive, worldwide, royalty-free license to use,
              distribute, display and reproduce your submission only to the extent required
              by us to provide services on the Devfolio platform. We will never try to steal
              your creations or use them exploitatively.
            </p>
          </section>

          {/* Report section */}
          <section className="custom-section">
            <h2 className="custom-section-heading">Always report</h2>
            <p className="custom-section-description">
              If you notice any violation of this Code of Conduct or find otherwise suspicious
              behavior or have any concerns, please contact a member of the hackathon organizing
              committee immediately.
            </p>
            <br />
            <p className="custom-section-description">
              We will be happy to help participants contact local security or local law enforcement,
              or otherwise assist those experiencing harassment to feel safe for the duration of the
              hackathon. We value your attendance.
            </p>
          </section>

          {/* Consequences of violations section */}
          <section className="custom-section">
            <h2 className="custom-section-heading">Consequences of violations</h2>
            <p className="custom-section-description">
              In case any participant violates this Code of Conduct, the organizer may, at their
              own discretion:
            </p>
            <ul className="custom-section-list">
              <li>expel them from the hackathon with no refund (if applicable),</li>
              <li>block their access to Devfolio resources including the website,</li>
              <li>report their behavior to local law enforcement.</li>
            </ul>
          </section>

          {/* Contact section */}
          <section className="contact-section">
            <h2 className="contact-heading">Contact us</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-card">
                  <p className="contact-description">If you have witnessed or experienced any transgressions of this Code of Conduct at a hackathon hosted on Devfolio, please report it to your hackathon organizer, or get in touch with Devfolio.</p>
                </div>
              </div>
              <div className="contact-details">
                <div className="contact-card email-card">
                  <div className="contact-card-content">
                    <h2 className="contact-person">Denver Dsouza</h2>
                    <div className="contact-row">
                      <div className="contact-icon" name="mail"></div>
                      <span  className='span_card'>
                        <a aria-label="Copy email address" href="mailto:denver@devfolio.co">denver@devfolio.co</a>
                        <span className="copy-email">Copy email address</span>
                      </span>
                    </div>
                    <div className="contact-row">
                      <span className='span_card'>No. 97, 4th main, 1st cross, New Thippasandra, Bengaluru - 560075</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
</div>
  );
}

export default CodeOfConduct;
