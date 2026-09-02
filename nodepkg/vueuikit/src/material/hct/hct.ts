/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as utils from "../utils/color_utils";
import { Cam16 } from "./cam16";
import { HctSolver } from "./hct_solver";
import { ViewingConditions } from "./viewing_conditions";

export class Hct {
  private argb: number;
  internalHue: number;
  internalChroma: number;
  internalTone: number;
  constructor(argb: number) {
    this.argb = argb;
    const cam = Cam16.fromInt(argb);
    this.internalHue = cam.hue;
    this.internalChroma = cam.chroma;
    this.internalTone = utils.lstarFromArgb(argb);
    this.argb = argb;
  }
  static from(hue: number, chroma: number, tone: number): Hct {
    return new Hct(HctSolver.solveToInt(hue, chroma, tone));
  }
  static fromInt(argb: number): Hct {
    return new Hct(argb);
  }
  toInt(): number {
    return this.argb;
  }
  get hue(): number {
    return this.internalHue;
  }
  set hue(newHue: number) {
    this.setInternalState(HctSolver.solveToInt(newHue, this.internalChroma, this.internalTone));
  }
  get chroma(): number {
    return this.internalChroma;
  }
  set chroma(newChroma: number) {
    this.setInternalState(HctSolver.solveToInt(this.internalHue, newChroma, this.internalTone));
  }
  get tone(): number {
    return this.internalTone;
  }
  set tone(newTone: number) {
    this.setInternalState(HctSolver.solveToInt(this.internalHue, this.internalChroma, newTone));
  }
  setValue(propertyName: string, value: number): void {
    (this as any)[propertyName] = value;
  }
  toString(): string {
    return `HCT(${this.hue.toFixed(0)}, ${this.chroma.toFixed(0)}, ${this.tone.toFixed(0)})`;
  }
  static isBlue(hue: number): boolean {
    return hue >= 250 && hue < 270;
  }
  static isYellow(hue: number): boolean {
    return hue >= 105 && hue < 125;
  }
  static isCyan(hue: number): boolean {
    return hue >= 170 && hue < 207;
  }
  inViewingConditions(vc: ViewingConditions): Hct {
    // 1. Use CAM16 to find XYZ coordinates of color in specified VC.
    const cam = Cam16.fromInt(this.toInt());
    const viewedInVc = cam.xyzInViewingConditions(vc);
    // 2. Create CAM16 of those XYZ coordinates in default VC.
    const recastInVc = Cam16.fromXyzInViewingConditions(
      viewedInVc[0]!,
      viewedInVc[1]!,
      viewedInVc[2]!,
      ViewingConditions.make(),
    );
    // 3. Create HCT from:
    // - CAM16 using default VC with XYZ coordinates in specified VC.
    // - L* converted from Y in XYZ coordinates in specified VC.
    const recastHct = Hct.from(recastInVc.hue, recastInVc.chroma, utils.lstarFromY(viewedInVc[1]!));
    return recastHct;
  }
  private setInternalState(argb: number) {
    const cam = Cam16.fromInt(argb);
    this.internalHue = cam.hue;
    this.internalChroma = cam.chroma;
    this.internalTone = utils.lstarFromArgb(argb);
    this.argb = argb;
  }
}
