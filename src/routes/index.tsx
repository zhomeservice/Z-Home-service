import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section style={{ 
        background: 'linear-gradient(rgba(26,42,74,0.7), rgba(26,42,74,0.7)), url(/images/eot/eot-kitchen-after.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>Z HOME SERVICE</h1>
        <p style={{ fontSize: '1.5rem' }}>Professional Cleaning Services</p>
        <p style={{ fontSize: '1.2rem' }}>End of Tenancy • Oven • Carpet • After Builder • Window Cleaning</p>
        <div style={{ marginTop: '30px' }}>
          <a href="/contact" style={{ background: '#C9A94E', color: '#1A2A4A', padding: '15px 40px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', marginRight: '10px' }}>Get a Free Quote</a>
          <a href="/gallery" style={{ background: 'transparent', color: 'white', padding: '15px 40px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', border: '2px solid white' }}>View Our Work</a>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#1A2A4A', fontSize: '2.5rem' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '40px' }}>
          
          {/* End of Tenancy */}
          <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <img src="/images/eot/eot-kitchen-after.jpg" alt="End of Tenancy" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#1A2A4A' }}>End of Tenancy Cleaning</h3>
              <p>Meticulous deep cleaning to secure your deposit</p>
              <a href="/services/end-of-tenancy-cleaning" style={{ color: '#C9A94E', textDecoration: 'none', fontWeight: 'bold' }}>Learn More →</a>
            </div>
          </div>

          {/* Oven Cleaning */}
          <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <img src="/images/oven/oven-after.jpg" alt="Oven Cleaning" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#1A2A4A' }}>Oven Cleaning</h3>
              <p>Restore your oven to like-new condition</p>
              <a href="/services/oven-cleaning" style={{ color: '#C9A94E', textDecoration: 'none', fontWeight: 'bold' }}>Learn More →</a>
            </div>
          </div>

          {/* Carpet Cleaning */}
          <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <img src="/images/carpet/carpet-after.jpg" alt="Carpet Cleaning" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#1A2A4A' }}>Carpet & Upholstery</h3>
              <p>Deep steam cleaning for fresh, hygienic fabrics</p>
              <a href="/services/carpet-upholstery-cleaning" style={{ color: '#C9A94E', textDecoration: 'none', fontWeight: 'bold' }}>Learn More →</a>
            </div>
          </div>

        </div>
      </section>

      {/* BEFORE & AFTER SLIDER */}
      <section style={{ background: '#FBF9F6', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#1A2A4A', fontSize: '2.5rem' }}>See the Difference We Make</h2>
          <div style={{ display: 'flex', gap: '30px', marginTop: '40px' }}>
            <div style={{ flex: 1 }}>
              <img src="/images/eot/eot-kitchen-before.jpg" alt="Before" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
              <p style={{ textAlign: 'center', color: '#999' }}>Before</p>
            </div>
            <div style={{ flex: 1 }}>
              <img src="/images/eot/eot-kitchen-after.jpg" alt="After" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
              <p style={{ textAlign: 'center', color: '#999' }}>After</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#1A2A4A', fontSize: '2.5rem' }}>Why Choose Us</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginTop: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <h3>✅ Experienced Professionals</h3>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3>✅ Fully Insured & Vetted</h3>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3>✅ Eco-Friendly Products</h3>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h3>✅ 100% Satisfaction Guarantee</h3>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={{ background: '#C9A94E', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#1A2A4A', fontSize: '2.5rem', margin: 0 }}>Ready to Book?</h2>
        <p style={{ fontSize: '1.2rem', color: '#1A2A4A' }}>Get your free quote today</p>
        <div style={{ marginTop: '20px' }}>
          <a href="tel:07544487000" style={{ background: '#1A2A4A', color: 'white', padding: '15px 40px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', marginRight: '10px', display: 'inline-block' }}>
            📞 Call 07544487000
          </a>
          <a href="https://wa.me/447544487000?text=Hello! I'd like to book a cleaning service." target="_blank" style={{ background: '#25D366', color: 'white', padding: '15px 40px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
            💬 WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  )
}
