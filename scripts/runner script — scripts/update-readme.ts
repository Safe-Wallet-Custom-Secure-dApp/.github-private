import fs from 'fs';
import path from 'path';
import axios from 'axios';

const README_PATH = path.join(process.cwd(), 'README.md');
const START_MARKER = '<!-- START_SAFE_SECTION -->';
const END_MARKER = '<!-- END_SAFE_SECTION -->';

const getSafeProposals = async () => {
  // 🔐 Replace with your actual Safe API or mock data
  return [
    { title: 'Proposal 1', status: 'Pending' },
    { title: 'Proposal 2', status: 'Executed' },
  ];
};

const updateReadme = async () => {
  const readme = fs.readFileSync(README_PATH, 'utf8');
  const proposals = await getSafeProposals();

  const safeSection = proposals
    .map(p => `- **${p.title}** – \`${p.status}\``)
    .join('\n');

  const newContent = `${START_MARKER}\n${safeSection}\n${END_MARKER}`;
  const updated = readme.replace(
    new RegExp(`${START_MARKER}[\\s\\S]*?${END_MARKER}`),
    newContent
  );

  fs.writeFileSync(README_PATH, updated);
  console.log('✅ README updated with Safe proposals');
};

const notifyDiscord = async (message: string) => {
  const url = process.env.DISCORD_WEBHOOK;
  if (!url) return console.warn('No Discord webhook found.');

  await axios.post(url, { content: message });
  console.log('📢 Sent notification to Discord');
};

(async () => {
  await updateReadme();
  await notifyDiscord('🔔 Org README was updated with Safe proposals!');
})();
