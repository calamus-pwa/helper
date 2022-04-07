import { randomEnum } from "../utils/math";
import { FrameHeader } from "./frame";

export enum ActionTypes {
  SETTINGS_READ = "SETTINGS_READ",
  STATUS_READ = "STATUS_READ",
  DISPLAY_READ = "DISPLAY_READ",
  DEBUG_READ = "DEBUG_READ",
  RING_BELL = "RING_BELL",
  UNLOCK = "UNLOCK",
  LOCK = "LOCK",
  MARK_LOST = "MARK_LOST",
  MARK_FOUND = "MARK_FOUND",
  REQUEST_LOCATION = "REQUEST_LOCATION",
}

export const ActionTypesArray = Object.keys(ActionTypes);

export type ActionFrame = {
  id: number;
  createdAt: number;
  frameHeader: FrameHeader.ACTION;
  action: ActionTypes;
};

export const getDefaultAction = (): ActionFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameHeader: FrameHeader.ACTION,
    action: randomEnum(ActionTypes),
  };
};
