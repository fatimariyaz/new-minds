function Phonics() {
  return (
    <div className="page">
      <section className="page-hero phonics-page">
        <p className="small-heading">PHONICS</p>

        <h1>
          Let's learn our
          <span> sounds!</span>
        </h1>

        <p>
          Fun activities designed to help children recognise
          letters, sounds and simple words.
        </p>
      </section>

      <section className="learning-section">
        <h2>Phonics Activities</h2>

        <div className="activity-grid">
          <div className="activity-card">
            🔤
            <h3>Letter Sounds</h3>
            <p>Learn the sounds different letters make.</p>
          </div>

          <div className="activity-card">
            🧩
            <h3>Sound Matching</h3>
            <p>Match sounds with the correct letters.</p>
          </div>

          <div className="activity-card">
            🐝
            <h3>Build a Word</h3>
            <p>Put sounds together to create simple words.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Phonics;