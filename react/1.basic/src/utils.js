export function wrapToVdom(element) {
    return typeof element === 'string' || typeof element === 'number' ? 
        { type: "REACT_TEXT", props: { content: element } } : element;
}