import { Link } from "react-router-dom";
import { useState } from "react";
import resources from "../data/resources";

function levenshteinDistance(a, b) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

function wordMatches(word, text) {
  if (!word || !text) {
    return false;
  }

  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  if (words.some((textWord) => textWord.includes(word))) {
    return true;
  }

  const allowedDistance =
    word.length <= 4 ? 1 : word.length <= 7 ? 2 : 3;

  return words.some((textWord) => {
    return (
      levenshteinDistance(word, textWord) <=
      allowedDistance
    );
  });
}

function fuzzySearch(search, resource) {
  if (!search.trim()) {
    return true;
  }

  const searchWords = search
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const searchableText = [
    resource.title,
    resource.description,
    resource.subject,
    resource.type,
    resource.grade,
  ];

  return searchWords.every((searchWord) =>
    searchableText.some((field) =>
      wordMatches(searchWord, field)
    )
  );
}

function Resources() {
  const grades = [
    "Pre-K",
    "KG1",
    "KG2",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7+",
  ];

  const subjects = [
    { name: "English", icon: "📘" },
    { name: "Phonics", icon: "🔤" },
    { name: "Reading", icon: "📖" },
    { name: "Writing", icon: "✏️" },
    { name: "Math", icon: "🔢" },
    { name: "Science", icon: "🔬" },
  ];

  const resourceTypes = [
    { name: "Worksheet", label: "Worksheets", icon: "📄" },
    { name: "Activity", label: "Activities", icon: "🎨" },
    { name: "Lesson Plan", label: "Lesson Plans", icon: "📋" },
    { name: "Game", label: "Games", icon: "🎮" },
    { name: "Flashcards", label: "Flashcards", icon: "🃏" },
    {
      name: "Teacher Guide",
      label: "Teacher Guides",
      icon: "👩‍🏫",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("All");
  const [selectedSubject, setSelectedSubject] =
    useState("All");
  const [selectedType, setSelectedType] =
    useState("All");

  const filteredResources = resources.filter((resource) => {
    if (!resource.published) {
      return false;
    }

    const matchesSearch = fuzzySearch(
      searchTerm,
      resource
    );

    const matchesGrade =
      selectedGrade === "All" ||
      resource.grade === selectedGrade;

    const matchesSubject =
      selectedSubject === "All" ||
      resource.subject === selectedSubject;

    const matchesType =
      selectedType === "All" ||
      resource.type === selectedType;

    return (
      matchesSearch &&
      matchesGrade &&
      matchesSubject &&
      matchesType
    );
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedGrade("All");
    setSelectedSubject("All");
    setSelectedType("All");
  };

  return (
    <div className="page">
      <section className="marketplace-hero">
        <div className="marketplace-hero-content">
          <p className="small-heading">NEWMinds RESOURCES</p>

          <h1>
            Find resources
            <span> that make learning easier.</span>
          </h1>

          <p>
            Discover engaging educational resources for
            children, teachers and classrooms.
          </p>

          <div className="resource-search">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Try: phonics, reading, Grade 1..."
            />
          </div>
        </div>
      </section>

      {searchTerm.trim() !== "" && (
        <section
          className="featured-section"
          style={{
            paddingTop: "45px",
            paddingBottom: "55px",
          }}
        >
          <div className="browse-heading">
            <p className="small-heading">SEARCH RESULTS</p>

            <h2>
              {filteredResources.length}{" "}
              {filteredResources.length === 1
                ? "resource"
                : "resources"}{" "}
              found.
            </h2>

            <p>
              Results for{" "}
              <strong>"{searchTerm}"</strong>
            </p>
          </div>

          {filteredResources.length === 0 ? (
            <div
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                padding: "45px 30px",
                textAlign: "center",
                background: "white",
                borderRadius: "24px",
                boxShadow: "0 7px 0 #e9dfca",
              }}
            >
              <div style={{ fontSize: "55px" }}>
                🔎
              </div>

              <h3
                style={{
                  margin: "15px 0 10px",
                  color: "#25324a",
                }}
              >
                No resources found
              </h3>

              <p style={{ color: "#66758a" }}>
                Try another word, subject or grade.
              </p>
            </div>
          ) : (
            <div className="resource-product-grid">
              {filteredResources.map((resource) => (
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
                      {resource.grade.toUpperCase()}
                    </p>

                    <h3>{resource.title}</h3>

                    <p>{resource.description}</p>

                    <div className="product-bottom">
                      <span>
                        {resource.price === 0
                          ? "Free"
                          : "AED " + resource.price}
                      </span>

                      <Link
                        to={`/resources/${resource.id}`}
                      >
                        <button>
                          View Resource
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <button
              onClick={clearFilters}
              style={{
                padding: "11px 20px",
                border: "none",
                borderRadius: "10px",
                background: "#25324a",
                color: "white",
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: "700",
              }}
            >
              Clear Search
            </button>
          </div>
        </section>
      )}

      <section className="browse-section">
        <div className="browse-heading">
          <p className="small-heading">BROWSE BY GRADE</p>

          <h2>Find resources for every learner.</h2>

          <p>
            Choose a grade level to find resources suited
            to your child's learning stage.
          </p>
        </div>

        <div className="grade-grid">
          <button
            className="grade-card"
            onClick={() => setSelectedGrade("All")}
          >
            All Grades
          </button>

          {grades.map((grade) => {
            if (grade === "Grade 1") {
              return (
                <Link
                  key={grade}
                  to="/resources/grade-1"
                  className="grade-card"
                >
                  {grade}
                </Link>
              );
            }

            return (
              <button
                key={grade}
                className="grade-card"
                onClick={() =>
                  setSelectedGrade(grade)
                }
              >
                {grade}
              </button>
            );
          })}
        </div>
      </section>

      <section className="browse-section">
        <div className="browse-heading">
          <p className="small-heading">
            BROWSE BY SUBJECT
          </p>

          <h2>Explore learning areas.</h2>
        </div>

        <div className="browse-card-grid">
          <button
            className="browse-card"
            onClick={() =>
              setSelectedSubject("All")
            }
          >
            <div className="browse-card-icon">
              ✨
            </div>

            <h3>All Subjects</h3>

            <span>Show all →</span>
          </button>

          {subjects.map((subject) => (
            <button
              key={subject.name}
              className="browse-card"
              onClick={() =>
                setSelectedSubject(subject.name)
              }
            >
              <div className="browse-card-icon">
                {subject.icon}
              </div>

              <h3>{subject.name}</h3>

              <span>Explore →</span>
            </button>
          ))}
        </div>
      </section>

      <section className="browse-section">
        <div className="browse-heading">
          <p className="small-heading">
            BROWSE BY RESOURCE TYPE
          </p>

          <h2>What are you looking for?</h2>
        </div>

        <div className="browse-card-grid">
          <button
            className="browse-card"
            onClick={() =>
              setSelectedType("All")
            }
          >
            <div className="browse-card-icon">
              ✨
            </div>

            <h3>All Types</h3>

            <span>Show all →</span>
          </button>

          {resourceTypes.map((type) => (
            <button
              key={type.name}
              className="browse-card"
              onClick={() =>
                setSelectedType(type.name)
              }
            >
              <div className="browse-card-icon">
                {type.icon}
              </div>

              <h3>{type.label}</h3>

              <span>Explore →</span>
            </button>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="browse-heading">
          <p className="small-heading">
            RESOURCE LIBRARY
          </p>

          <h2>
            {filteredResources.length}{" "}
            {filteredResources.length === 1
              ? "resource"
              : "resources"}{" "}
            found.
          </h2>

          <p>
            Browse the NewMinds library and find resources
            that fit your learning needs.
          </p>

          <button
            onClick={clearFilters}
            style={{
              marginTop: "18px",
              padding: "10px 18px",
              border: "none",
              borderRadius: "10px",
              background: "#25324a",
              color: "white",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: "700",
            }}
          >
            Clear Filters
          </button>
        </div>

        {filteredResources.length === 0 ? (
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              padding: "45px 30px",
              textAlign: "center",
              background: "white",
              borderRadius: "24px",
              boxShadow: "0 7px 0 #e9dfca",
            }}
          >
            <div style={{ fontSize: "55px" }}>
              🔎
            </div>

            <h3
              style={{
                margin: "15px 0 10px",
                color: "#25324a",
              }}
            >
              No resources found
            </h3>

            <p style={{ color: "#66758a" }}>
              Try a different search or clear your
              filters.
            </p>
          </div>
        ) : (
          <div className="resource-product-grid">
            {filteredResources.map((resource) => (
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
                    {resource.grade.toUpperCase()}
                  </p>

                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <div className="product-bottom">
                    <span>
                      {resource.price === 0
                        ? "Free"
                        : "AED " + resource.price}
                    </span>

                    <Link
                      to={`/resources/${resource.id}`}
                    >
                      <button>
                        View Resource
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="teacher-resource-banner">
        <div>
          <p className="small-heading">FOR TEACHERS</p>

          <h2>
            Make your classroom
            <span> easier to manage.</span>
          </h2>

          <p>
            Discover lesson materials, classroom
            activities, teaching ideas and practical
            resources created with educators in mind.
          </p>

          <Link to="/resources/teacher-resources">
            <button>
              Explore Teacher Resources →
            </button>
          </Link>
        </div>

        <div className="teacher-banner-icon">
          👩‍🏫
        </div>
      </section>
    </div>
  );
}

export default Resources;