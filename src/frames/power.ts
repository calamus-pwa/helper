import { randomEnum } from "../utils/math";
import { FrameHeader } from "./baseFrame";

export enum PowerState {
  ON = 0,
  OFF = 1,
}

export type PowerFrame = {
  id: number;
  createdAt: number;
  frameHeader: FrameHeader.POWER;
  powerState: PowerState;
};

export const getDefaultPower = (): PowerFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameHeader: FrameHeader.POWER,
    powerState: randomEnum(PowerState),
  };
};
