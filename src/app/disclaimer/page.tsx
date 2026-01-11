import Link from "next/link";

export default function Disclaimer() {
  return (
    <div className="page">
      <h1>Disclaimer</h1>
      <p>
        TriFlow Plumbing provides plumbing products at customers request. Installation should be
        done by qualified plumbers. Prices may change without notice.
      </p>
      <Link href="/" className="btn">Back</Link>
    </div>
  );
}
