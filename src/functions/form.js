export function compareRender(prevProps, nextProps, key = 'value') {
  return prevProps[key] === nextProps[key];
}
