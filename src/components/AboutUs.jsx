function AboutUs() {
  return (
    <section className="about-us" aria-labelledby="about-us-title">
      <div className="about-us-container">
        <div>
          <p className="section-eyebrow">About Paradise Nursery</p>
          <h2 id="about-us-title">Plants that make every room feel alive</h2>
        </div>
        <div className="about-us-grid">
          <article className="info-card">
            <h3>Who we are</h3>
            <p>
              Paradise Nursery is an online plant shop focused on high-quality indoor plants
              that help people create healthier and more vibrant living spaces.
            </p>
          </article>
          <article className="info-card">
            <h3>Mission and services</h3>
            <p>
              Our mission is to make plant care simple and enjoyable by offering curated house
              plants, practical care guidance, and a smooth shopping experience from discovery
              to checkout.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
