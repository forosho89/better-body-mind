const AMAZON_TAG = "foroshoinsigh-20"; // 🔴 CHANGE THIS

/**
 * Generate a safe Amazon affiliate search link
 * @param {string} keyword - search phrase
 * @param {string} marketplace - default amazon.com
 */
export function amazonSearchLink(keyword, marketplace = "amazon.com") {
  const query = encodeURIComponent(keyword);
  return `https://${marketplace}/s?k=${query}&tag=${AMAZON_TAG}`;
}
