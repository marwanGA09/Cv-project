import Navigation from './assets/component/Navigation';

export default function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <SideBar />
        <CvContainer />
        <Footer />
      </div>
    </>
  );
}

function SideBar({ children }) {
  return (
    <div className="side-bar">
      <div className="general-page-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque natus
          quos eos dicta fugiat laboriosam aliquid amet quisquam magnam ex!
          Officia illum velit aperiam explicabo nesciunt aspernatur ad laborum
          perferendis
        </p>
      </div>
      <div className="cards">
        <Card
          tittle={'personal information'}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          description={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
      </div>
    </div>
  );
}

function Card({ tittle, description, children }) {
  return (
    <div className="card">
      <h3>{tittle}</h3>
      <p>{description}</p>
      <div>{children}</div>
      <button>
        <span>⏬</span>
      </button>
    </div>
  );
}

function CvContainer({ children }) {
  return (
    <div className="cv-container">
      <TopCvContainer />
      <CV />
    </div>
  );
}
function Footer({ children }) {
  return <div className="footer">footer </div>;
}

function TopCvContainer({ children }) {
  return (
    <div className="top">
      <p>Name: merwan</p>
      <div>
        <label htmlFor="font">
          Font-style:
          <select name="font" id="font">
            <option value="ar">Arial</option>
            <option value="he">helvetic</option>
            <option value="mn">mono</option>
            <option value="ss">sans-serif</option>
          </select>
        </label>
        <label htmlFor="color">
          <span>Primary color: </span>
          <input type="color" name="color" id="color" />
        </label>
      </div>
    </div>
  );
}

function CV({ children }) {
  return (
    <div className="cv">
      <CvHeader />
      <div className="cv__main">
        <div className="left">
          <CvCard>
            <Experience />
            <Experience />
          </CvCard>
          <CvCard>
            <PersonalProject />
            <PersonalProject />
          </CvCard>
          <CvCard>
            <Education />
            <Education />
          </CvCard>
        </div>
        <div className="right">
          <CvCard />
          <CvCard />
          <CvCard />
        </div>
      </div>
    </div>
  );
}

function CvHeader({ children }) {
  return (
    <div className="cv__header">
      <div className="personal-description">
        <h2>Adem kedir Galiyo</h2>
        <h4>Back-end software engineer</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          molestiae amet fuga minima corrupti maiores tempore exercitationem
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          molestiae necessitatibus. Iusto,.
        </p>
      </div>
      <div className="image">
        <div>
          <img src="./../public/default.jpg" alt="user's image" />
        </div>
      </div>
    </div>
  );
}

function CvCard({ children }) {
  return (
    <div className="cv-card">
      <h3>Working Experience</h3>
      <div> {children}</div>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience">
      <h5>
        Tittle/ Position: <span>front End developer</span>
      </h5>
      <h6>
        work Space/ Company: <span>Google</span>
      </h6>
      <h6>
        Task/ Responsibility:
        <span>creating UX/UI friendly webpages for organization</span>
      </h6>
      <h6 className="date">
        Year:
        <span className="from">7/2022</span> -<span className="to">2/2023</span>
      </h6>
    </div>
  );
}

function PersonalProject() {
  return (
    <div className="personal-project">
      <h5>
        Project name: <span>Weather App</span>
      </h5>
      <h6>
        description:
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          mollitia quod esse repellat, sed, amet officiis, molestias quibusdam
          labor.
        </span>
      </h6>
      <a href="#" target="_black">
        <span>🐈</span> Github
      </a>
    </div>
  );
}

function Education() {
  return (
    <div className="education">
      <h5>
        Study Program: <span>Software engineering</span>
      </h5>
      <h6>
        Study Level:
        <span>bachelor degree</span>
      </h6>
      <h6>
        Institution :<span>Haramaya University</span>
      </h6>
      <h6 className="date">
        Year:
        <span className="from">7/2022</span> -<span className="to">2/2023</span>
      </h6>
    </div>
  );
}
