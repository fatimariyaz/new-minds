function Writing() {
  return (
    <div className="page">
      <section className="page-hero writing-page">
        <p className="small-heading">WRITING</p>

        <h1>
          Your ideas deserve
          <span> to be heard.</span>
        </h1>

        <p>
          Creative activities that help children express
          themselves through writing.
        </p>
      </section>

      <section className="learning-section">
        <h2>Writing Activities</h2>

        <div className="activity-grid">

          <div className="activity-card">
            <div className="activity-icon">✏️</div>
            <h3>Creative Writing</h3>
            <p>
              Turn your imagination into stories.
            </p>
          </div>

          <div className="activity-card">
            <div className="activity-icon">📝</div>
            <h3>Sentence Builder</h3>
            <p>
              Learn how to build clear and interesting sentences.
            </p>
          </div>

          <div className="activity-card">
            <div className="activity-icon">🌟</div>
            <h3>Story Starters</h3>
            <p>
              Get fun ideas to start your next story.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Writing;