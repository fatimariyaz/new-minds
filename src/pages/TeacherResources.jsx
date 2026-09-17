function TeacherResources() {
  return (
    <div className="page">
      <section className="page-hero teacher-page">
        <p className="small-heading">TEACHER RESOURCES</p>

        <h1>
          Supporting
          <span> amazing teachers.</span>
        </h1>

        <p>
          Practical resources, classroom ideas and learning
          materials to make teaching easier and more engaging.
        </p>
      </section>

      <section className="learning-section">
        <h2>Teacher Resources</h2>

        <div className="activity-grid">

          <div className="activity-card">
            <div className="activity-icon">📋</div>
            <h3>Lesson Resources</h3>
            <p>
              Ready-to-use materials for your classroom.
            </p>
          </div>

          <div className="activity-card">
            <div className="activity-icon">🎨</div>
            <h3>Classroom Activities</h3>
            <p>
              Creative ideas to keep students involved.
            </p>
          </div>

          <div className="activity-card">
            <div className="activity-icon">💡</div>
            <h3>Teaching Ideas</h3>
            <p>
              Strategies and ideas for better learning.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default TeacherResources;