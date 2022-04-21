import { randomEnum } from "../utils/math";
import { FrameHeader, FrameType } from "./baseFrame";

export enum PowerState {
  ON = 0,
  OFF = 1,
}

export type PowerFrame = {
  id: number;
  createdAt: number;
  frameType: FrameType;
  frameHeader: FrameHeader.POWER;
  powerState: PowerState;
};

export const getDefaultPower = (): PowerFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameType: FrameType.ACK,
    frameHeader: FrameHeader.POWER,
    powerState: randomEnum(PowerState),
  };
};
