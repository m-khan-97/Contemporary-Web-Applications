// app/page.jsx
export default function Page() {
  return (
    <div className="ht-card">
      <h2>Welcome to HitTastic! (Next.js + Firebase Edition)</h2>
      <p>
        This is a crash-course version of HitTastic built with{" "}
        <strong>Next.js</strong>, <strong>React</strong> and{" "}
        <strong>Firebase Firestore</strong>.
      </p>
      <ul>
        <li>Use <strong>Search Songs</strong> to find songs by artist.</li>
        <li>Use <strong>Add Song</strong> to insert new songs into Firestore.</li>
      </ul>
      <p>
        All data lives in Firestore inside a <code>songs</code> collection.
      </p>
    </div>
  );
}