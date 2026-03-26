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
    10:     "https://donate.stripe.com/cNiaEWgsd80y3Hy1V40ZW07",
    15:     "https://donate.stripe.com/4gM7sKek56Wuce40R00ZW06",
    20:     "https://donate.stripe.com/dRm9AS4Jv3Ki1zqczI0ZW05",
  },

  // Annual recurring donation links
  annual: {
    10:     "https://donate.stripe.com/4gMaEWek594C3HybvE0ZW04",
    15:     "https://donate.stripe.com/28E9AS8ZLa8G2DugPY0ZW03",
    20:     "https://donate.stripe.com/bJe00i5Nz0y63HygPY0ZW02",
  },
};

// URL users return to after completing payment
const SUCCESS_URL = "success.html";
