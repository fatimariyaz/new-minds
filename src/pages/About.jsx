function About() {
  return (
    <div className="page">

      <section className="about-hero">
        <p className="small-heading">ABOUT NEWMINDS</p>

        <h1>
          Growing curious,
          <span> confident minds.</span>
        </h1>

        <p>
          NewMinds is an educational platform created to make
          learning more engaging, accessible and meaningful for
          children, teachers, parents and schools.
        </p>
      </section>

      <section className="about-content">

        <div className="about-card">
          <div className="about-icon">🌱</div>
          <h2>Our Mission</h2>
          <p>
            We want to create learning experiences that encourage
            curiosity, creativity and confidence.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">💡</div>
          <h2>Our Approach</h2>
          <p>
            We combine educational resources, technology,
            interactive activities and teacher support to make
            learning more meaningful.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">❤️</div>
          <h2>Our Values</h2>
          <p>
            We believe learning should be welcoming, enjoyable,
            inclusive and centred around every child's potential.
          </p>
        </div>

      </section>

    </div>
  );
}

export default About;