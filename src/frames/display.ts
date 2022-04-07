import { FrameHeader } from "./frame";
import { randomNumber, randomBoolean } from "../utils/math";

export enum DisplayFrameHeader {
  DISPLAY_WRITE = FrameHeader.DISPLAY_WRITE,
  DISPLAY_READ = FrameHeader.DISPLAY_READ,
  DISPLAY_ACK = FrameHeader.DISPLAY_ACK,
  DISPLAY_NAK = FrameHeader.DISPLAY_NAK,
}

export type DisplayFrame = {
  id: number;
  createdAt: number; //Date in epoch
  displaySleepTimer: number;
  isDataSharingEnabled: boolean;
  savedLocations: string[];
  isGPSEnabled: boolean;
  isFindMyBikeEnabled: boolean;
  findMyBikeSoundId: number;
  findMyBikeVolume: number;
  hornSoundId: number;
  hornVolume: number;
  alarmSoundId: number;
  alarmVolume: number;
  alarmSensitivity: number;
  isAutoLockingEnabled: boolean;
  autoLockTimer: number;
  isAutoHeadlightEnabled: boolean;

  //might be moved to settings
  isBlindSpotDetectionEnabled: boolean;
  BlindSpotDetectionSensitivity: number;

  frameHeader: DisplayFrameHeader;
};

export const getDefaultDisplay = (): DisplayFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),

    displaySleepTimer: 0,
    isDataSharingEnabled: true,
    savedLocations: [],
    isGPSEnabled: true,
    isFindMyBikeEnabled: true,
    findMyBikeSoundId: 1,
    findMyBikeVolume: 5,
    hornSoundId: 1,
    hornVolume: 5,
    alarmSoundId: 1,
    alarmVolume: 5,
    alarmSensitivity: 5,
    isAutoLockingEnabled: true,
    autoLockTimer: 0,
    isAutoHeadlightEnabled: true,

    //might be moved to settings
    isBlindSpotDetectionEnabled: true,
    BlindSpotDetectionSensitivity: 5,

    frameHeader: DisplayFrameHeader.DISPLAY_ACK,
  } as DisplayFrame;
};

export const getRandomDisplay = (): DisplayFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),

    displaySleepTimer: randomNumber(0, 25),
    isDataSharingEnabled: randomBoolean(),
    savedLocations: [],
    isGPSEnabled: randomBoolean(),
    isFindMyBikeEnabled: randomBoolean(),
    findMyBikeSoundId: randomNumber(1, 10),
    findMyBikeVolume: randomNumber(1, 10),
    hornSoundId: randomNumber(1, 10),
    hornVolume: randomNumber(1, 10),
    alarmSoundId: randomNumber(1, 10),
    alarmVolume: randomNumber(1, 10),
    alarmSensitivity: randomNumber(1, 10),
    isAutoLockingEnabled: randomBoolean(),
    autoLockTimer: randomNumber(0, 25),
    isAutoHeadlightEnabled: randomBoolean(),

    //might be moved to settings
    isBlindSpotDetectionEnabled: randomBoolean(),
    BlindSpotDetectionSensitivity: randomNumber(1, 10),

    frameHeader: DisplayFrameHeader.DISPLAY_ACK,
  } as DisplayFrame;
};
