import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Resources from "./pages/Resources";
import Grade1 from "./pages/Grade1";
import ResourceDetail from "./pages/ResourceDetail";
import Phonics from "./pages/Phonics";
import Reading from "./pages/Reading";
import Writing from "./pages/Writing";
import TeacherResources from "./pages/TeacherResources";
import TeacherAcademy from "./pages/TeacherAcademy";
import LiveLearning from "./pages/LiveLearning";
import AIGames from "./pages/AIGames";
import Schools from "./pages/Schools";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Home() {
  return (
    <div className="website">
      <section className="hero">
        <div className="hero-text">
          <p className="small-heading">WELCOME TO NEWMINDS</p>
          <h1>
            Helping young minds
            <br />
            <span>learn, explore & grow.</span>
          </h1>

          <p className="hero-description">
            A learning platform where children build confidence,
            teachers discover useful tools, and schools find
            meaningful ways to support learning.
          </p>

          <div className="hero-buttons">
            <Link to="/resources">
              <button>Explore Resources</button>
            </Link>

            <Link to="/contact">
              <button className="secondary-button">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="circle">🧠</div>
          <h2>Learning starts with curiosity.</h2>
          <p>
            Discover resources, activities and learning
            experiences designed for growing minds.
          </p>
        </div>
      </section>

      <section className="offers">
        <p className="small-heading">WHAT WE OFFER</p>
        <h2>Everything you need to make learning better.</h2>

        <div className="offer-grid">
          <Link to="/resources" className="offer-card">
            <div className="icon">📚</div>
            <h3>Learning Resources</h3>
            <p>
              Explore phonics, reading, writing and
              classroom resources created to support
              meaningful learning.
            </p>
            <span>Explore resources →</span>
          </Link>

          <Link to="/teacher-academy" className="offer-card">
            <div className="icon">🎓</div>
            <h3>Teacher Academy</h3>
            <p>
              Professional learning, teaching strategies
              and practical support for educators.
            </p>
            <span>For teachers →</span>
          </Link>

          <Link to="/ai-games" className="offer-card">
            <div className="icon">🎮</div>
            <h3>AI & Games</h3>
            <p>
              Interactive activities and technology-powered
              experiences that make learning engaging.
            </p>
            <span>Discover more →</span>
          </Link>

          <Link to="/schools" className="offer-card">
            <div className="icon">🏫</div>
            <h3>Schools</h3>
            <p>
              Educational solutions and support designed
              for schools and learning communities.
            </p>
            <span>For schools →</span>
          </Link>
        </div>
      </section>

      <section className="home-section learner-section">
        <div className="home-section-text">
          <p className="small-heading">FOR LEARNERS</p>
          <h2>Learning should feel like an adventure.</h2>
          <p>
            From learning sounds and building words to
            discovering stories and expressing ideas,
            NewMinds gives children opportunities to learn
            at their own pace.
          </p>
        </div>

        <div className="home-section-visual">📚</div>
      </section>

      <section className="home-section teacher-section">
        <div className="home-section-visual">👩‍🏫</div>

        <div className="home-section-text">
          <p className="small-heading">FOR TEACHERS</p>
          <h2>Helping teachers make learning meaningful.</h2>
          <p>
            Find practical resources, classroom activities
            and professional learning opportunities designed
            to support educators in their everyday teaching.
          </p>
        </div>
      </section>

      <section className="home-section school-section">
        <div className="home-section-text">
          <p className="small-heading">FOR SCHOOLS</p>
          <h2>Building stronger learning communities.</h2>
          <p>
            NewMinds aims to support schools with educational
            resources, learning solutions and opportunities
            that help students and teachers grow together.
          </p>
        </div>

        <div className="home-section-visual">🏫</div>
      </section>

      <section className="why-section">
        <p className="small-heading">WHY NEWMINDS?</p>
        <h2>Because every learner deserves the chance to grow.</h2>

        <div className="why-grid">
          <div className="why-card">
            <div>🌱</div>
            <h3>Learner-Centred</h3>
            <p>
              Learning experiences designed around
              curiosity, confidence and individual growth.
            </p>
          </div>

          <div className="why-card">
            <div>💡</div>
            <h3>Meaningful</h3>
            <p>
              Resources that connect learning with
              creativity, exploration and real understanding.
            </p>
          </div>

          <div className="why-card">
            <div>🤝</div>
            <h3>Community</h3>
            <p>
              Supporting children, teachers, parents
              and schools together.
            </p>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <p className="small-heading">READY TO EXPLORE?</p>

        <h2>
          Let's make learning
          <span> something to look forward to.</span>
        </h2>

        <p>
          Explore NewMinds and discover resources designed
          to help young minds learn, explore and grow.
        </p>

        <Link to="/resources">
          <button>Explore NewMinds →</button>
        </Link>
      </section>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        NewMinds
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/teacher-academy">Teacher Academy</Link>
        <Link to="/live-learning">Live Learning</Link>
        <Link to="/ai-games">AI & Games</Link>
        <Link to="/schools">Schools</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>NewMinds</h2>
          <p>Helping young minds learn, explore & grow.</p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/resources">Resources</Link>
          <Link to="/teacher-academy">Teacher Academy</Link>
          <Link to="/ai-games">AI & Games</Link>
          <Link to="/schools">Schools</Link>
        </div>

        <div className="footer-links">
          <h3>NewMinds</h3>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/live-learning">Live Learning</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Humera Bukht</p>
          <p>humerabukht@gmail.com</p>
          <p>0502779758</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NewMinds. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/resources" element={<Resources />} />

        <Route
          path="/resources/grade-1"
          element={<Grade1 />}
        />

        <Route
          path="/resources/:id"
          element={<ResourceDetail />}
        />

        <Route
          path="/resources/phonics"
          element={<Phonics />}
        />

        <Route
          path="/resources/reading"
          element={<Reading />}
        />

        <Route
          path="/resources/writing"
          element={<Writing />}
        />

        <Route
          path="/resources/teacher-resources"
          element={<TeacherResources />}
        />

        <Route
          path="/teacher-academy"
          element={<TeacherAcademy />}
        />

        <Route
          path="/live-learning"
          element={<LiveLearning />}
        />

        <Route
          path="/ai-games"
          element={<AIGames />}
        />

        <Route path="/schools" element={<Schools />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;