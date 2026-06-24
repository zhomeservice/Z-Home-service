import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/services/$slug')({
  component: ServiceDetail,
})

function ServiceDetail() {
  const { slug } = useParams({ from: '/services/$slug' })

  const services = {
    'oven-cleaning': {
      title: 'Oven Cleaning',
      description: 'Professional oven cleaning to restore your appliance to like-new condition. We strip, soak, and scrub every component.',
      sliderBefore: '/images/oven/oven-before.jpg',
      sliderAfter: '/images/oven/oven-after.jpg',
      gallery: ['oven-1.jpg', 'oven-2.jpg', 'oven-3.jpg', 'oven-4.jpg', 'oven-5.jpg'],
      folder: 'oven'
    },
    'carpet-upholstery-cleaning': {
      title: 'Carpet & Upholstery Cleaning',
      description: 'Deep steam cleaning for fresh, hygienic carpets and upholstery. Removes 99% of bacteria and allergens.',
      sliderBefore: '/images/carpet/carpet-before.jpg',
      sliderAfter: '/images/carpet/carpet-after.jpg',
      gallery: ['carpet-1.jpg', 'carpet-2.jpg', 'carpet-3.jpg'],
      folder: 'carpet'
    },
    'end-of-tenancy-cleaning': {
      title: 'End of Tenancy Cleaning',
      description: 'Meticulous deep cleaning to secure your full deposit return. We follow TDS (Tenancy Deposit Scheme) standards.',
      sliderBefore: '/images/eot/eot-kitchen-before.jpg',
      sliderAfter: '/images/eot/eot-kitchen-after.jpg',
      gallery: ['eot-1.jpg', 'eot-2.jpg', 'eot-3.jpg', 'eot-4.jpg', 'eot-5.jpg', 'eot-6.jpg', 'eot-7.jpg', 'eot-8.jpg', 'eot-9.jpg', 'eot-10.jpg', 'eot-11.jpg', 'eot-12.jpg'],
      folder: 'eot',
      extraSliders: [
        { before: '/images/eot/eot-kitchen2-before.jpg', after: '/images/eot/eot-kitchen2-after.jpg' },
        { before: '/images/eot/eot-carpet-before.jpg', after: '/images/eot/eot-carpet-after.jpg' },
        { before: '/images/eot/eot-bathroom-before.jpg', after: '/images/eot/eot-bathroom-after.jpg' }
      ]
    }
  }

  const service = services[slug as keyof typeof services]

  if (!service) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Service Not Found</h1>
        <p>The service you're looking for doesn't exist.</p>
        <a href="/" style={{ color: '#C9A94E' }}>Go Home</a>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1A2A4A' }}>{service.title}</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>{service.description}</p>

      {/* BEFORE & AFTER SLIDER */}
      <h2 style={{ fontSize: '1.8rem', color: '#1A2A4A', marginTop: '40px' }}>Before & After</h2>
      <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
        <div style={{ flex: 1 }}>
          <img 
            src={service.sliderBefore} 
            alt="Before cleaning" 
            style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
          />
          <p style={{ textAlign: 'center', color: '#999' }}>Before</p>
        </div>
        <div style={{ flex: 1 }}>
          <img 
            src={service.sliderAfter} 
            alt="After cleaning" 
            style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
          />
          <p style={{ textAlign: 'center', color: '#999' }}>After</p>
        </div>
      </div>

      {/* EXTRA SLIDERS (EOT only) */}
      {service.extraSliders && (
        <>
          <h2 style={{ fontSize: '1.8rem', color: '#1A2A4A', marginTop: '40px' }}>More Transformations</h2>
          {service.extraSliders.map((slider, index) => (
            <div key={index} style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
              <div style={{ flex: 1 }}>
                <img src={slider.before} alt={`Before ${index + 1}`} style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                <p style={{ textAlign: 'center', color: '#999' }}>Before</p>
              </div>
              <div style={{ flex: 1 }}>
                <img src={slider.after} alt={`After ${index + 1}`} style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                <p style={{ textAlign: 'center', color: '#999' }}>After</p>
              </div>
            </div>
          ))}
        </>
      )}

      {/* GALLERY */}
      <h2 style={{ fontSize: '1.8rem', color: '#1A2A4A', marginTop: '40px' }}>Our Work Gallery</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', margin: '20px 0' }}>
        {service.gallery.map((img, index) => (
          <img 
            key={index}
            src={`/images/${service.folder}/${img}`}
            alt={`${service.title} ${index + 1}`}
            style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px', transition: 'transform 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: '#1A2A4A', color: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ fontSize: '2rem', margin: 0 }}>Ready to Book?</h2>
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Call us today for a free quote</p>
        <a href="tel:07544487000" style={{ display: 'inline-block', background: '#C9A94E', color: '#1A2A4A', padding: '15px 40px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '15px' }}>
          📞 07544487000
        </a>
      </div>
    </div>
  )
}
