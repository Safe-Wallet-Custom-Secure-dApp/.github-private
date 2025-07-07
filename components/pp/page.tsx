import SafeDashboard from '../components/SafeDashboard';

export default function HomePage() {
  return (
    <main>
      <h1>Gnosis-vault🔐</h1>
      <p>Your Safe{Wallet} public dashboard</p>
      <SafeDashboard />
    </main>
  );
}
