import { FrameHeader, FrameType } from "./baseFrame";

export enum PasAslMode {
  PAS_MODE_3_LEVEL_WALK_ASSIST = 774,
  PAS_MODE_3_LEVEL_0 = 768,
  PAS_MODE_3_LEVEL_1 = 780,
  PAS_MODE_3_LEVEL_2 = 770,
  PAS_MODE_3_LEVEL_3 = 771,

  PAS_MODE_5_LEVEL_WALK_ASSIST = 1286,
  PAS_MODE_5_LEVEL_0 = 1280,
  PAS_MODE_5_LEVEL_1 = 1291,
  PAS_MODE_5_LEVEL_2 = 1293,
  PAS_MODE_5_LEVEL_3 = 1301,
  PAS_MODE_5_LEVEL_4 = 1303,
  PAS_MODE_5_LEVEL_5 = 1283,

  PAS_MODE_9_LEVEL_WALK_ASSIST = 2310,
  PAS_MODE_9_LEVEL_0 = 2304,
  PAS_MODE_9_LEVEL_1 = 2305,
  PAS_MODE_9_LEVEL_2 = 2315,
  PAS_MODE_9_LEVEL_3 = 2316,
  PAS_MODE_9_LEVEL_4 = 2317,
  PAS_MODE_9_LEVEL_5 = 2306,
  PAS_MODE_9_LEVEL_6 = 2325,
  PAS_MODE_9_LEVEL_7 = 2326,
  PAS_MODE_9_LEVEL_8 = 2327,
  PAS_MODE_9_LEVEL_9 = 2307,
}

export enum BikeWheelDiameter {
  DIA_16_INCH = 0,
  DIA_18_INCH = 1,
  DIA_20_INCH = 2,
  DIA_22_INCH = 3,
  DIA_24_INCH = 4,
  DIA_26_INCH = 5,
  DIA_27_5_INCH = 6,
  DIA_28_INCH = 7,
}

export type SettingsFrame = {
  id: number;
  createdAt: number;
  frameType: FrameType;
  frameHeader: FrameHeader.SETTINGS;
  autoShutdownTimer: number;
  pasAslMode: PasAslMode;
  speedLimit: number;
  lowVoltageDeviation: number;
  isEco: boolean;
  isBoostMode: boolean;
  wheelDiameter: BikeWheelDiameter;
  isWalkKeyPressed: boolean;
  isTurnIndicatorEnabled: boolean;
  vibrationMotorSpeed: number;
  isVibrationMotorLeftEnabled: boolean;
  isVibrationMotorRightEnabled: boolean;
  magnetsInSpeedSensor: number;
};

export const getDefaultSettings = (): SettingsFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameHeader: FrameHeader.SETTINGS,
    frameType: FrameType.ACK,
    autoShutdownTimer: 0,
    pasAslMode: PasAslMode.PAS_MODE_9_LEVEL_2,
    speedLimit: 30,
    lowVoltageDeviation: 0,
    isEco: true,
    isBoostMode: false,
    wheelDiameter: BikeWheelDiameter.DIA_16_INCH,
    isWalkKeyPressed: false,
    isTurnIndicatorEnabled: false,
    vibrationMotorSpeed: 0,
    isVibrationMotorLeftEnabled: false,
    isVibrationMotorRightEnabled: false,
    magnetsInSpeedSensor: 0,
  };
};
