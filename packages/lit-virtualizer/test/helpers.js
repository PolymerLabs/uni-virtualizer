/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Use this after rendering, resizing or scrolling to `await` the
 * reflow necessary before validating events and visibility changes.
 */
export async function wait(n=0) {
    await new Promise(resolve => requestAnimationFrame(resolve));
    return new Promise(resolve => setTimeout(resolve, n));
};
