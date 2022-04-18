import { FrameHeader, FrameType } from "./baseFrame";

export type AckFrame = {
  id: number;
  createdAt: number;
  frameHeader: FrameHeader;
  frameType: FrameType;
};
