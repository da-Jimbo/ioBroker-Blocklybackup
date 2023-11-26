var FutroBackup, lastBackup, Heute;

function subsequenceFirstFromEnd(sequence, at2) {
  var start = 0;
  var end = sequence.length - 1 - at2 + 1;
  return sequence.slice(start, end);
}


FutroBackup = schedule('{"time":{"exactTime":true,"start":"04:00"},"period":{"days":1}}', async () => {
  lastBackup = subsequenceFirstFromEnd(('' + getState('0_userdata.0.Server.letztes_FutroBackup').lc), 3);
  Heute = subsequenceFirstFromEnd(('' + getState('0_userdata.0.Zeitfunktionen.Tagesnummer').lc), 3);
  // 60Tage=5184000
  if (Heute - lastBackup > 2592000) {
    sendTo("telegram.0", "send", {
        text: 'Das letzte Backup vom Server auf USB-Festplatte ist schon älter als 2 Monate.',
        user: 'Chriss'
    });
  } else {
    console.warn('Das Backup ist noch nicht zu alt. ');
  }
});
on({ id: '0_userdata.0.Server.letztes_FutroBackup' /* letztes FutroBackup */, change: 'ne' }, async (obj) => {
  let value = obj.state.val;
  let oldValue = obj.oldState.val;
  console.warn(('Backup erfolgreich! ' + String((obj.state ? obj.state.val : ""))));
  sendTo("telegram.0", "send", {
      text: 'Backup erfolgreich. Bitte Festplatte abstecken! ',
      user: 'Chriss'
  });
});

