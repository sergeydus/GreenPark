import Logo from './components/Logo'
import HeroBackground from './components/HeroBackground'
import { EcoMaterialsIcon, SolarIcon, WaterIcon, TreeIcon, SmartTechIcon, EVChargingIcon } from './components/FeatureIcons'
import { FacebookIcon, LinkedInIcon, XIcon, InstagramIcon } from './components/SocialIcons'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <HeroBackground />
        <nav className="nav">
          <div className="logo">
            <Logo width={50} height={50} />
            <div className="logo-text">
              <span className="logo-text-main">GREENPARK</span>
              <span className="logo-text-sub">ECO PARKING</span>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1>Nature-Friendly Parking Solutions</h1>
          <p className="hero-subtitle">
            Sustainable parking technology that harmonizes urban development with environmental conservation
          </p>
          <button className="cta-button">Discover More</button>
        </div>

        <div className="scroll-indicator">
          <span style={{ fontSize: '2rem' }}>↓</span>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <h2 className="section-title">Our Green Approach</h2>
        <p className="section-subtitle">
          Innovative parking solutions designed with nature in mind
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <EcoMaterialsIcon className="icon-svg" />
            </div>
            <h3>Eco-Friendly Materials</h3>
            <p>
              Using sustainable, permeable materials that allow water absorption 
              and support vegetation growth around parking areas.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <SolarIcon className="icon-svg" />
            </div>
            <h3>Solar Integration</h3>
            <p>
              Solar-powered lighting and charging stations reduce carbon footprint 
              while providing modern amenities.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <WaterIcon className="icon-svg" />
            </div>
            <h3>Water Management</h3>
            <p>
              Smart drainage systems collect and recycle rainwater for irrigation 
              and maintaining green spaces.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <TreeIcon className="icon-svg" />
            </div>
            <h3>Green Spaces</h3>
            <p>
              Integrated landscaping with native plants creates natural shade 
              and improves air quality.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <SmartTechIcon className="icon-svg" />
            </div>
            <h3>Smart Technology</h3>
            <p>
              IoT-enabled sensors optimize space usage and reduce unnecessary 
              vehicle circulation.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <EVChargingIcon className="icon-svg" />
            </div>
            <h3>EV Charging</h3>
            <p>
              Electric vehicle charging infrastructure supports the transition 
              to sustainable transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section solutions-section">
        <h2 className="section-title">Best Solutions</h2>
        <p className="section-subtitle">
          Tailored parking solutions for every environment
        </p>

        <div className="solutions-grid">
          <div className="solution-card">
            <div className="solution-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" alt="Corporate Campus Parking" />
            </div>
            <div className="solution-content">
              <h3>Corporate Campuses</h3>
              <p>
                Transform your workplace parking into a green oasis that enhances 
                employee well-being and company image.
              </p>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000" alt="Hotel & Resort Parking" />
            </div>
            <div className="solution-content">
              <h3>Hotels & Resorts</h3>
              <p>
                Create memorable first impressions with beautiful, sustainable 
                parking areas that blend with your landscape.
              </p>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000" alt="Public Facilities Parking" />
            </div>
            <div className="solution-content">
              <h3>Public Facilities</h3>
              <p>
                Durable, low-maintenance solutions for municipal parking that 
                serve communities sustainably.
              </p>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>
          </div>

          <div className="solution-card">
            <div className="solution-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000" alt="Retail Center Parking" />
            </div>
            <div className="solution-content">
              <h3>Retail Centers</h3>
              <p>
                Attractive parking facilities that enhance the shopping experience 
                while reducing environmental impact.
              </p>
              <a href="#" className="learn-more">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <h2 className="section-title">Impact by Numbers</h2>
        <p className="section-subtitle">
          Making a difference, one parking space at a time
        </p>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3>85%</h3>
            <p>Water Recirculation</p>
          </div>
          <div className="stat-card">
            <h3>300K+</h3>
            <p>Trees Preserved</p>
          </div>
          <div className="stat-card">
            <h3>40%</h3>
            <p>CO₂ Reduction</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Real results from real partners
        </p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">&ldquo;</div>
            <p className="testimonial-text">
              &ldquo;GreenPark transformed our parking lot into a beautiful green space. 
              Our employees love it, and we&apos;ve seen a significant reduction in 
              our environmental footprint.&rdquo;
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200" alt="Sarah Mitchell" />
              </div>
              <div className="author-info">
                <h4>Sarah Mitchell</h4>
                <p>Facilities Director, TechCorp</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">&ldquo;</div>
            <p className="testimonial-text">
              &ldquo;The solar-powered charging stations have been a game-changer for 
              our resort. Guests appreciate the eco-friendly amenities, and 
              our energy costs have dropped considerably.&rdquo;
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" alt="James Kim" />
              </div>
              <div className="author-info">
                <h4>James Kim</h4>
                <p>General Manager, Oceanview Resort</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">&ldquo;</div>
            <p className="testimonial-text">
              &ldquo;From design to implementation, GreenPark exceeded our expectations. 
              The permeable surfaces handle stormwater beautifully, and the 
              maintenance is minimal.&rdquo;
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200" alt="Maria Rodriguez" />
              </div>
              <div className="author-info">
                <h4>Maria Rodriguez</h4>
                <p>City Planner, Greenville</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Ready to Go Green?</h2>
        <p>
          Let&apos;s create a sustainable parking solution for your property
        </p>
        <button className="contact-button">Contact Us</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Logo width={35} height={35} />
              <div>
                <h3 style={{ letterSpacing: '0.05em', fontWeight: 800 }}>GREENPARK</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.7, letterSpacing: '0.1em', marginTop: '2px' }}>ECO PARKING</p>
              </div>
            </div>
            <p style={{ opacity: 0.8 }}>
              Leading the way in sustainable parking solutions since 2020.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className="social-link" aria-label="X">
                <XIcon />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Solutions</h3>
            <ul>
              <li><a href="#">Corporate</a></li>
              <li><a href="#">Hospitality</a></li>
              <li><a href="#">Public Sector</a></li>
              <li><a href="#">Retail</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Process</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:info@greenpark.com">info@greenpark.com</a></li>
              <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
              <li>123 Green Street</li>
              <li>Eco City, EC 12345</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 GreenPark. All rights reserved. | {' '}
            <a href="/privacy">Privacy Policy</a> | {' '}
            <a href="/terms">Terms of Service</a>
          </p>
        </div>
      </footer>
    </main>
  )
}
