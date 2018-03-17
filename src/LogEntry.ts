interface LogEntry {
  type: string;
  message: string;
  timestamp: Date;
  level: string;
  applicationGroup: string;
  applicationName: string;
}

export default LogEntry;