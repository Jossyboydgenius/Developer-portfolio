import React from "react";
import NextLink from "next/link";
import "./policy.css";

export const metadata = {
  title: "Privacy Policy - Awe Joseph",
  description: "Privacy Policy for Awe Joseph's portfolio website",
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="policy-page">
      <div className="wrapper">
        <NextLink href="/" className="back-link">
          ← Back to Home
        </NextLink>

        <h1 className="heading-1">
          <span className="gradient-text">Privacy Policy</span>
        </h1>

        <div className="policy-content">
          <p className="last-updated">Last Updated: November 5, 2025</p>

          <section>
            <h2 className="gradient-text">Introduction</h2>
            <p>
              Welcome to my portfolio website. I respect your privacy and am
              committed to protecting your personal data. This privacy policy
              will inform you about how I handle your personal data when you
              visit my website.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Information I Collect</h2>
            <p>
              I may collect, use, store and transfer different kinds of personal
              data about you:
            </p>
            <ul>
              <li>
                <strong>Contact Data:</strong> Name, email address, and phone
                number when you fill out the contact form
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type and
                version, time zone setting, browser plug-in types and versions,
                operating system and platform
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use my
                website
              </li>
            </ul>
          </section>

          <section>
            <h2 className="gradient-text">How I Use Your Information</h2>
            <p>
              I will only use your personal data when the law allows me to. Most
              commonly, I will use your personal data in the following
              circumstances:
            </p>
            <ul>
              <li>To respond to your inquiries and requests</li>
              <li>To improve my website and services</li>
              <li>To analyze website usage and trends</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="gradient-text">Data Security</h2>
            <p>
              I have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Data Retention</h2>
            <p>
              I will only retain your personal data for as long as necessary to
              fulfill the purposes I collected it for, including for the
              purposes of satisfying any legal, accounting, or reporting
              requirements.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Your Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data:
            </p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="gradient-text">Third-Party Links</h2>
            <p>
              This website may include links to third-party websites, plug-ins
              and applications. Clicking on those links or enabling those
              connections may allow third parties to collect or share data about
              you. I do not control these third-party websites and am not
              responsible for their privacy statements.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Contact Information</h2>
            <p>
              If you have any questions about this privacy policy or my privacy
              practices, please contact me at:
            </p>
            <p>
              <strong>Email:</strong> awejosepholaitan@gmail.com
              <br />
              <strong>Phone:</strong> +2349034018552
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Changes to This Privacy Policy</h2>
            <p>
              I may update this privacy policy from time to time. Any changes I
              make will be posted on this page with an updated revision date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
