import { Link } from "react-router-dom";
import resources from "../data/resources";

function Grade1() {
  const subjects = [
    {
      name: "Phonics",
      icon: "🔤",
      description: "Sounds, letters and early word-building.",
    },
    {
      name: "Reading",
      icon: "📖",
      description: "Stories, comprehension and reading practice.",
    },
    {
      name: "Writing",
      icon: "✏️",
      description: "Sentence building and creative writing.",
    },
    {
      name: "Math",
      icon: "🔢",
      description: "Numbers, counting and basic maths skills.",
    },
    {
      name: "Science",
      icon: "🔬",
      description: "Explore the world through simple science.",
    },
    {
      name: "Activities",
      icon: "🎨",
      description: "Fun activities for learning and practice.",
    },
  ];

  const grade1Resources = resources.filter(
    (resource) =>
      resource.grade === "Grade 1" &&
      resource.published === true
  );

  return (
    <div className="page">
      <section className="grade-hero">
        <p className="small-heading">GRADE 1 RESOURCES</p>

        <h1>
          Learning made
          <span> exciting.</span>
        </h1>

        <p>
          Explore engaging resources designed to support
          Grade 1 learners as they build confidence and
          develop important skills.
        </p>
      </section>

      <section className="grade-subjects">
        <div className="browse-heading">
          <p className="small-heading">EXPLORE GRADE 1</p>

          <h2>What would you like to learn?</h2>

          <p>
            Choose a subject or learning area to explore
            resources.
          </p>
        </div>

        <div className="grade-subject-grid">
          {subjects.map((subject) => (
            <Link
              key={subject.name}
              to="/resources"
              className="grade-subject-card"
            >
              <div className="grade-subject-icon">
                {subject.icon}
              </div>

              <h3>{subject.name}</h3>

              <p>{subject.description}</p>

              <span>Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grade-featured">
        <div className="browse-heading">
          <p className="small-heading">GRADE 1 RESOURCES</p>

          <h2>Resources for Grade 1</h2>

          <p>
            Explore worksheets, activities and learning
            materials created for Grade 1 learners.
          </p>
        </div>

        <div className="resource-product-grid">
          {grade1Resources.map((resource) => (
            <div
              className="resource-product"
              key={resource.id}
            >
              <div className="product-preview">
                {resource.icon}
              </div>

              <div className="product-info">
                <p className="product-category">
                  {resource.subject.toUpperCase()} ·{" "}
                  {resource.type.toUpperCase()}
                </p>

                <h3>{resource.title}</h3>

                <p>{resource.description}</p>

                <div className="product-bottom">
                  <span>
                    {resource.price === 0
                      ? "Free"
                      : "AED " + resource.price}
                  </span>

                  <button>View Resource</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Grade1;