import Logo from '../components/Logo'

export default function PrivacyPolicy() {
  return (
    <main>
      <nav className="nav" style={{ background: 'var(--primary-green)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <a href="/" style={{ textDecoration: 'none', color: 'var(--white)' }}>
          <div className="logo">
            <Logo width={50} height={50} />
            <div className="logo-text">
              <span className="logo-text-main">GREENPARK</span>
              <span className="logo-text-sub">ECO PARKING</span>
            </div>
          </div>
        </a>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 5%' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-green)' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-light)', marginBottom: '3rem' }}>Last updated: January 7, 2026</p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>Introduction</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            At GreenPark, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
            or use our eco-friendly parking solutions.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>Information We Collect</h2>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-green)' }}>Personal Information</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            We may collect personal information that you voluntarily provide to us, including:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <li>Name and contact information (email address, phone number)</li>
            <li>Company name and business information</li>
            <li>Payment and billing information</li>
            <li>Vehicle information for parking services</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-green)' }}>Automatically Collected Information</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            When you visit our website, we may automatically collect certain information about your device, including:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <li>IP address and browser type</li>
            <li>Operating system and device information</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>How We Use Your Information</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            We use the information we collect to:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <li>Provide, maintain, and improve our parking solutions and services</li>
            <li>Process transactions and send related information</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Send you technical notices, updates, and administrative messages</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Detect, prevent, and address technical issues and security threats</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>Data Security</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            We implement appropriate technical and organizational security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
            the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>Third-Party Services</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, 
            or assist us in analyzing how our services are used. These third parties have access to your personal information 
            only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>Your Rights</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <li>The right to access and receive a copy of your personal data</li>
            <li>The right to rectify or update inaccurate information</li>
            <li>The right to request deletion of your personal data</li>
            <li>The right to object to or restrict processing of your data</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>Contact Us</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <strong>Email:</strong> privacy@greenpark.com<br />
            <strong>Phone:</strong> +1 (234) 567-890<br />
            <strong>Address:</strong> 123 Green Street, Eco City, EC 12345
          </p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="/" style={{ 
            padding: '1rem 2rem', 
            background: 'var(--primary-green)', 
            color: 'var(--white)', 
            textDecoration: 'none', 
            borderRadius: '50px',
            display: 'inline-block',
            fontWeight: 600,
            transition: 'background 0.3s'
          }}>
            Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
