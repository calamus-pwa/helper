import { FrameHeader, FrameType } from "./baseFrame";

export enum DebugFrameNumber {
  FRAME_INVALID = 0,
  FRAME_1 = 1,
  FRAME_2 = 2,
  FRAME_3 = 3,
}

export type DebugFrame1 = {
  id: number;
  createdAt: number;
  frameType: FrameType;
  frameHeader: FrameHeader.DEBUG;
  debugFrameNumber: DebugFrameNumber.FRAME_1;
  controllerPulse: number;
  torqueSensorVoltage: number;
  RPMSensor: number;
  remainingCapacityController: number;
  RPMController: number;
  torqueVoltage: number;
  speed: number;
  controllerCurrent: number;
  controllerVoltage: number;
  tempController: number;
  tempMotor: number;
  walkAssistStatus: number;
  speedLimit: number;
  wheelSize: string;
  tireCircumference: number;
  controllerShutdownNotice: number;
  KCal: number;
  errorCode: number;
  lowVoltageWarning: number; //0
  powerOn: number;
  walkAssistButtonStatus: number;
  iButtonStatus: number;
  turnIndicatorPinStatus: number;
  vibMotorPinStatus: number; //7
  DRLStatus: number; //0
  headlightEnable: number;
  highLowBeamSwitch: number;
  TLSupernovaStatus: number;
  TLCalamusStatus: number;
  backupBatteryStatus: number; //7
  backupBatteryVoltage: number;
  totalCapacity: number;
  remainingCapacity: number;
  relativeCapacity: number;
  absoluteCapacity: number;
  SOH: number;
  current: number;
  voltage: number;
  temperature: number;
  batteryWarmingUp: number; //0
  batteryChargingDischarging: number;
  batteryInUse: number;
  batteryPowerOff: number;
  bitstuff2: number; //7
  timeSeconds: number;
  timeMinutes: number;
  timeHours: number;
  timeDays: number;
  timeMonths: number;
  timeYears: number;
  batteryHWVersion: string; //Bytearray of size 8
  batteryCharCode: number;
};

export type DebugFrame2 = {
  id: number;
  createdAt: number;
  frameType: FrameType;
  frameHeader: FrameHeader.DEBUG;
  debugFrameNumber: DebugFrameNumber.FRAME_2;
  cellData1: number;
  cellData0: number;
  cellData2: number;
  cellData3: number;
  cellData4: number;
  cellData5: number;
  cellData6: number;
  cellData7: number;
  cellData8: number;
  cellData9: number;
  cellData10: number;
  cellData11: number;
  cellData12: number;
  cellData13: number;
  cellData14: number;
  cellData15: number;
  cellData16: number;
  cellData17: number;
  cellData18: number;
  cellData19: number;
  cellData20: number;
  cellData21: number;
  cellData22: number;
  cellData23: number;
  cellData24: number;
  cellData25: number;
  cellData26: number;
  cellData27: number;
  cellData28: number;
  cellData29: number;
  cellData30: number;
};

export type DebugFrame3 = {
  id: number;
  createdAt: number;
  frameType: FrameType;
  frameHeader: FrameHeader.DEBUG;
  debugFrameNumber: DebugFrameNumber.FRAME_3;
  cellData32: number;
  seriesCellCount: number;
  parallelCellCount: number;
  capacityInDesign: number;
  chargingCycleNumber: number;
  maxiumChargingTime: number;
  noChargingTimeRecent: number;
  operationStatusofBattery: number;
  batteryErrorCode: number;
  applicationInformationCode: number;
  maxAllowableChargeVoltage: string;
  maxAllowableChargeCurrent: string;
  obstacleLocation: number; //0
  logoLight: number;
  TLCalamusLBStatus: number;
  LBSleepWakeupStatus: number;
  bitstuff3: number; //7
  lidar1MeasuredDistance: number;
  lidar2MeasuredDistance: number;
};

