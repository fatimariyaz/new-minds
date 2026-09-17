import { Link, useParams } from "react-router-dom";
import resources from "../data/resources";

function ResourceDetail() {
  const { id } = useParams();

  const resource = resources.find(
    (item) => item.id === Number(id)
  );

  if (!resource) {
    return (
      <div className="page">
        <section className="grade-hero">
          <p className="small-heading">RESOURCE NOT FOUND</p>

          <h1>
            We couldn't find
            <span> that resource.</span>
          </h1>

          <p>
            The resource may have been removed or the link
            may be incorrect.
          </p>

          <Link to="/resources">
            <button>Back to Resources →</button>
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="grade-hero">
        <p className="small-heading">
          {resource.subject.toUpperCase()} ·{" "}
          {resource.grade.toUpperCase()}
        </p>

        <h1>
          {resource.title}
        </h1>

        <p>{resource.description}</p>
      </section>

      <section className="grade-featured">
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "35px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              minHeight: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#d9f5ff",
              borderRadius: "25px",
              fontSize: "120px",
              boxShadow: "0 7px 0 #b9dceb",
            }}
          >
            {resource.icon}
          </div>

          <div
            style={{
              padding: "35px",
              background: "white",
              borderRadius: "25px",
              boxShadow: "0 7px 0 #e9dfca",
            }}
          >
            <p
              className="product-category"
              style={{ marginBottom: "12px" }}
            >
              {resource.subject.toUpperCase()} ·{" "}
              {resource.type.toUpperCase()}
            </p>

            <h2
              style={{
                marginBottom: "18px",
                color: "#25324a",
              }}
            >
              {resource.title}
            </h2>

            <p
              style={{
                color: "#66758a",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              {resource.description}
            </p>

            <div
              style={{
                marginBottom: "25px",
                padding: "18px",
                background: "#fffaf0",
                borderRadius: "15px",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  color: "#25324a",
                  fontWeight: "800",
                }}
              >
                Resource details
              </p>

              <p
                style={{
                  margin: "5px 0",
                  color: "#66758a",
                }}
              >
                Grade: {resource.grade}
              </p>

              <p
                style={{
                  margin: "5px 0",
                  color: "#66758a",
                }}
              >
                Subject: {resource.subject}
              </p>

              <p
                style={{
                  margin: "5px 0",
                  color: "#66758a",
                }}
              >
                Type: {resource.type}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "15px",
              }}
            >
              <strong
                style={{
                  fontSize: "24px",
                  color: "#45a568",
                }}
              >
                {resource.price === 0
                  ? "Free"
                  : "AED " + resource.price}
              </strong>

              <button
                style={{
                  border: "none",
                  padding: "14px 22px",
                  borderRadius: "13px",
                  background: "#f26b5e",
                  color: "white",
                  fontFamily: "inherit",
                  fontSize: "15px",
                  fontWeight: "800",
                  cursor: "pointer",
                }}
              >
                {resource.price === 0
                  ? "Download Resource"
                  : "Buy Resource"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "0 7% 90px",
          background: "#fffaf0",
          textAlign: "center",
        }}
      >
        <Link to="/resources">
          <button
            style={{
              border: "none",
              padding: "14px 22px",
              borderRadius: "13px",
              background: "#25324a",
              color: "white",
              fontFamily: "inherit",
              fontSize: "15px",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            ← Back to Resources
          </button>
        </Link>
      </section>
    </div>
  );
}

export default ResourceDetail;