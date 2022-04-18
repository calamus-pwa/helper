import { randomEnum } from "../utils/math";
import { FrameHeader } from "./baseFrame";

export enum ReadType {
  SETTINGS_READ = "SETTINGS_READ",
  STATUS_READ = "STATUS_READ",
  DEBUG_READ = "DEBUG_READ",
  LOST_READ = "LOST_READ",
  SAVED_LOCATIONS_READ = "SAVED_LOCATIONS_READ",
  LOCATION_READ = "LOCATION_READ",
  LOCK_READ = "LOCK_READ",
  DISPLAY_READ = "DISPLAY_READ",
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
