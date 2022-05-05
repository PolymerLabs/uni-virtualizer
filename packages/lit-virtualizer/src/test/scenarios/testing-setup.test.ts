/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { ignoreBenignErrors } from "../helpers";
import { expect } from "@esm-bundle/chai";
 
describe('ignoreBenignErrors', () => {

    ignoreBenignErrors(beforeEach, afterEach);

    // Chrome
    it('ignores ResizeObserver loop limit exceeded error', async () => {
        let errorThrown = false;
        setTimeout(() => {
            errorThrown = true;
            throw new Error("ResizeObserver loop limit exceeded");
        }, 0);
        await new Promise((resolve) => setTimeout(resolve, 0));
        expect(errorThrown).to.eq(true);
    });

    // Safari/WebKit
    it('ignores ResizeObserver loop completed with undelivered notifications error', async () => {
        let errorThrown = false;
        setTimeout(() => {
            errorThrown = true;
            throw new Error("ResizeObserver loop completed with undelivered notifications.");
        }, 0);
        await new Promise((resolve) => setTimeout(resolve, 0));
        expect(errorThrown).to.eq(true);
    });
});