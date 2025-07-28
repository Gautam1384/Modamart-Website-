import React from 'react';

function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
      <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span role="img" aria-label="shield">🛡️</span> Modamart Privacy Policy
      </h2>
      <ol style={{ lineHeight: 1.7 }}>
        <li>
          <strong>Introduction</strong>
          <p>
            We at Modamart respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
          </p>
        </li>
        <li>
          <strong>Information We Collect</strong>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Details:</strong> Name, email address, phone number, billing and shipping address.</li>
            <li><strong>Login Credentials:</strong> Email and password (stored securely).</li>
            <li><strong>Payment Information:</strong> Processed securely via third-party payment gateways (we don’t store card details).</li>
            <li><strong>Browsing Activity:</strong> Pages visited, products viewed, time spent.</li>
            <li><strong>Device Info:</strong> IP address, browser type, and device used.</li>
          </ul>
        </li>
        <li>
          <strong>How We Use Your Information</strong>
          <ul>
            <li>Process orders and payments</li>
            <li>Deliver products and manage returns</li>
            <li>Communicate updates and offers</li>
            <li>Improve user experience and personalize content</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
        </li>
        <li>
          <strong>Cookies and Tracking</strong>
          <p>Modamart uses cookies and similar technologies to:</p>
          <ul>
            <li>Save your cart and wishlist</li>
            <li>Remember login status</li>
            <li>Understand how users interact with our site</li>
          </ul>
          <p>You can control cookies through your browser settings.</p>
        </li>
        <li>
          <strong>Sharing of Information</strong>
          <p>We do not sell your personal information. We may share it only with:</p>
          <ul>
            <li>Payment gateway providers (like Razorpay, Stripe)</li>
            <li>Shipping and logistics partners</li>
            <li>Legal authorities, if required by law</li>
          </ul>
        </li>
        <li>
          <strong>Data Security</strong>
          <p>
            We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure.
          </p>
        </li>
        <li>
          <strong>Your Rights</strong>
          <ul>
            <li>Access or update your personal information</li>
            <li>Request deletion of your account and data</li>
            <li>Opt-out of promotional emails at any time</li>
          </ul>
        </li>
        <li>
          <strong>Children’s Privacy</strong>
          <p>
            Modamart does not knowingly collect data from children under 13. If we become aware of this, we will delete it promptly.
          </p>
        </li>
        <li>
          <strong>Changes to This Policy</strong>
          <p>
            We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.
          </p>
        </li>
        <li>
          <strong>Contact Us</strong>
          <p>
            For questions or concerns regarding your data, contact us at:
            <br />
            📧 <strong>Email:</strong> support@modamart.com
            <br />
            📍 <strong>Address:</strong> [Insert company address if applicable]
          </p>
        </li>
      </ol>
    </div>
  );
}

export default PrivacyPolicy;