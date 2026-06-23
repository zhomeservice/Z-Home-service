import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  const [category, setCategory] = useState('all')

  const images = {
    oven: ['oven-1.jpg', 'oven-2.jpg', 'oven-3.jpg', 'oven-4.jpg', 'oven-5.jpg'],
    carpet: ['carpet-1.jpg', 'carpet-2.jpg', 'carpet-3.jpg'],
    eot: ['eot-1.jpg', 'eot-2.jpg', 'eot-3.jpg', 'eot-4.jpg', 'eot-5.jpg', 'eot-6.jpg', 'eot-7.jpg', 'eot-8.jpg', 'eot-9.jpg', 'eot-10.jpg', 'eot-11.jpg', 'eot-12.jpg']
  }

  const getImages = () => {
    if (category === 'all') {
      return [
        ...images.oven.map(img => ({ src: `/images/oven/${img}`, category: 'oven' })),
        ...images.carpet.map(img => ({ src: `/images/carpet/${img}`, category: 'carpet' })),
        ...images.eot.map(img => ({ src: `/images/eot/${img}`, category: 'eot' }))
      ]
    }
    return images[category as keyof typeof images].map(img => ({ 
      src: `/images/${category}/${img}`, 
      category 
    }))
  }

  const filteredImages = getImages()

  return (
    <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1A2A4A' }}>Our Work Gallery</h1>
      <p style={{ fontSize: '1.1rem', color: '#555' }}>See the transformation for yourself</p>

      {/* Filter Buttons */}
      <div style={{ display: 'flex', gap: '10px', margin: '30px 0', flexWrap: 'wrap' }}>
        {['all', 'oven', 'carpet', 'eot'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              background: category === cat ? '#C9A94E' : '#1A2A4A',
              color: category === cat ? '#1A2A4A' : 'white',
              border: 'none',
              padding: '10px 25px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              textTransform: 'capitalize'
            }}
          >
            {cat === 'all' ? 'All' : cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
        {filteredImages.map((img, index) => (
          <img 
            key={index}
            src={img.src}
            alt={`Gallery ${index + 1}`}
            style={{ 
              width: '100%', 
              height: '280px', 
              objectFit: 'cover', 
              borderRadius: '10px',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            onClick={() => window.open(img.src, '_blank')}
          />
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: '#1A2A4A', color: 'white', padding: '30px', borderRadius: '10px', textAlign: 'center', marginTop: '40px' }}>
        <p style={{ fontSize: '1.3rem', margin: 0 }}>Ready to transform your property?</p>
        <a href="/contact" style={{ display: 'inline-block', background: '#C9A94E', color: '#1A2A4A', padding: '12px 35px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', marginTop: '10px' }}>
          Contact Us Today
        </a>
      </div>
    </div>
  )
}
