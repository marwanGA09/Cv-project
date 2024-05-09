export default function App() {
  return (
    <>
      <div className="App">
        <div className="class1">class1 </div>
        <div className="class2">class2</div>
        <div className="class3">class3</div>
        <div className="class4">class4</div>
      </div>
    </>
  );
}

function Navigation({ children }) {
  return <div>navigation {children}</div>;
}
