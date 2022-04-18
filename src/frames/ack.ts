import { randomEnum } from "../utils";
import { FrameHeader, FrameType } from "./baseFrame";

export type AckFrame = {
  id: number;
  createdAt: number;
  frameHeader: FrameHeader;
  frameType: FrameType;
};

export const getDefaultAckFrame = (): AckFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameHeader: randomEnum(FrameHeader),
    frameType: randomEnum(FrameType),
  };
};
