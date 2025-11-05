import React from "react";
import NextLink from "next/link";
import "../privacy-policy/policy.css";

export const metadata = {
  title: "Cookie Policy - Awe Joseph",
  description: "Cookie Policy for Awe Joseph's portfolio website",
};

const CookiePolicy: React.FC = () => {
  return (
    <div className="policy-page">
      <div className="wrapper">
        <NextLink href="/" className="back-link">
          ← Back to Home
        </NextLink>

        <h1 className="heading-1">
          <span className="gradient-text">Cookie Policy</span>
        </h1>

        <div className="policy-content">
          <p className="last-updated">Last Updated: November 5, 2025</p>

          <section>
            <h2 className="gradient-text">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently and provide information to the
              website owners.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">How I Use Cookies</h2>
            <p>
              I use cookies to improve your experience on my website. The
              cookies I use fall into the following categories:
            </p>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly.
              They enable basic functions like page navigation and access to
              secure areas of the website.
            </p>

            <h3>Performance Cookies</h3>
            <p>
              These cookies collect information about how visitors use the
              website, such as which pages visitors go to most often. This helps
              me improve the way my website works.
            </p>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make (such
              as your preferred language or region) and provide enhanced, more
              personal features.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              I use analytics cookies to understand how visitors interact with
              my website. This helps me analyze data about website traffic and
              improve my website in order to tailor it to customer needs.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Third-Party Cookies</h2>
            <p>
              Some cookies may be set by third-party services that appear on my
              pages. I have no control over these cookies. The third parties
              that may set cookies include:
            </p>
            <ul>
              <li>
                <strong>Google Analytics:</strong> To help analyze how users use
                the site
              </li>
              <li>
                <strong>Social Media Platforms:</strong> If you share content
                from my website on social media
              </li>
            </ul>
          </section>

          <section>
            <h2 className="gradient-text">How to Control Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete
              all cookies that are already on your computer and you can set most
              browsers to prevent them from being placed. However, if you do
              this, you may have to manually adjust some preferences every time
              you visit a site and some services and functionalities may not
              work.
            </p>

            <h3>Browser Controls</h3>
            <p>
              Most web browsers allow you to control cookies through their
              settings preferences. Here's how to manage cookies in popular
              browsers:
            </p>
            <ul>
              <li>
                <strong>Chrome:</strong> Settings → Privacy and security →
                Cookies and other site data
              </li>
              <li>
                <strong>Firefox:</strong> Options → Privacy & Security → Cookies
                and Site Data
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Manage Website
                Data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and site permissions →
                Cookies and site data
              </li>
            </ul>
          </section>

          <section>
            <h2 className="gradient-text">Cookies I Use</h2>
            <p>Here's a detailed list of the cookies I use on my website:</p>

            <div className="cookie-table">
              <div className="cookie-row">
                <div className="cookie-name">Session Cookies</div>
                <div className="cookie-desc">
                  Temporary cookies that expire when you close your browser
                </div>
              </div>
              <div className="cookie-row">
                <div className="cookie-name">Preference Cookies</div>
                <div className="cookie-desc">
                  Remember your settings and preferences
                </div>
              </div>
              <div className="cookie-row">
                <div className="cookie-name">Analytics Cookies</div>
                <div className="cookie-desc">
                  Track visitor behavior and website performance
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="gradient-text">Updates to This Policy</h2>
            <p>
              I may update this Cookie Policy from time to time to reflect
              changes in technology, legislation, or my website operations.
              Please check back periodically to stay informed of any changes.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Your Consent</h2>
            <p>
              By continuing to use my website, you consent to my use of cookies
              as described in this Cookie Policy. If you do not agree with my
              use of cookies, you should change your browser settings
              accordingly or refrain from using my website.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Contact Information</h2>
            <p>
              If you have any questions about my use of cookies, please contact
              me at:
            </p>
            <p>
              <strong>Email:</strong> awejosepholaitan@gmail.com
              <br />
              <strong>Phone:</strong> +2349034018552
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
