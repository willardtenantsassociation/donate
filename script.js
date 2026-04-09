// ===== State (sync with browser-restored form values) =====
let isAnnual = false;
let selectedAmount = 10;

// ===== DOM Elements =====
const amountButtons = document.querySelectorAll('.amount-btn');
const annualToggle = document.getElementById('annual-toggle');
const giveBtn = document.getElementById('give-btn');
const frequencyLabel = document.getElementById('frequency-label');

// ===== Amount Selection =====
amountButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove selected state from all buttons
    amountButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    selectedAmount = parseInt(btn.dataset.amount);

    updateButton();
  });
});

// ===== Annual Toggle =====
annualToggle.addEventListener('change', () => {
  isAnnual = annualToggle.checked;
  frequencyLabel.textContent = isAnnual ? 'Annual contribution · cancel anytime' : 'One-time contribution';
  updateButton();
});

// ===== Update Button Text =====
function updateButton() {
  const suffix = isAnnual ? '/year' : '';
  giveBtn.textContent = `Donate $${selectedAmount}${suffix}`;
}

// ===== Reset toggle on page load (handles browser back-button) =====
window.addEventListener('pageshow', () => {
  annualToggle.checked = false;
  isAnnual = false;
  frequencyLabel.textContent = 'One-time contribution';
  updateButton();
});

// ===== Handle Payment =====
giveBtn.addEventListener('click', () => {
  if (!selectedAmount) return;

  const pool = isAnnual ? PAYMENT_LINKS.annual : PAYMENT_LINKS.onetime;

  // Use the exact amount key if it exists, otherwise use the custom link
  let link = pool[selectedAmount] || pool.custom;

  if (!link || link === 'PASTE_YOUR_STRIPE_LINK_HERE') {
    alert('Payment links are not configured yet. See SETUP.md for instructions.');
    return;
  }

  // Redirect to Stripe Payment Link
  window.location.href = link;
});
