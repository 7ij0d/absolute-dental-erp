import fs from 'fs';
import { normalizeServerOrder } from './verify_orders_sync.mjs';

const SUPABASE_URL = 'https://api.kurofangs.id.ly';
const SUPABASE_KEY = 'sb_publishable_bISG70YeoKP4mu8BKlgsuQ_xPprjcc1';

async function updateSeed() {
  console.log('🔄 Fetching authoritative canonical orders from Supabase...');
  const res = await fetch(`${SUPABASE_URL}/rest/v1/orders?select=*,order_items(*,products(*))&order=created_at.desc`, {
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch orders: ${res.statusText}`);
  }

  const rawOrders = await res.json();
  console.log(`Fetched ${rawOrders.length} raw orders from Supabase.`);

  const normalized = rawOrders.map(ord => normalizeServerOrder(ord));
  console.log(`Normalized ${normalized.length} canonical orders.`);

  const seedPath = 'seed.js';
  const seedContent = fs.readFileSync(seedPath, 'utf8');

  // Find start and end of INITIAL_ORDERS in seed.js
  const startMarker = 'const INITIAL_ORDERS = [';
  const endMarker = 'const INITIAL_PURCHASES = [];';

  const startIndex = seedContent.indexOf(startMarker);
  const endIndex = seedContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('Could not find INITIAL_ORDERS markers in seed.js');
  }

  const jsonStr = JSON.stringify(normalized, null, 2);
  const newBlock = `const INITIAL_ORDERS = ${jsonStr};\n`;

  const newSeedContent = seedContent.slice(0, startIndex) + newBlock + seedContent.slice(endIndex);

  fs.writeFileSync(seedPath, newSeedContent, 'utf8');
  console.log(`✅ Successfully updated seed.js with ${normalized.length} canonical orders!`);
}

updateSeed().catch(err => {
  console.error('Error updating seed.js:', err);
  process.exit(1);
});
