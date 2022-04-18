import { randomEnum } from "../utils/math";
import { FrameHeader } from "./baseFrame";

export enum ActionTypes {
  RING_BELL = "RING_BELL",
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