//JTNDeG1sJTIweG1sbnMlM0QlMjJodHRwcyUzQSUyRiUyRmRldmVsb3BlcnMuZ29vZ2xlLmNvbSUyRmJsb2NrbHklMkZ4bWwlMjIlM0UlM0N2YXJpYWJsZXMlM0UlM0N2YXJpYWJsZSUyMHR5cGUlM0QlMjJjcm9uJTIyJTIwaWQlM0QlMjJGdXRyb0JhY2t1cCUyMiUzRUZ1dHJvQmFja3VwJTNDJTJGdmFyaWFibGUlM0UlM0N2YXJpYWJsZSUyMGlkJTNEJTIyJTIzKCU1RXYxSnZhbWMyRms2aDgocUclMjUlMjIlM0VsYXN0QmFja3VwJTNDJTJGdmFyaWFibGUlM0UlM0N2YXJpYWJsZSUyMGlkJTNEJTIyKldKaWRmd1g0Lnl6alolNjBsJTYwKTFuJTIyJTNFSGV1dGUlM0MlMkZ2YXJpYWJsZSUzRSUzQyUyRnZhcmlhYmxlcyUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMnNjaGVkdWxlX2NyZWF0ZSUyMiUyMGlkJTNEJTIyUWZpc1ZDT3VGTCUyQ2dhY1c5JTJDMShEJTIyJTIweCUzRCUyMjYyJTIyJTIweSUzRCUyMi0yNSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5BTUUlMjIlM0VGdXRyb0JhY2t1cCUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyU0NIRURVTEUlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIyZmllbGRfY3JvbiUyMiUyMGlkJTNEJTIyTTVwbzZLJTI0TUwlM0JWWiUzQXBoMHFKRUMlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJDUk9OJTIyJTNFJTdCJTIydGltZSUyMiUzQSU3QiUyMmV4YWN0VGltZSUyMiUzQXRydWUlMkMlMjJzdGFydCUyMiUzQSUyMjA0JTNBMDAlMjIlN0QlMkMlMjJwZXJpb2QlMjIlM0ElN0IlMjJkYXlzJTIyJTNBMSU3RCU3RCUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0NzdGF0ZW1lbnQlMjBuYW1lJTNEJTIyU1RBVEVNRU5UJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIydmFyaWFibGVzX3NldCUyMiUyMGlkJTNEJTIyKG56JTVETTcxV2slMjMzVjlCRiU1RS5xZnQlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJWQVIlMjIlMjBpZCUzRCUyMiUyMyglNUV2MUp2YW1jMkZrNmg4KHFHJTI1JTIyJTNFbGFzdEJhY2t1cCUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ0ZXh0X2dldFN1YnN0cmluZyUyMiUyMGlkJTNEJTIyJTNBanBCQyU2MCU3QyUzQlJrVHpGJTVCIVNHdDROJTIyJTNFJTNDbXV0YXRpb24lMjBhdDElM0QlMjJmYWxzZSUyMiUyMGF0MiUzRCUyMnRydWUlMjIlM0UlM0MlMkZtdXRhdGlvbiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMldIRVJFMSUyMiUzRUZJUlNUJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJXSEVSRTIlMjIlM0VGUk9NX0VORCUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyU1RSSU5HJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udmVydF90b3N0cmluZyUyMiUyMGlkJTNEJTIyd2lCMkdLLn5XcmZOJTYwKlM1V00lM0RpJTIyJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJnZXRfdmFsdWUlMjIlMjBpZCUzRCUyMlhwJTNCUjAlNUJ1Z3ouKm5ZKSU3RC0lM0ZObFMlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJBVFRSJTIyJTNFbGMlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk9JRCUyMiUzRTBfdXNlcmRhdGEuMC5TZXJ2ZXIubGV0enRlc19GdXRyb0JhY2t1cCUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJBVDIlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJtYXRoX251bWJlciUyMiUyMGlkJTNEJTIyJTQwJTI1Y3Vhd09ZSnQhakglM0RpV3F+c2QlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOVU0lMjIlM0U0JTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ25leHQlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ2YXJpYWJsZXNfc2V0JTIyJTIwaWQlM0QlMjI2eGtjY1ZVJTNBSmI4LWpkJTJDWnQlNDA2eSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlZBUiUyMiUyMGlkJTNEJTIyKldKaWRmd1g0Lnl6alolNjBsJTYwKTFuJTIyJTNFSGV1dGUlM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlZBTFVFJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIydGV4dF9nZXRTdWJzdHJpbmclMjIlMjBpZCUzRCUyMldDUDNDLXNkaSUyMy5DMGVkJTI1UlYlM0RDJTIyJTNFJTNDbXV0YXRpb24lMjBhdDElM0QlMjJmYWxzZSUyMiUyMGF0MiUzRCUyMnRydWUlMjIlM0UlM0MlMkZtdXRhdGlvbiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMldIRVJFMSUyMiUzRUZJUlNUJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJXSEVSRTIlMjIlM0VGUk9NX0VORCUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyU1RSSU5HJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udmVydF90b3N0cmluZyUyMiUyMGlkJTNEJTIyWnBhd0p6LSp6JTdCaUlfT04lM0Z2eEY3JTIyJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJnZXRfdmFsdWUlMjIlMjBpZCUzRCUyMkoqJTNCUDIlNDB1dHpjaDlnVSU2MCU3Q3NPSlIlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJBVFRSJTIyJTNFbGMlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk9JRCUyMiUzRTBfdXNlcmRhdGEuMC5aZWl0ZnVua3Rpb25lbi5UYWdlc251bW1lciUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJBVDIlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJtYXRoX251bWJlciUyMiUyMGlkJTNEJTIyJTdEJTJDTCUyMyUzRmMlN0QqMDlKUmIlMkMlNjBQJTNEYSUzRlklMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOVU0lMjIlM0U0JTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ25leHQlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJjb21tZW50JTIyJTIwaWQlM0QlMjJuJTNBU0wlNUVnJTI0ZFYlM0YlM0FRdl9Rck5nJTI0cSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkNPTU1FTlQlMjIlM0U2MFRhZ2UlM0Q1MTg0MDAwJTNDJTJGZmllbGQlM0UlM0NuZXh0JTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udHJvbHNfaWYlMjIlMjBpZCUzRCUyMiU1RVQlM0FFUiUyNXdSY0pxVyUzRCU3QlNYM3NKWCUyMiUzRSUzQ211dGF0aW9uJTIwZWxzZSUzRCUyMjElMjIlM0UlM0MlMkZtdXRhdGlvbiUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMklGMCUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmxvZ2ljX2NvbXBhcmUlMjIlMjBpZCUzRCUyMm5WeUFiTmVoUEEwJTNEYXVJdXZPJTJDeiUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk9QJTIyJTNFR1QlM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMkElMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJtYXRoX2FyaXRobWV0aWMlMjIlMjBpZCUzRCUyMnM4JTdETSUzRDFlVSU2MCU1QmZad1l1RE9NLTIlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJPUCUyMiUzRU1JTlVTJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJBJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMm1hdGhfbnVtYmVyJTIyJTIwaWQlM0QlMjI1SiUyMyUzRmIlMjNlMkclN0NLciUyQkF2YVJwMSU0MCUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5VTSUyMiUzRTElM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMnZhcmlhYmxlc19nZXQlMjIlMjBpZCUzRCUyMiUzQX5BJTYwU3ZKcHV0JTI0akpDWiUyRi1ZQSUyMyUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlZBUiUyMiUyMGlkJTNEJTIyKldKaWRmd1g0Lnl6alolNjBsJTYwKTFuJTIyJTNFSGV1dGUlM0MlMkZmaWVsZCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJCJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMm1hdGhfbnVtYmVyJTIyJTIwaWQlM0QlMjItJTVCKDdTJTVFb1k2TGhpKUtvRFUwVlYlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOVU0lMjIlM0UxJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ2YXJpYWJsZXNfZ2V0JTIyJTIwaWQlM0QlMjJOJTNBQmpfekIybTR0T1BFZGEqcVklNDAlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJWQVIlMjIlMjBpZCUzRCUyMiUyMyglNUV2MUp2YW1jMkZrNmg4KHFHJTI1JTIyJTNFbGFzdEJhY2t1cCUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJCJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIybWF0aF9udW1iZXIlMjIlMjBpZCUzRCUyMiU2MHBZYiozcyUyMyUzQl8lMkIlMkZjIWtBJTNCJTJCQ0IlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOVU0lMjIlM0UyNTkyMDAwJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ3N0YXRlbWVudCUyMG5hbWUlM0QlMjJETzAlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ0ZWxlZ3JhbSUyMiUyMGlkJTNEJTIyJTdEQkFoLVklMjUwJTdCYSU1RSU0MGclMkNwckhoQiU3QiUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMklOU1RBTkNFJTIyJTNFLjAlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkxPRyUyMiUzRSUzQyUyRmZpZWxkJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyU0lMRU5UJTIyJTNFRkFMU0UlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlBBUlNFTU9ERSUyMiUzRWRlZmF1bHQlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkVTQ0FQSU5HJTIyJTNFRkFMU0UlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkRJU0FCTEVfV0VCX1BBR0VfUFJFVklFVyUyMiUzRUZBTFNFJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJNRVNTQUdFJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMnRleHQlMjIlMjBpZCUzRCUyMiU1QmhnJTYwTkslN0I5a3lzaGR2WTIlNDBzJTNCJTNEJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVEVYVCUyMiUzRXRleHQlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMnRleHQlMjIlMjBpZCUzRCUyMiU3Ql9hJTdDTEZiclZxanNCcGYlN0JNYXklNUUlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJURVhUJTIyJTNFRGFzJTIwbGV0enRlJTIwQmFja3VwJTIwdm9tJTIwU2VydmVyJTIwYXVmJTIwVVNCLUZlc3RwbGF0dGUlMjBpc3QlMjBzY2hvbiUyMCVDMyVBNGx0ZXIlMjBhbHMlMjAyJTIwTW9uYXRlLiUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlVTRVJOQU1FJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIydGV4dCUyMiUyMGlkJTNEJTIyJTNCLVMwJTdEZ1NsazcyUVVNVWklMkNaVjklMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJURVhUJTIyJTNFQ2hyaXNzJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZzdGF0ZW1lbnQlM0UlM0NzdGF0ZW1lbnQlMjBuYW1lJTNEJTIyRUxTRSUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmRlYnVnJTIyJTIwaWQlM0QlMjJmKnV3cyFkOHllJTYwREZXZW9kbX4lMjQlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJTZXZlcml0eSUyMiUzRXdhcm4lM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlRFWFQlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIydGV4dCUyMiUyMGlkJTNEJTIyJTNESSU3QjElMkYyJTI1JTQwUEhJbnBaJTI0JTI0LUN6UCUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlRFWFQlMjIlM0VEYXMlMjBCYWNrdXAlMjBpc3QlMjBub2NoJTIwbmljaHQlMjB6dSUyMGFsdC4lMjAlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZzdGF0ZW1lbnQlM0UlM0MlMkZibG9jayUzRSUzQyUyRm5leHQlM0UlM0MlMkZibG9jayUzRSUzQyUyRm5leHQlM0UlM0MlMkZibG9jayUzRSUzQyUyRm5leHQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnN0YXRlbWVudCUzRSUzQ25leHQlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJvbiUyMiUyMGlkJTNEJTIyJTQwVVN0JTIzLSl5JTdDTFQ0aWktViUzRHhYKCUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk9JRCUyMiUzRTBfdXNlcmRhdGEuMC5TZXJ2ZXIubGV0enRlc19GdXRyb0JhY2t1cCUzQyUyRmZpZWxkJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQ09ORElUSU9OJTIyJTNFbmUlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkFDS19DT05ESVRJT04lMjIlM0UlM0MlMkZmaWVsZCUzRSUzQ3N0YXRlbWVudCUyMG5hbWUlM0QlMjJTVEFURU1FTlQlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJkZWJ1ZyUyMiUyMGlkJTNEJTIyRHV3VVklNjAhJTI0Wld2emhMSDIlMjRiKnElMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJTZXZlcml0eSUyMiUzRXdhcm4lM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlRFWFQlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIydGV4dCUyMiUyMGlkJTNEJTIyN2RDViUyQlNEXyUyRjFfODkzViEyQiU0MFUlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJURVhUJTIyJTNFQmFja3VwJTIwZXJmb2xncmVpY2ghJTIwJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ0ZXh0X2pvaW4lMjIlMjBpZCUzRCUyMjglN0JMaip2cGclMkYtVFR2JTNBTFBrVGZ2JTIyJTNFJTNDbXV0YXRpb24lMjBpdGVtcyUzRCUyMjIlMjIlM0UlM0MlMkZtdXRhdGlvbiUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMkFERDAlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ0ZXh0JTIyJTIwaWQlM0QlMjJYNyUzRjElMkM2JTdDdzIlN0M5Xy4lMjRnUnUpa0YlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJURVhUJTIyJTNFQmFja3VwJTIwZXJmb2xncmVpY2ghJTIwJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyQUREMSUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMm9uX3NvdXJjZSUyMiUyMGlkJTNEJTIyY2N1djgwTyUyNCUyQ3dEJTdCJTVEZjFsJTVCSjklNUUlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJBVFRSJTIyJTNFc3RhdGUudmFsJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ25leHQlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ0ZWxlZ3JhbSUyMiUyMGlkJTNEJTIycSUzQVVzTEZZX2RoMUklNjAlMkM4X2ZKdE0lMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJJTlNUQU5DRSUyMiUzRS4wJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJMT0clMjIlM0UlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlNJTEVOVCUyMiUzRUZBTFNFJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJQQVJTRU1PREUlMjIlM0VkZWZhdWx0JTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJFU0NBUElORyUyMiUzRUZBTFNFJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJESVNBQkxFX1dFQl9QQUdFX1BSRVZJRVclMjIlM0VGQUxTRSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyTUVTU0FHRSUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJ0ZXh0JTIyJTIwaWQlM0QlMjIxeTNqJTVFJTYwJTdDRCUyNCU2MDhOM2IlN0Rsc3MlM0YyJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVEVYVCUyMiUzRUJhY2t1cCUyMGVyZm9sZ3JlaWNoLiUyMEJpdHRlJTIwRmVzdHBsYXR0ZSUyMGFic3RlY2tlbiElMjAlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVVNFUk5BTUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ0ZXh0JTIyJTIwaWQlM0QlMjJDRFBWbFNBSyUzQWUhWiElNURjJTJDX1RlJTQwJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVEVYVCUyMiUzRUNocmlzcyUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGbmV4dCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGc3RhdGVtZW50JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZuZXh0JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ4bWwlM0U=