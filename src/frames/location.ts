import { randomFloat } from "../utils/math";
import { FrameHeader } from "./baseFrame";

export type Location = {
  lat: number;
  lng: number;
};

export type LocationFrame = {
  id: number;
  createdAt: number;
  frameHeader: FrameHeader.LOCATION;
  location: Location;
};

export const getDefaultLocation = (): LocationFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameHeader: FrameHeader.LOCATION,
    location: {
      lat: randomFloat(-12, 23, 6),
      lng: randomFloat(-12, 23, 6),
    },
  };
};
