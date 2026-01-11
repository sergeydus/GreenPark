import Logo from '../components/Logo'

export default function TermsOfService() {
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
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-green)' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-light)', marginBottom: '3rem' }}>Last updated: January 7, 2026</p>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>1. Agreement to Terms</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            By accessing or using GreenPark&apos;s services, website, or eco-friendly parking solutions, you agree to be bound 
            by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, 
            you are prohibited from using or accessing our services.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>2. Use of Services</h2>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-green)' }}>2.1 Permitted Use</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            You may use our services only for lawful purposes and in accordance with these Terms. You agree not to:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <li>Use our services in any way that violates applicable laws or regulations</li>
            <li>Engage in any conduct that restricts or inhibits anyone&apos;s use of our services</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Use our services for fraudulent or malicious purposes</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-green)' }}>2.2 Account Responsibilities</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            If you create an account with us, you are responsible for maintaining the confidentiality of your account 
            credentials and for all activities that occur under your account.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>3. Parking Services</h2>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-green)' }}>3.1 Service Availability</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            GreenPark provides eco-friendly parking solutions and related services. We strive to ensure service availability 
            but do not guarantee uninterrupted access. Services may be subject to periodic maintenance or updates.
          </p>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--primary-green)' }}>3.2 Vehicle Safety</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            While we implement security measures for parking facilities, vehicle owners are responsible for securing their 
            vehicles and removing valuables. GreenPark is not liable for damage, theft, or loss of vehicles or contents 
            unless caused by our negligence.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>4. Payment Terms</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            All fees for our services must be paid in accordance with the pricing and payment terms presented at the time 
            of service. Prices are subject to change with notice. Payment obligations are non-cancelable, and fees paid 
            are non-refundable except as required by law or as explicitly stated in our refund policy.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>5. Intellectual Property</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            All content, features, and functionality of our services, including but not limited to text, graphics, logos, 
            icons, images, and software, are the exclusive property of GreenPark and are protected by copyright, trademark, 
            and other intellectual property laws.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>6. Limitation of Liability</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            To the fullest extent permitted by law, GreenPark shall not be liable for any indirect, incidental, special, 
            consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
            or any loss of data, use, goodwill, or other intangible losses resulting from:
          </p>
          <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <li>Your access to or use of (or inability to access or use) our services</li>
            <li>Any conduct or content of any third party on the services</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>7. Environmental Commitment</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            GreenPark is committed to sustainable and environmentally responsible practices. By using our services, you 
            support our mission to reduce environmental impact through innovative parking solutions. We encourage all users 
            to follow eco-friendly practices and respect our green spaces.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>8. Modifications to Terms</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide 
            at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be 
            determined at our sole discretion.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>9. Governing Law</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 
            GreenPark operates, without regard to its conflict of law provisions.
          </p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary-green)' }}>10. Contact Information</h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-dark)' }}>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p style={{ lineHeight: '1.8', color: 'var(--text-dark)' }}>
            <strong>Email:</strong> legal@greenpark.com<br />
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
