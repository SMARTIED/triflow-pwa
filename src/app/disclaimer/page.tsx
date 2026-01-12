export default function DisclaimerPage() {
  return (
    <div className="page">
      <h1>Disclaimer</h1>

      <p>
        The information provided by TriFlow Plumbing is for general
        informational purposes only.
      </p>

      {/* FOOTER MUST BE INSIDE JSX */}
      <footer style={{ marginTop: "3rem", opacity: 0.8 }}>
        <p>TriFlow Plumbing Supplies</p>
        <p>📞 071-234-5678</p>
        <p>✉ support@triflow.co.za</p>
      </footer>
    </div>
  );
}
