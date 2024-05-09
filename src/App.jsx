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

function Navigation() {
  return (
    <div className="navigation">
      <p>
        <span style={{ color: 'red' }}>CV c</span>reator
      </p>
      <div>
        Contact me
        <div>
          <a href="#">🐈</a> <a href="#">🧩</a> <a href="#">🐦</a>
          <span>Merwan KG</span>
        </div>
      </div>
    </div>
  );
}

function SideBar({ children }) {
  return <div className="side-bar">class2 </div>;
}
function CvContainer({ children }) {
  return <div className="cv-container">class3 </div>;
}
function Footer({ children }) {
  return <div className="footer">footer </div>;
}
