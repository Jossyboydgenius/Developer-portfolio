import React from "react";
import NextLink from "next/link";
import "../privacy-policy/policy.css";

export const metadata = {
  title: "Terms and Conditions - Awe Joseph",
  description: "Terms and Conditions for Awe Joseph's portfolio website",
};

const TermsAndConditions: React.FC = () => {
  return (
    <div className="policy-page">
      <div className="wrapper">
        <NextLink href="/" className="back-link">
          ← Back to Home
        </NextLink>

        <h1 className="heading-1">
          <span className="gradient-text">Terms and Conditions</span>
        </h1>

        <div className="policy-content">
          <p className="last-updated">Last Updated: November 5, 2025</p>

          <section>
            <h2 className="gradient-text">Introduction</h2>
            <p>
              Welcome to my portfolio website. These terms and conditions
              outline the rules and regulations for the use of my website. By
              accessing this website, you accept these terms and conditions in
              full. Do not continue to use this website if you do not accept all
              of the terms and conditions stated on this page.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, I and/or my licensors own the
              intellectual property rights for all material on this website. All
              intellectual property rights are reserved. You may view and/or
              print pages from the website for your own personal use subject to
              restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul>
              <li>Republish material from this website</li>
              <li>Sell, rent or sub-license material from the website</li>
              <li>Reproduce, duplicate or copy material from the website</li>
              <li>
                Redistribute content from this website (unless content is
                specifically made for redistribution)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="gradient-text">Acceptable Use</h2>
            <p>
              You must not use this website in any way that causes, or may
              cause, damage to the website or impairment of the availability or
              accessibility of the website. You must not use this website:
            </p>
            <ul>
              <li>
                In any way that is unlawful, illegal, fraudulent or harmful
              </li>
              <li>
                In connection with any unlawful, illegal, fraudulent or harmful
                purpose or activity
              </li>
              <li>
                To copy, store, host, transmit, send, use, publish or distribute
                any material which consists of (or is linked to) any spyware,
                computer virus, Trojan horse, worm, keystroke logger, rootkit or
                other malicious computer software
              </li>
            </ul>
          </section>

          <section>
            <h2 className="gradient-text">User Content</h2>
            <p>
              In these terms and conditions, "your user content" means material
              (including without limitation text, images, audio material, video
              material and audio-visual material) that you submit to this
              website, for whatever purpose.
            </p>
            <p>
              You grant me a worldwide, irrevocable, non-exclusive, royalty-free
              license to use, reproduce, adapt, publish, translate and
              distribute your user content in any existing or future media.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Services</h2>
            <p>
              The information provided on this website regarding my services is
              for general information purposes only. All services are subject to
              availability and may be modified or discontinued at any time
              without notice.
            </p>
            <p>
              Service agreements will be subject to separate terms and
              conditions that will be provided upon engagement.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Limitation of Liability</h2>
            <p>
              I will not be liable to you (whether under the law of contact, the
              law of torts or otherwise) in relation to the contents of, or use
              of, or otherwise in connection with, this website:
            </p>
            <ul>
              <li>For any indirect, special or consequential loss</li>
              <li>
                For any business losses, loss of revenue, income, profits or
                anticipated savings, loss of contracts or business
                relationships, loss of reputation or goodwill, or loss or
                corruption of information or data
              </li>
            </ul>
          </section>

          <section>
            <h2 className="gradient-text">Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, I exclude all
              representations, warranties and conditions relating to this
              website and the use of this website (including, without
              limitation, any warranties implied by law in respect of
              satisfactory quality, fitness for purpose and/or the use of
              reasonable care and skill).
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Indemnity</h2>
            <p>
              You hereby indemnify me and undertake to keep me indemnified
              against any losses, damages, costs, liabilities and expenses
              (including without limitation legal expenses and any amounts paid
              by me to a third party in settlement of a claim or dispute)
              incurred or suffered by me arising out of any breach by you of any
              provision of these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Variation</h2>
            <p>
              I may revise these terms and conditions from time to time. The
              revised terms and conditions will apply to the use of this website
              from the date of publication of the revised terms and conditions
              on this website.
            </p>
          </section>

          <section>
            <h2 className="gradient-text">Contact Information</h2>
            <p>
              If you have any questions about these terms and conditions, please
              contact me at:
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

export default TermsAndConditions;
