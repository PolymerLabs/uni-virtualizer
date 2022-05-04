/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import { ignoreWindowErrors } from "../helpers.js";
 import { expect } from "@esm-bundle/chai";
 
 describe('ignoreWindowErrors helper', () => {
 
     let onerror: OnErrorEventHandler;
     beforeEach(() => {
         onerror 
     });
     ignoreWindowErrors(beforeEach, afterEach, /IGNORE_ME/);
 
     it('ignores exceptions', async () => {
         let errorThrown = false;
         setTimeout(() => {
             errorThrown = true;
             throw new Error("IGNORE_ME");
         }, 0);
         await new Promise((resolve) => setTimeout(resolve, 0));
         expect(errorThrown).to.eq(true);
     });
 });