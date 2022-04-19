import { randomEnum } from "../utils/math";
import { FrameHeader } from "./baseFrame";

export enum ReadType {
  SETTINGS_READ = 1,
  STATUS_READ = 2,
  DEBUG_READ = 3,
  LOST_READ = -123,
  SAVED_LOCATIONS_READ = -124,
  LOCATION_READ = -125,
  LOCK_READ = -126,
  POWER_READ = -127,
  DISPLAY_READ = -128,
}

export type ReadFrame = {
  id: number;
  createdAt: number;
  frameHeader: FrameHeader.READ;
  readType: ReadType;
};

export const getDefaultRead = (): ReadFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameHeader: FrameHeader.READ,
    readType: randomEnum(ReadType),
  };
};
