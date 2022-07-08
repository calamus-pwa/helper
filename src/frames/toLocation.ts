import { randomFloat } from "../utils/math";
import { FrameHeader, FrameType } from "./baseFrame";
import { Location } from "./location";

export type ToLocationFrame = {
  id: number;
  createdAt: number;
  frameType: FrameType;
  frameHeader: FrameHeader.TO_LOCATION;
  location: Location;
};

export const getDefaultLocation = (): ToLocationFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameType: FrameType.ACK,
    frameHeader: FrameHeader.TO_LOCATION,
    location: {
      lat: randomFloat(-12, 23, 6),
      lng: randomFloat(-12, 23, 6),
    },
  };
};
