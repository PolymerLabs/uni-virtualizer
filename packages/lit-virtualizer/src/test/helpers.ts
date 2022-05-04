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

/**
 * This solution was inspired to address the issue described in the following links:
 * https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
 * https://stackoverflow.com/questions/9025095/how-can-i-test-uncaught-errors-in-mocha
 * 
 * Before/After parameters are given to the function to ensure there are no user-error
 * cases where teardown is forgotten/skipped.
 */
export function ignoreBenignErrors(before: Mocha.HookFunction, after: Mocha.HookFunction) {
    ignoreWindowErrors(before, after, /^(ResizeObserver loop limit exceeded)$/);
}
export function ignoreWindowErrors(before: Mocha.HookFunction, after: Mocha.HookFunction, regexp: RegExp) {
    let onerror: OnErrorEventHandler;
    before(() => {
        onerror = window.onerror;
        window.onerror = (err) => {
            if (regexp.test(`${err}`)) {
                console.warn(`Ignored Error: ${err}`);
                return false;
            }
            if (onerror) {
                return onerror.apply(window, [...(arguments as unknown as [event: string | Event, source?: string | undefined, lineno?: number | undefined, colno?: number | undefined, error?: Error | undefined])]);
            }
        };
    });
    after(() => {
        window.onerror = onerror;
    });
}
