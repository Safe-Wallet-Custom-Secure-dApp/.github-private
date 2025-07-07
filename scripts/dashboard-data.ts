// scripts/dashboard-data.ts
import { ethers } from "ethers";

export async function getSafeProposals(): Promise<string> {
  try {
    // Replace with your actual Safe address
    const safeAddress = "0xAfD5f60aA8eb4F488eAA0eF98c1C5B0645D9A0A0";
    const chainId = 42161; // Arbitrum

    const explorer = "https://arbiscan.io"; // optional

    // Replace this with real fetching logic (Safe API or your backend)
    const dummyProposals = [
      {
        id: "tx1",
        description: "Transfer 1.5 ETH to multisig signer for node setup",
        status: "Pending",
        link: `${explorer}/tx/0xdeadbeef`,
      },
      {
        id: "tx2",
        description: "Approve Reown contract deployment",
        status: "Executed",
        link: `${explorer}/tx/0xdeadbeef2`,
      },
    ];

    // Format it nicely for README injection
    const markdown = dummyProposals
      .map(
        (tx) =>
          `- [${tx.description}](${tx.link}) — \`${tx.status}\``
      )
      .join("\n");

    return markdown;
  } catch (err) {
    console.error("❌ Error fetching Safe proposals:", err);
    return "_No proposals available._";
  }
}
