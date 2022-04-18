import { FrameHeader, FrameType } from "./baseFrame";

export enum BikePedalAssistMode {
  PAS_MODE_LEVEL_3 = "PAS_MODE_LEVEL_3",
  PAS_MODE_LEVEL_5 = "PAS_MODE_LEVEL_5",
  PAS_MODE_LEVEL_9 = "PAS_MODE_LEVEL_9",
}

export enum BikeAssistSupportLevel {
  LEVEL_0 = "LEVEL_0",
  LEVEL_1 = "LEVEL_1",
  LEVEL_2 = "LEVEL_2",
  LEVEL_3 = "LEVEL_3",
  LEVEL_4 = "LEVEL_4",
  LEVEL_5 = "LEVEL_5",
  LEVEL_WALK_ASSIST = "LEVEL_WALK_ASSIST",
}

export enum BikeWheelDiameter {
  DIA_16_INCH = "DIA_16_INCH",
  DIA_18_INCH = "DIA_18_INCH",
  DIA_20_INCH = "DIA_20_INCH",
  DIA_22_INCH = "DIA_22_INCH",
  DIA_24_INCH = "DIA_24_INCH",
  DIA_26_INCH = "DIA_26_INCH",
  DIA_27_5_INCH = "DIA_27_5_INCH",
  DIA_28_INCH = "DIA_28_INCH",
}

export type SettingsFrame = {
  id: number;
  createdAt: number;
  frameType: FrameType;
  frameHeader: FrameHeader.SETTINGS;
  autoShutdownTimer: number;
  pedalAssistMode: BikePedalAssistMode;
  assistSupportLevel: BikeAssistSupportLevel;
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
    pedalAssistMode: BikePedalAssistMode.PAS_MODE_LEVEL_3,
    assistSupportLevel: BikeAssistSupportLevel.LEVEL_1,
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
