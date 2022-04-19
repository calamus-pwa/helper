import { SettingsFrame } from "./settings";
import { StatusFrame } from "./status";
import { DisplayFrame } from "./display";
import { HeartbeatFrame } from "./heartbeat";
import { ErrorFrame } from "./error";
import { DebugFrame1, DebugFrame2, DebugFrame3 } from "./debug";

export type BikeFrames = {
  settings: SettingsFrame[];
  displays: DisplayFrame[];
  debugs: Array<DebugFrame1 | DebugFrame2 | DebugFrame3>[];
  heartbeats: HeartbeatFrame[];
  statuses: StatusFrame[];
  errors: ErrorFrame[];
};

export type Bike = {
  socketId?: string;
  bikeId: string;
  bikePassword: string;
  name: string;
  model: string;
  color: string;
  isOnline: boolean;
  createdAt: number; // Linux epoch time

  userId?: string; // User Id it is linked to
  assignedAt?: number; // Linux epoch time

  currentSettingsFrame?: SettingsFrame;
  currentHeartbeatFrame?: HeartbeatFrame;
  currentStatusFrame?: StatusFrame;
  currentDisplayFrame?: DisplayFrame;
  unreadErrors?: number[];

  frames: BikeFrames;
};
