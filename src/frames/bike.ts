import { SettingsFrame } from "./settings";
import { StatusFrame } from "./status";
import { DisplayFrame } from "./display";
import { DebugFrame1, DebugFrame2, DebugFrame3 } from "./debug";

export type Bike = {
  bikeId: string;
  bikePassword: string;
  isOnline: boolean;
  name: string;
  userId?: string;

  settings: SettingsFrame;
  status: StatusFrame;
  display: DisplayFrame;
  debug: DebugFrame1 | DebugFrame2 | DebugFrame3;
};
