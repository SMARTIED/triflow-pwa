export default function DisclaimerModal({ onAccept }: any) {
  return (
    <div className="modal">
      <h2>Disclaimer</h2>
      <p>All purchases are final. Installation not included.</p>
      <button onClick={onAccept}>I Agree</button>
    </div>
  );
}
