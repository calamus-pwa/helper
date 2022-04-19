import { randomEnum } from "../utils/math";
import { FrameHeader } from "./baseFrame";

export enum LockState {
  LOCK = 0,
  UNLOCK = 1,
  FORCE_LOCK = 2,
  FORCE_UNLOCK = 3,
}

export type LockFrame = {
  id: number;
  createdAt: number;
  frameHeader: FrameHeader.LOCK;
  lockState: LockState;
};

export const getDefaultLock = (): LockFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameHeader: FrameHeader.LOCK,
    lockState: randomEnum(LockState),
  };
};
