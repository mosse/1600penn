var mongoose = require('mongoose');

var VisitSchema = new mongoose.Schema({
  NAMELAST: String,
  NAMEFIRST: String,
  NAMEMID: String,
  UIN: String,
  BDGNBR: String,
  ACCESS_TYPE: String,
  TOA: Date,
  POA: String,
  TOD: Date,
  POD: String
  APPT_MADE_DATE: Date,
  APPT_START_DATE: Date,
  APPT_END_DATE: Date,
  APPT_CANCEL_DATE: Date,
  Total_People: Number,
  LAST_UPDATEDBY: String,
  POST: String,
  LASTENTRYDATE: Date,
  TERMINAL_SUFFIX: String,
  visitee_namelast: String,
  visitee_namefirst: String,
  MEETING_LOC: String,
  MEETING_ROOM: String,
  CALLER_NAME_LAST: String,
  CALLER_NAME_FIRST: String,
  CALLER_ROOM: String,
  Description: String,
  Release_Date: Date
});

module.exports = mongoose.model('visits', VisitSchema);

// Schema field details:
// UIN - Appointment Number 
// BDG NBR – Badge Number
// Access Type - Type of access to the complex (VA = Visitor Access)
// TOA – Time of Arrival
// POA –  Post of Arrival
// TOD – Time of Departure 
// POD – Post of Departure
// APPT_MADE_DATE – Date the Appointment was made.
// APPT_START_DATE – Date and time for which the appointment was scheduled
// APPT_END_DATE – Date and time for which the appointment was scheduled to end
// APPT_CANCEL_DATE – Date the appointment was canceled, if applicable
// Total_People- The total number of people scheduled for a particular appointment per requestor
// LAST_UPDATEDBY – Identifier of officer that updated record
// POST – Computer used to enter appointment
// LastEntryDate – Most recent update to appointment
// TERMINAL_SUFFIX - Identifier of officer that entered appointment
// visitee_namelast – Last name of the visitee
// visitee_namefirst – First name of the visitee
// MEETING_LOC – Building in which meeting was scheduled
// MEETING_ROOM – Room in which meeting was scheduled
// CALLER_NAME_LAST – Last name of the individual that submitted the WAVES request
// CALLER_NAME_FIRST – First name of the individual that submitted the WAVES request
// CALLER_ROOM – Room from which the appointment was made 
// Description – Comments added by the WAVES requestor