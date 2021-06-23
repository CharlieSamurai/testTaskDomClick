export const stingFixer = function(str) {
  let strFix = str;
  if (strFix.includes('&quot;')) {
    strFix = strFix.replace(/&quot;/g, "'");
  }
  if (strFix.includes('&#039;')) {
    strFix = strFix.replace(/&#039;/g, "'");
  }
  if (strFix.includes('&ldquo;')) {
    strFix = strFix.replace(/&ldquo;/g, "<");
  }
  if (strFix.includes('&rdquo;')) {
    strFix = strFix.replace(/&rdquo;/g, ">");
  }
  return strFix;
};