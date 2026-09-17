function Reading() {
  return (
    <div className="page">
      <section className="page-hero reading-page">
        <p className="small-heading">READING</p>

        <h1>
          Stories make
          <span> learning magical.</span>
        </h1>

        <p>
          Build reading confidence through stories,
          activities and fun comprehension exercises.
        </p>
      </section>

      <section className="learning-section">
        <h2>Reading Activities</h2>

        <div className="activity-grid">

          <div className="activity-card">
            <div className="activity-icon">📖</div>
            <h3>Story Time</h3>
            <p>
              Explore fun stories and discover new worlds.
            </p>
          </div>

          <div className="activity-card">
            <div className="activity-icon">🔎</div>
            <h3>Find the Answer</h3>
            <p>
              Test your understanding of what you read.
            </p>
          </div>

          <div className="activity-card">
            <div className="activity-icon">💭</div>
            <h3>Think & Discuss</h3>
            <p>
              Share ideas and think about the story.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Reading;