import { randomEnum } from "../utils/math";
import { FrameHeader } from "./baseFrame";

export enum LostState {
  LOST = "LOST",
  FOUND = "FOUND",
}

export type LostFrame = {
  id: number;
  createdAt: number;
  frameHeader: FrameHeader.LOST;
  lostState: LostState;
};

export const getDefaultLost = (): LostFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameHeader: FrameHeader.LOST,
    lostState: randomEnum(LostState),
  };
};