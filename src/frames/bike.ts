import { SettingsFrame } from "./settings";
import { StatusFrame } from "./status";
import { DisplayFrame } from "./display";
import { DebugFrame } from "./debug";

type Bike = {
  bikeId: string;
  bikePassword: string;
  isOnline: boolean;
  name: string;
  userId?: string;

  settings: SettingsFrame;
  status: StatusFrame;
  display: DisplayFrame;
  debug: DebugFrame;
};

export default Bike;
