import { randomFloat } from "../utils/math";
import { FrameHeader, FrameType } from "./baseFrame";

export type LinkedFrame = {
  id: number;
  createdAt: number;
  frameHeader: FrameHeader.LINKED;
  linked: boolean;
  bikeName: string;
  color: string;
  model: string;
  firstName: string;
  lastName: string;
};

export const getDefaultLinked = (): LinkedFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameHeader: FrameHeader.LINKED,
    linked: true,
    bikeName: "",
    color: "",
    model: "",
    firstName: "",
    lastName: "",
  };
};
