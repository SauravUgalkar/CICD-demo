import { useState } from 'react'
import './App.css'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?auto=format&fit=crop&w=400&q=80',
    alt: 'Organic turmeric powder bowl',
  },
  {
    src: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=400&q=80',
    alt: 'Fresh turmeric roots closeup',
  },
  {
    src: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1611250188496-e966043a0629?auto=format&fit=crop&w=400&q=80',
    alt: 'Turmeric capsules in wooden bowl',
  },
  {
    src: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80',
    alt: 'Turmeric farm harvest scene',
  },
]

function App() {
  const [qty, setQty] = useState(1)
  const [cartCount, setCartCount] = useState(0)
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="page">
      <header className="site-header">
        <nav className="container nav-row">
          <a className="brand" href="#top">
            Haridra Agro And Exports
          </a>
          <ul className="nav-links">
            <li><a href="#top">Home</a></li>
            <li><a href="#product">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#reviews">Blog</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
          <button className="cart-btn" aria-label="View cart">
            <span>Cart</span>
            <span className="cart-count">{cartCount}</span>
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy fade-up">
              <span className="pill">Farm to Shelf Purity</span>
              <h1>Pure Organic Turmeric - Nature&apos;s Golden Gift</h1>
              <p>100% Natural | Lab Tested | Farm Fresh from India</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#product">Shop Now</a>
                <a className="btn btn-secondary" href="#about">Learn More</a>
              </div>
            </div>
            <div className="hero-image-wrap fade-up-delay">
              <img
                src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=1400&q=80"
                alt="Fresh turmeric roots and turmeric powder"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        <section id="product" className="section">
          <div className="container product-grid">
            <div className="gallery">
              <img
                className="main-image"
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
              />
              <div className="thumb-grid">
                {galleryImages.map((img, index) => (
                  <button
                    key={img.src}
                    className={index === activeImage ? 'thumb active' : 'thumb'}
                    onClick={() => setActiveImage(index)}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img src={img.thumb} alt={img.alt} />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-copy">
              <p className="tag">Premium Wellness Blend</p>
              <h2>Organic Turmeric Powder - 500g</h2>
              <p className="subcopy">Bundle option available: PureVedic Turmeric Capsules for daily convenience.</p>

              <div className="price-row">
                <span className="price">Rs 349</span>
                <span className="old-price">Rs 449</span>
                <span className="off-pill">22% OFF</span>
              </div>

              <p className="rating">4.8 ★ (238 reviews)</p>

              <div className="highlights">
                <article>
                  <h3>100% Organic</h3>
                  <p>No synthetic inputs used during cultivation.</p>
                </article>
                <article>
                  <h3>No Additives</h3>
                  <p>No colors, preservatives, or fillers.</p>
                </article>
                <article>
                  <h3>High Curcumin</h3>
                  <p>Standardized for potency and consistency.</p>
                </article>
                <article>
                  <h3>Maharashtra Farms</h3>
                  <p>Sourced directly from trusted growers.</p>
                </article>
              </div>

              <div className="qty-row">
                <span>Quantity:</span>
                <div className="qty-control">
                  <button onClick={() => setQty((v) => Math.max(1, v - 1))} aria-label="Decrease quantity">-</button>
                  <span>{qty}</span>
                  <button onClick={() => setQty((v) => v + 1)} aria-label="Increase quantity">+</button>
                </div>
              </div>

              <div className="action-row">
                <button className="btn btn-primary" onClick={() => setCartCount((c) => c + qty)}>Add to Cart</button>
                <button className="btn btn-buy">Buy Now</button>
              </div>

              <p className="shipping">Free shipping above Rs 499 | COD Available | 7-day replacement</p>
            </div>
          </div>
        </section>

        <section id="about" className="section section-soft">
          <div className="container">
            <div className="section-head">
              <h2>Why Choose Our Turmeric?</h2>
              <p>Crafted for families who value authentic wellness rooted in Ayurveda and supported by modern quality testing.</p>
            </div>
            <div className="benefits-grid">
              <article><h3>Anti-inflammatory</h3><p>Curcumin supports a balanced inflammatory response.</p></article>
              <article><h3>Immunity Booster</h3><p>Daily use helps build natural body resilience.</p></article>
              <article><h3>Skin Glow</h3><p>Traditional choice for clear, radiant skin support.</p></article>
              <article><h3>Digestive Comfort</h3><p>Supports gut health when used consistently.</p></article>
              <article><h3>Joint Support</h3><p>Helps maintain comfort for active lifestyles.</p></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <article className="card">
              <h2>Product Description</h2>
              <p>Golden Root Organic Turmeric Powder is made from carefully selected turmeric rhizomes grown in mineral-rich soil across Maharashtra. The roots are gently dried and stone-ground to preserve aroma, color, and active compounds. Every batch is screened for quality and purity, giving you a clean and dependable daily wellness ingredient.</p>
              <p>Use it in warm milk, tea, curries, or smoothies. For customers who prefer convenience, our PureVedic Turmeric Capsules deliver the same trusted source in easy-to-carry form.</p>
            </article>
            <article className="card">
              <h2>Ingredients & Specifications</h2>
              <table>
                <tbody>
                  <tr><th>Ingredient</th><td>100% Organic Turmeric Powder (Curcuma longa)</td></tr>
                  <tr><th>Net Weight</th><td>500g</td></tr>
                  <tr><th>Curcumin Content</th><td>Minimum 4.5%</td></tr>
                  <tr><th>Shelf Life</th><td>12 months from packaging</td></tr>
                  <tr><th>Storage</th><td>Store in a cool, dry place away from sunlight</td></tr>
                </tbody>
              </table>
            </article>
          </div>
        </section>

        <section id="reviews" className="section section-soft">
          <div className="container">
            <div className="section-head section-head-row">
              <h2>Customer Reviews</h2>
              <p>Rated 4.8/5 by 238 happy customers</p>
            </div>
            <div className="reviews-grid">
              <article className="review-card">
                <div className="review-user"><img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Riya M" /><div><strong>Riya M.</strong><span>Pune</span></div></div>
                <p className="stars">★★★★★</p>
                <p>Excellent aroma and color. I switched from regular brands and this tastes far more authentic.</p>
              </article>
              <article className="review-card">
                <div className="review-user"><img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Arjun K" /><div><strong>Arjun K.</strong><span>Mumbai</span></div></div>
                <p className="stars">★★★★★</p>
                <p>Using capsules before workouts and powder at night. Great quality and clean packaging.</p>
              </article>
              <article className="review-card">
                <div className="review-user"><img src="https://randomuser.me/api/portraits/women/42.jpg" alt="Neha S" /><div><strong>Neha S.</strong><span>Nashik</span></div></div>
                <p className="stars">★★★★☆</p>
                <p>Love the transparency and sourcing details. Delivery was quick and product feels premium.</p>
              </article>
              <article className="review-card">
                <div className="review-user"><img src="https://randomuser.me/api/portraits/men/18.jpg" alt="Vikram T" /><div><strong>Vikram T.</strong><span>Bengaluru</span></div></div>
                <p className="stars">★★★★★</p>
                <p>My parents use this in warm milk daily. Reliable quality and smooth online ordering experience.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <div className="container footer-grid">
          <div>
            <h2 className="footer-brand">Haridra Agro And Exports</h2>
            <p>PureVedic Turmeric for mindful everyday wellness.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#top">Home</a></li>
              <li><a href="#product">Shop</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#reviews">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Email: care@goldenroot.in</li>
              <li>Phone: +91 98765 43210</li>
              <li>Hours: 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
          <div>
            <h3>Payments & Trust</h3>
            <div className="badges">
              <span>UPI</span><span>Card</span><span>COD</span><span>SSL Secure</span><span>FSSAI Compliant</span>
            </div>
          </div>
        </div>
        <div className="container footer-note">
          <p>Copyright 2026 Golden Root. All rights reserved.</p>
          <p>Crafted with care in India.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
