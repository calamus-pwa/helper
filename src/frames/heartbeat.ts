import { FrameHeader } from "./frame";
import { randomNumber, randomFloat } from "../utils/math";

export type HeartbeatFrame = {
  id: number;
  createdAt: number; //Date in epoch
  speed: number; //kmph
  rpm: number; // RPM of motor 0 to 255
  calories: number;
  outputCurrent: number;
  controllerTempature: number; // its in degree celcius
  motorTemprature: number; // its in degree celcius
  remainingCapacity: number; // percentage 0 to 100
  soh: number; // state of health 0 to 100
  frameHeader: FrameHeader.HEARTBEAT;
};

export const getRandomHeartbeat = (): HeartbeatFrame => {
  return {
    id: Date.now(),
    createdAt: Date.now(),
    speed: randomFloat(5, 60, 2),
    rpm: randomNumber(0, 255),
    calories: randomNumber(2, 15),
    outputCurrent: randomFloat(2, 15, 2),
    controllerTempature: randomNumber(15, 50),
    motorTemprature: randomNumber(15, 50),
    remainingCapacity: randomNumber(1, 100),
    soh: randomNumber(1, 100),
    frameHeader: FrameHeader.HEARTBEAT,
  } as HeartbeatFrame;
};
