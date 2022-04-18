import { FrameHeader, FrameType } from "./baseFrame";

export type StatusFrame = {
  id: number;
  createdAt: number;
  frameType: FrameType;
  frameHeader: FrameHeader.STATUS;
  isHeadlightOn: boolean;
  isTurnIndicatorLeftOn: boolean;
  isTurnIndicatorRightOn: boolean;
  isVibrationMotorLeftOn: boolean;
  isVibrationMotorRightOn: boolean;
  isDRLOn: boolean;
  isHighBeamOn: boolean;
  isOnSecondaryBattery: boolean;
};

export const getDefaultStatus = (): StatusFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameType: FrameType.ACK,
    frameHeader: FrameHeader.STATUS,
    isHeadlightOn: false,
    isTurnIndicatorLeftOn: false,
    isTurnIndicatorRightOn: false,
    isVibrationMotorLeftOn: false,
    isVibrationMotorRightOn: false,
    isDRLOn: false,
    isHighBeamOn: false,
    isOnSecondaryBattery: false,
  };
};
