'use client';
import { useEffect, useState } from 'react';
import { SAFE_ADDRESS, SAFE_CHAIN } from '../scripts/dashboard-data';

export default function SafeDashboard() {
  const [balance, setBalance] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBalance() {
      try {
        const res = await fetch(`https://safe-transaction-${SAFE_CHAIN}.safe.global/api/v1/safes/${SAFE_ADDRESS}/balances/usd/`);
        const data = await res.json();
        const totalUSD = data.reduce((acc: number, item: any) => acc + parseFloat(item.fiatBalance || '0'), 0);
        setBalance(`$${totalUSD.toFixed(2)}`);
      } catch (err) {
        setBalance('Error loading balance');
      }
    }
    fetchBalance();
  }, []);

  return (
    <div>
      <h2>🔐 Safe Address</h2>
      <code>{SAFE_ADDRESS}</code>
      <h3>💰 Total Balance (USD)</h3>
      <p>{balance || 'Loading...'}</p>
    </div>
  );
}
