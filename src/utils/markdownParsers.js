export const getLinkValues = value => {
  const findMarkdownLinkRegex = /\[([^\[\]]+)\]\(([^)]+)/;
  const markdownLink = value.match(findMarkdownLinkRegex);
  return markdownLink.splice(1, 2);
};
