export enum FrameHeader {
  HEARTBEAT = 1,
  USER_INPUT = 2,
  ERROR = 3,
  SETTINGS = 4,
  DEBUG = 5,
  STATUS = 6,
  // For reading frame from PWA to bike
  READ = 7,
  ENCRYPTED = 8,
  // Server Stuff
  LOST = -121,
  SAVED_LOCATIONS = -122,
  LOCATION = -123,
  LOCK = -124,
  POWER = -125,
  DISPLAY = -126,
  ACTION = -127,
  INVALID = -128,
}

export enum FrameType {
  WRITE = 1,
  ACK = 2,
  NAK = 3,
}
