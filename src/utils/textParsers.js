export const countLines = id => {
  if (typeof window === "undefined") return null;
  const el = document.getElementById(id);
  if (!el) return 4;
  const divHeight = el.offsetHeight;
  const lineHeight = parseInt(el.style.lineHeight) || 22;
  return divHeight / lineHeight;
};
