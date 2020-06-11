initSidebarItems({"enum":[["AlarmPriority","Supported alarm priorities"],["Mode","Variants of the MakAir firmware"],["Phase","Phases of the respiratory cycle"],["SubPhase","Sub-phases of the respiratory cycle"],["TelemetryErrorKind","Extension of Nom's `ErrorKind` to be able to represent CRC errors"],["TelemetryMessage","Supported telemetry messages"]],"struct":[["AlarmTrap","A telemetry message that is sent every time an alarm is triggered or stopped"],["BootMessage","A telemetry message that is sent once every time the MCU boots"],["ControlAck","An ACK message that is sent every time a setting is changed using the control protocol"],["DataSnapshot","A telemetry message that is sent every time the firmware does a control iteration (every 10 ms)"],["MachineStateSnapshot","A telemetry message that is sent at the end of every respiratory cycle"],["StoppedMessage","A telemetry message that is sent every 100 ms when the MCU is in \"stop\" mode"],["TelemetryError","Custom parser error type to leverage `TelemetryErrorKind`"]]});