function AboutUs() {
  return (
    <section className="about-us" aria-labelledby="about-us-title">
      <div>
        <p className="section-eyebrow">Why Paradise Nursery</p>
        <h2 id="about-us-title">Plants that make every room feel alive</h2>
      </div>
      <div className="about-us-grid">
        <article className="info-card">
          <h3>Our company</h3>
          <p>
            Paradise Nursery curates indoor plants chosen for beauty, resilience, and easy
            care, helping plant lovers create calm and vibrant spaces at home.
          </p>
        </article>
        <article className="info-card">
          <h3>What we offer</h3>
          <p>
            We provide healthy plants, styling inspiration, and simple care guidance so every
            customer can confidently grow their own indoor garden.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutUs;
