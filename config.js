/**
 * =============================================================
 *  STRIPE PAYMENT LINKS — REPLACE THESE WITH YOUR REAL LINKS
 * =============================================================
 *
 *  Each value should be a Stripe Payment Link URL, e.g.:
 *  "https://buy.stripe.com/abc123"
 *
 *  See SETUP.md for step-by-step instructions on creating these.
 */

const PAYMENT_LINKS = {
  // One-time donation links
  onetime: {
    10:     "https://buy.stripe.com/test_6oU6oG1yZaOI1mn7t5es000",
    15:     "https://donate.stripe.com/test_9B6dR86Tjf4YfddeVxes001",
    20:     "https://donate.stripe.com/test_4gM5kCcdD2icd5500Des002",
  },

  // Annual recurring donation links
  annual: {
    10:     "https://donate.stripe.com/test_8x28wO0uVf4Yd557t5es003",
    15:     "https://donate.stripe.com/test_14AdR8a5vf4Yd559Bdes004",
    20:     "https://donate.stripe.com/test_9B614m6Tj9KEd554gTes005",
  },
};

// URL users return to after completing payment
const SUCCESS_URL = "success.html";
