export function CvCard({ heading, children }) {
  return (
    <div className="cv-card">
      <h3>{heading}</h3>
      {children}
    </div>
  );
}
