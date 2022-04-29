// Ensure virtualizer does its thing by waiting for reflow and then use
// setTimeout to defer by a microtask.
export async function wait(n=0) {
    await new Promise(resolve => requestAnimationFrame(resolve));
    return new Promise(resolve => setTimeout(resolve, n));
};
