export enum FrameHeader {
  HEARTBEAT = "HEARTBEAT",
  USER_INPUT = "USER_INPUT",
  ERROR = "ERROR",
  SETTINGS = "SETTINGS",
  DEBUG = "DEBUG",
  STATUS = "STATUS",
  // For reading frame from PWA to bike
  READ = "READ",
  ENCRYPTED = "ENCRYPTED",
  // Server Stuff
  LOST = "LOST",
  SAVED_LOCATIONS = "SAVED_LOCATIONS",
  LOCATION = "LOCATION",
  LOCK = "LOCK",
  POWER = "POWER",
  DISPLAY = "DISPLAY",
  ACTION = "ACTION",
  INVALID = "INVALID",
}

export enum FrameType {
  WRITE = "WRITE",
  ACK = "ACK",
  NAK = "NAK",
}
