import { randomEnum } from "../utils/math";
import { FrameHeader } from "./baseFrame";

export enum LockState {
  LOCK = "LOCK",
  UNLOCK = "UNLOCK",
  FORCE_LOCK = "FORCE_LOCK",
  FORCE_UNLOCK = "FORCE_UNLOCK",
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
