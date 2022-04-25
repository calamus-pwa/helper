import { randomEnum } from "../utils/math";
import { FrameHeader, FrameType } from "./baseFrame";

export enum LockState {
  LOCK = 0,
  UNLOCK = 1,
  FORCE_LOCK = 2,
  FORCE_UNLOCK = 3,
}

export type LockFrame = {
  id: number;
  createdAt: number;
  frameType: FrameType;
  frameHeader: FrameHeader.LOCK;
  lockState: LockState;
};

export const getDefaultLock = (): LockFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameType: FrameType.ACK,
    frameHeader: FrameHeader.LOCK,
    lockState: LockState.LOCK,
  };
};
