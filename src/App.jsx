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
          descripton={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          descripton={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          descripton={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          descripton={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          descripton={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          descripton={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>
        <Card
          tittle={'personal information'}
          descripton={
            'correct personal information is essential part. correctly fill you personal information'
          }
        ></Card>

        {/* <div className="card">card</div>
        <div className="card">card</div>
        <div className="card">card </div>
        <div className="card">card </div>
        <div className="card">card</div>
        <div className="card">card</div>
        <div className="card">card </div>
        <div className="card">card</div>
        <div className="card">card</div> */}
      </div>
    </div>
  );
}
function CvContainer({ children }) {
  return <div className="cv-container">class3 </div>;
}
function Footer({ children }) {
  return <div className="footer">footer </div>;
}

function Card({ tittle, descripton, children }) {
  return (
    <div className="card">
      <h3>{tittle}</h3>
      <p>{descripton}</p>
      <div>{children}</div>
      <button>
        <span>⏬</span>
      </button>
    </div>
  );
}