export function getDebugFrame1(): DebugFrame1 {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    frameType: FrameType.ACK,
    frameHeader: FrameHeader.DEBUG,
    debugFrameNumber: DebugFrameNumber.FRAME_1,

    //DebugFrame1
    controllerPulse: 0,
    torqueSensorVoltage: 0,
    RPMSensor: 0,
    remainingCapacityController: 0,
    RPMController: 0,
    torqueVoltage: 0,
    speed: 0,
    controllerCurrent: 0,
    controllerVoltage: 0,
    tempController: 0,
    tempMotor: 0,
    walkAssistStatus: 0,
    speedLimit: 0,
    wheelSize: "wheelSize",
    tireCircumference: 0,
    controllerShutdownNotice: 0,
    KCal: 0,
    errorCode: 0,
    lowVoltageWarning: 0, //0
    powerOn: 0,
    walkAssistButtonStatus: 0,
    iButtonStatus: 0,
    turnIndicatorPinStatus: 0,
    vibMotorPinStatus: 0, //7
    DRLStatus: 0, //0
    headlightEnable: 0,
    highLowBeamSwitch: 0,
    TLSupernovaStatus: 0,
    TLCalamusStatus: 0,
    backupBatteryStatus: 0, //7
    backupBatteryVoltage: 0,
    totalCapacity: 0,
    remainingCapacity: 0,
    relativeCapacity: 0,
    absoluteCapacity: 0,
    SOH: 0,
    current: 0,
    voltage: 0,
    temperature: 0,
    batteryWarmingUp: 0, //0
    batteryChargingDischarging: 0,
    batteryInUse: 0,
    batteryPowerOff: 0,
    bitstuff2: 0, //7
    timeSeconds: 0,
    timeMinutes: 0,
    timeHours: 0,
    timeDays: 0,
    timeMonths: 0,
    timeYears: 0,
    batteryHWVersion: "batteryHWVersion", //Bytearray of size 8
    batteryCharCode: 0,
  } as DebugFrame1;
}

export function getDebugFrame2(): DebugFrame2 {
  return {
    id: Date.now(),
    createdAt: Date.now(),

    frameType: FrameType.ACK,
    frameHeader: FrameHeader.DEBUG,
    debugFrameNumber: DebugFrameNumber.FRAME_2,

    //DebugFrame2
    cellData1: 0,
    cellData0: 0,
    cellData2: 0,
    cellData3: 0,
    cellData4: 0,
    cellData5: 0,
    cellData6: 0,
    cellData7: 0,
    cellData8: 0,
    cellData9: 0,
    cellData10: 0,
    cellData11: 0,
    cellData12: 0,
    cellData13: 0,
    cellData14: 0,
    cellData15: 0,
    cellData16: 0,
    cellData17: 0,
    cellData18: 0,
    cellData19: 0,
    cellData20: 0,
    cellData21: 0,
    cellData22: 0,
    cellData23: 0,
    cellData24: 0,
    cellData25: 0,
    cellData26: 0,
    cellData27: 0,
    cellData28: 0,
    cellData29: 0,
    cellData30: 0,
  } as DebugFrame2;
}

export function getDebugFrame3(): DebugFrame3 {
  return {
    id: Date.now(),
    createdAt: Date.now(),

    frameType: FrameType.ACK,
    frameHeader: FrameHeader.DEBUG,
    debugFrameNumber: DebugFrameNumber.FRAME_3,

    //DebugFrame3
    cellData32: 0,
    seriesCellCount: 0,
    parallelCellCount: 0,
    capacityInDesign: 0,
    chargingCycleNumber: 0,
    maxiumChargingTime: 0,
    noChargingTimeRecent: 0,
    operationStatusofBattery: 0,
    batteryErrorCode: 0,
    applicationInformationCode: 0,
    maxAllowableChargeVoltage: "maxAllowableChargeVoltage",
    maxAllowableChargeCurrent: "maxAllowableChargeCurrent",
    obstacleLocation: 0, //0
    logoLight: 0,
    TLCalamusLBStatus: 0,
    LBSleepWakeupStatus: 0,
    bitstuff3: 0, //7
    lidar1MeasuredDistance: 0,
    lidar2MeasuredDistance: 0,
  } as DebugFrame3;
}
