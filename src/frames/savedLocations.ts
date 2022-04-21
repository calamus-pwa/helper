import { randomFloat } from "../utils/math";
import { FrameHeader, FrameType } from "./baseFrame";
import { Location } from "./location";

export type SavedLocationsFrame = {
  id: number;
  createdAt: number;
  frameType: FrameType;
  frameHeader: FrameHeader.SAVED_LOCATIONS;
  savedLocations: Location[];
};

export const getDefaultSavedLocation = (): SavedLocationsFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameType: FrameType.ACK,
    frameHeader: FrameHeader.SAVED_LOCATIONS,
    savedLocations: Array.from({ length: 5 }, () => ({
      lat: randomFloat(-12, 23, 6),
      lng: randomFloat(-12, 23, 6),
    })),
  };
};
