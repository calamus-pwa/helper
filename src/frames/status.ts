import { FrameHeader } from "./frame";

export enum StatusFrameHeader {
  STATUS_READ = FrameHeader.STATUS_READ,
  STATUS_WRITE = FrameHeader.STATUS_WRITE,
  STATUS_ACK = FrameHeader.STATUS_ACK,
  STATUS_NAK = FrameHeader.STATUS_NAK,
}

export type StatusFrame = {
  id: number;
  createdAt: number;
  isHeadlightOn: boolean;
  isTurnIndicatorLeftOn: boolean;
  isTurnIndicatorRightOn: boolean;
  isVibrationMotorLeftOn: boolean;
  isVibrationMotorRightOn: boolean;
  isDRLOn: boolean;
  isHighBeamOn: boolean;
  isOnSecondaryBattery: boolean;
  frameHeader: StatusFrameHeader;
};

export const getDefaultStatus = (): StatusFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    isHeadlightOn: false,
    isTurnIndicatorLeftOn: false,
    isTurnIndicatorRightOn: false,
    isVibrationMotorLeftOn: false,
    isVibrationMotorRightOn: false,
    isDRLOn: false,
    isHighBeamOn: false,
    isOnSecondaryBattery: false,
    frameHeader: StatusFrameHeader.STATUS_ACK,
  };
};
