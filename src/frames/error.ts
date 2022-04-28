import { randomEnum } from "../utils/math";
import { FrameHeader } from "./baseFrame";
import ErrorMessageEn from "./errorMessage.json";

export enum ErrorCodes {
  CURRENT_ERROR_250 = 33,
  THROTTLE_ERROR_250 = 34,
  PHASE_FAULT_250 = 35,
  MOTOR_HALL_ERROR_250 = 36,
  BRAKE_ERROR_250 = 37,
  OVER_CURRENT_750 = 39,
  OVER_VOLTAGE_WARNING_750 = 7,
  UNDER_VOLTAGE_WARNING_750 = 6,
  BRAKE_ERROR_750 = 3,
  THROTTLE_RETURN_ERROR_750 = 5,
  THROTTLE_FAILURE_750 = 4,
  LOW_VOLTAGE_PROTECTION_750 = 49,
  OVER_VOLTAGE_PROTECTION_750 = 50,
  MOTOR_HALL_ERROR_750 = 8,
  MOTOR_PHASE_ERROR_750 = 9,
  MOTOR_TEMP_PROTECTION_750 = 10,
  MOTOR_TEMP_ERROR_750 = 17,
  CONTROLLER_TEMP_PROTECTION_750 = 20,
  CONTROLLER_TEMP_ERROR_750 = 21,
  CURRENT_SENSOR_ERROR_750 = 18,
  BRAKE_DETECTION_ERROR_750 = 51,
  WDT_ERROR_750 = 52,
  POWER_DETECTION_15V_ERROR_750 = 53,
  BUTTON_DETECTION_ERROR_750 = 54,
  SPEED_SENSOR_ERROR_750 = 55,
  HEADLIGHT_ERROR_750 = 56,
}

export enum DeviceID {
  CONTROLLER_250 = "CONTROLLER_250",
  CONTROLLER_750 = "CONTROLLER_750",
  SENSOR = "SENSOR",
  BATTERY = "BATTERY",
  HMI = "HMI",
  SMART_LOCK = "SMART_LOCK",
  CONTROL_BOARD = "CONTROL_BOARD",
  JOYSTICK = "JOYSTICK",
  ENVIOLO = "ENVIOLO",
  LIDAR = "LIDAR",
  POWER_SUPPLY_BOARD = "POWER_SUPPLY_BOARD",
}

export type ErrorFrame = {
  id: number;
  createdAt: number; //Date in epoch
  frameHeader: FrameHeader.ERROR;
  deviceID: DeviceID;
  errorCode: ErrorCodes;
};

export const getRandomError = (): ErrorFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    deviceID: randomEnum(DeviceID),
    errorCode: randomEnum(ErrorCodes),
    frameHeader: FrameHeader.ERROR,
  } as ErrorFrame;
};

interface ErrorMessageMap {
  [key: string]: string;
}

export const getErrorMessage = (errorCode: string, language = "en"): string => {
  const errorMessage = ErrorMessageEn as ErrorMessageMap;
  return errorMessage[errorCode];
};
