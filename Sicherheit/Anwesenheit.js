var AnwesenheitTV, AnwesenheitChriss, AnwesenheitLisa, Anwesenheit;


on({ id: [].concat(['ping.0.ioBroker-Futro.192_168_1_101.alive']).concat(['ping.0.ioBroker-Futro.192_168_1_221.alive']).concat(['ping.0.ioBroker-Futro.192_168_1_99.alive']).concat(['ping.0.ioBroker-Futro.192_168_1_220.alive']), change: 'ne' }, async (obj) => {
  // Checkt die Anwesenheit
  if (getState('ping.0.ioBroker-Futro.192_168_1_109.alive').val) {
    AnwesenheitTV = 1;
  } else {
    AnwesenheitTV = 0;
  }
  if (getState('ping.0.ioBroker-Futro.192_168_1_99.alive').val) {
    AnwesenheitChriss = 1;
  } else {
    AnwesenheitChriss = 0;
  }
  if (getState('ping.0.ioBroker-Futro.192_168_1_101.alive').val) {
    AnwesenheitChriss = 1;
  } else {
    AnwesenheitChriss = 0;
  }
  if (getState('ping.0.ioBroker-Futro.192_168_1_220.alive').val) {
    AnwesenheitLisa = 1;
  } else {
    AnwesenheitLisa = 0;
  }
  if (getState('ping.0.ioBroker-Futro.192_168_1_221.alive').val) {
    AnwesenheitLisa = 1;
  } else {
    AnwesenheitLisa = 0;
  }
  Anwesenheit = AnwesenheitChriss + AnwesenheitLisa + AnwesenheitTV;
  setState('0_userdata.0.Anwesenheit.Devices' /* Devices */, Anwesenheit, true);
  // Setzt die Anwesenheit
  if (Anwesenheit < 1) {
    setState('0_userdata.0.Anwesenheit.Anwesenheit' /* Anwesenheit */, false, true);
  } else {
    setState('0_userdata.0.Anwesenheit.Anwesenheit' /* Anwesenheit */, true, true);
  }
});

//JTNDeG1sJTIweG1sbnMlM0QlMjJodHRwcyUzQSUyRiUyRmRldmVsb3BlcnMuZ29vZ2xlLmNvbSUyRmJsb2NrbHklMkZ4bWwlMjIlM0UlM0N2YXJpYWJsZXMlM0UlM0N2YXJpYWJsZSUyMGlkJTNEJTIyS0QpSzM5NSUzREJzNEclNDBSJTdEdjI1JTNGdSUyMiUzRUFud2VzZW5oZWl0VFYlM0MlMkZ2YXJpYWJsZSUzRSUzQ3ZhcmlhYmxlJTIwaWQlM0QlMjJCVkhjbyU3REJUKHUlMjVVVGNlJTNGWFElN0QlNUUlMjIlM0VBbndlc2VuaGVpdENocmlzcyUzQyUyRnZhcmlhYmxlJTNFJTNDdmFyaWFibGUlMjBpZCUzRCUyMmJnJTVFJTNERCUzRCUzRCUyM3FMMURRRilYRiU2MGwzJTIyJTNFQW53ZXNlbmhlaXRMaXNhJTNDJTJGdmFyaWFibGUlM0UlM0N2YXJpYWJsZSUyMGlkJTNEJTIyNGZGRipISSU3Ql9FR1RpaCp5JTdESXoxJTIyJTNFQW53ZXNlbmhlaXQlM0MlMkZ2YXJpYWJsZSUzRSUzQyUyRnZhcmlhYmxlcyUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMm9uX2V4dCUyMiUyMGlkJTNEJTIyQSUzQjlMZkgySiU3RHBQeUpZd0R6VFVGJTIyJTIweCUzRCUyMjI4NyUyMiUyMHklM0QlMjItMzU1JTIyJTNFJTNDbXV0YXRpb24lMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMTk5OSUyRnhodG1sJTIyJTIwaXRlbXMlM0QlMjI0JTIyJTNFJTNDJTJGbXV0YXRpb24lM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJDT05ESVRJT04lMjIlM0VuZSUzQyUyRmZpZWxkJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQUNLX0NPTkRJVElPTiUyMiUzRSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyT0lEMCUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJmaWVsZF9vaWQlMjIlMjBpZCUzRCUyMjQlN0RvJTNBc3o2QUFwLSUyNDRRJTNBRTJTbE4lMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJvaWQlMjIlM0VwaW5nLjAuaW9Ccm9rZXItRnV0cm8uMTkyXzE2OF8xXzEwMS5hbGl2ZSUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJPSUQxJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMmZpZWxkX29pZCUyMiUyMGlkJTNEJTIyJTNBaWdPJTdDVERhJTIzRHEwJTdEN051SSUyNUJLJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyb2lkJTIyJTNFcGluZy4wLmlvQnJva2VyLUZ1dHJvLjE5Ml8xNjhfMV8yMjEuYWxpdmUlM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyT0lEMiUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJmaWVsZF9vaWQlMjIlMjBpZCUzRCUyMiU3RHp+JTNBYSU3QkE2S2k5alNxSCUyQ35OIXclMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJvaWQlMjIlM0VwaW5nLjAuaW9Ccm9rZXItRnV0cm8uMTkyXzE2OF8xXzk5LmFsaXZlJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0MlMkZ2YWx1ZSUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMk9JRDMlMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIyZmllbGRfb2lkJTIyJTIwaWQlM0QlMjIxT0pTQihzYTklMjR0c1VzZ3Q3NCElN0QlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJvaWQlMjIlM0VwaW5nLjAuaW9Ccm9rZXItRnV0cm8uMTkyXzE2OF8xXzIyMC5hbGl2ZSUzQyUyRmZpZWxkJTNFJTNDJTJGc2hhZG93JTNFJTNDJTJGdmFsdWUlM0UlM0NzdGF0ZW1lbnQlMjBuYW1lJTNEJTIyU1RBVEVNRU5UJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29tbWVudCUyMiUyMGlkJTNEJTIybTklNURzLmxMMUFxbiUzQndqalVMJTVCJTQwJTVEJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyQ09NTUVOVCUyMiUzRUNoZWNrdCUyMGRpZSUyMEFud2VzZW5oZWl0JTNDJTJGZmllbGQlM0UlM0NuZXh0JTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udHJvbHNfaWYlMjIlMjBpZCUzRCUyMnMoJTYwKCU1QkxYKGYlMjUqJTI1NVZUJTVEWUclM0JOJTIyJTNFJTNDbXV0YXRpb24lMjBlbHNlJTNEJTIyMSUyMiUzRSUzQyUyRm11dGF0aW9uJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIySUYwJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyZ2V0X3ZhbHVlJTIyJTIwaWQlM0QlMjJHIUJaOUolN0RmMVlLaEg0Q0FfJTNCbVYlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJBVFRSJTIyJTNFdmFsJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJPSUQlMjIlM0VwaW5nLjAuaW9Ccm9rZXItRnV0cm8uMTkyXzE2OF8xXzEwOS5hbGl2ZSUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ3N0YXRlbWVudCUyMG5hbWUlM0QlMjJETzAlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ2YXJpYWJsZXNfc2V0JTIyJTIwaWQlM0QlMjJfJTJGJTQwN2tIZWNKJTdEJTVEJTdDdHMlMkN5VC1GWCUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlZBUiUyMiUyMGlkJTNEJTIyS0QpSzM5NSUzREJzNEclNDBSJTdEdjI1JTNGdSUyMiUzRUFud2VzZW5oZWl0VFYlM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlZBTFVFJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIybWF0aF9udW1iZXIlMjIlMjBpZCUzRCUyMmc3aioxU2V+bVFwSGdBSkklN0R1MiUyNSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5VTSUyMiUzRTElM0MlMkZmaWVsZCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0MlMkZibG9jayUzRSUzQyUyRnN0YXRlbWVudCUzRSUzQ3N0YXRlbWVudCUyMG5hbWUlM0QlMjJFTFNFJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIydmFyaWFibGVzX3NldCUyMiUyMGlkJTNEJTIyS3YlN0JJbSU1QiU3QjVNNSU1RGpHTCU3QlR2JTJGdmwlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJWQVIlMjIlMjBpZCUzRCUyMktEKUszOTUlM0RCczRHJTQwUiU3RHYyNSUzRnUlMjIlM0VBbndlc2VuaGVpdFRWJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJWQUxVRSUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMm1hdGhfbnVtYmVyJTIyJTIwaWQlM0QlMjI2aiU0MHMlMjUlNUJPZS1NSDglNDBjZlJRQyFfJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyTlVNJTIyJTNFMCUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGc3RhdGVtZW50JTNFJTNDbmV4dCUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmNvbnRyb2xzX2lmJTIyJTIwaWQlM0QlMjJraiUzRGFOdUFvejZseCU0MCU0MGtvbW5FKSUyMiUzRSUzQ211dGF0aW9uJTIwZWxzZSUzRCUyMjElMjIlM0UlM0MlMkZtdXRhdGlvbiUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMklGMCUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmdldF92YWx1ZSUyMiUyMGlkJTNEJTIyZDVhcnZiSnlnLmslM0JFMmopaFB6WCUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkFUVFIlMjIlM0V2YWwlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk9JRCUyMiUzRXBpbmcuMC5pb0Jyb2tlci1GdXRyby4xOTJfMTY4XzFfOTkuYWxpdmUlM0MlMkZmaWVsZCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0NzdGF0ZW1lbnQlMjBuYW1lJTNEJTIyRE8wJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIydmFyaWFibGVzX3NldCUyMiUyMGlkJTNEJTIyRHpZciUyMyUzQUlVZDVEOSglMjNhKHpDJTJGJTI1JTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVkFSJTIyJTIwaWQlM0QlMjJCVkhjbyU3REJUKHUlMjVVVGNlJTNGWFElN0QlNUUlMjIlM0VBbndlc2VuaGVpdENocmlzcyUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJtYXRoX251bWJlciUyMiUyMGlkJTNEJTIyb1ZKaCU3QiUzRmNnUkZSdWlQWi4qJTdCOWMlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOVU0lMjIlM0UxJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZzdGF0ZW1lbnQlM0UlM0NzdGF0ZW1lbnQlMjBuYW1lJTNEJTIyRUxTRSUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMnZhcmlhYmxlc19zZXQlMjIlMjBpZCUzRCUyMlN3R0QlNUIzJTNCSkklM0FDJTQwZm5TLiU2MGFjdCUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlZBUiUyMiUyMGlkJTNEJTIyQlZIY28lN0RCVCh1JTI1VVRjZSUzRlhRJTdEJTVFJTIyJTNFQW53ZXNlbmhlaXRDaHJpc3MlM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlZBTFVFJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIybWF0aF9udW1iZXIlMjIlMjBpZCUzRCUyMiUyQ08lNUQlMjNVMDk1VCU3RGtVeiU3QyUzRlJLJTVESlclMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOVU0lMjIlM0UwJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZzdGF0ZW1lbnQlM0UlM0NuZXh0JTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udHJvbHNfaWYlMjIlMjBpZCUzRCUyMmUlMkZrQSU3QyU2MERyVVROb0x4cmllOHREJTIyJTNFJTNDbXV0YXRpb24lMjBlbHNlJTNEJTIyMSUyMiUzRSUzQyUyRm11dGF0aW9uJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIySUYwJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyZ2V0X3ZhbHVlJTIyJTIwaWQlM0QlMjJNJTJDKEw0JTdCU0tqJTQwcElaR09PbzNuayUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkFUVFIlMjIlM0V2YWwlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk9JRCUyMiUzRXBpbmcuMC5pb0Jyb2tlci1GdXRyby4xOTJfMTY4XzFfMTAxLmFsaXZlJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDc3RhdGVtZW50JTIwbmFtZSUzRCUyMkRPMCUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMnZhcmlhYmxlc19zZXQlMjIlMjBpZCUzRCUyMnZfNiU3Q2clNUVyIUhKNTdOVUhvJTYwJTNGJTdDJTIzJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVkFSJTIyJTIwaWQlM0QlMjJCVkhjbyU3REJUKHUlMjVVVGNlJTNGWFElN0QlNUUlMjIlM0VBbndlc2VuaGVpdENocmlzcyUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJtYXRoX251bWJlciUyMiUyMGlkJTNEJTIyU1klMkJiY0VidlVkNFhsJTI1MiUyNUlrJTNCJTdEJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyTlVNJTIyJTNFMSUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGc3RhdGVtZW50JTNFJTNDc3RhdGVtZW50JTIwbmFtZSUzRCUyMkVMU0UlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ2YXJpYWJsZXNfc2V0JTIyJTIwaWQlM0QlMjJOZ3BIMUQ4NiUzRjFuUnEwZUtpaHQ1JTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVkFSJTIyJTIwaWQlM0QlMjJCVkhjbyU3REJUKHUlMjVVVGNlJTNGWFElN0QlNUUlMjIlM0VBbndlc2VuaGVpdENocmlzcyUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJtYXRoX251bWJlciUyMiUyMGlkJTNEJTIyaE0wOEdmanlyTSUyNUwlMkIlN0JmJTJDJTNGJTJGUDAlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOVU0lMjIlM0UwJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZzdGF0ZW1lbnQlM0UlM0NuZXh0JTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyY29udHJvbHNfaWYlMjIlMjBpZCUzRCUyMjVsSilZdWhlZyUyQlBTJTNEVk9EeEIlMkY1JTIyJTNFJTNDbXV0YXRpb24lMjBlbHNlJTNEJTIyMSUyMiUzRSUzQyUyRm11dGF0aW9uJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIySUYwJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyZ2V0X3ZhbHVlJTIyJTIwaWQlM0QlMjJBbFI3QUwlMjUlMjQlN0Q5WUclN0JGJTYwUGx1b3MlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJBVFRSJTIyJTNFdmFsJTNDJTJGZmllbGQlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJPSUQlMjIlM0VwaW5nLjAuaW9Ccm9rZXItRnV0cm8uMTkyXzE2OF8xXzIyMC5hbGl2ZSUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ3N0YXRlbWVudCUyMG5hbWUlM0QlMjJETzAlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ2YXJpYWJsZXNfc2V0JTIyJTIwaWQlM0QlMjJCaGlHJTJDcUlzdkhCMCUzQSU3QyUyMyU3RHZ1JTJCJTI1JTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVkFSJTIyJTIwaWQlM0QlMjJiZyU1RSUzREQlM0QlM0QlMjNxTDFEUUYpWEYlNjBsMyUyMiUzRUFud2VzZW5oZWl0TGlzYSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJtYXRoX251bWJlciUyMiUyMGlkJTNEJTIydUslNUQtY1Exc1FaLXolNUUlMjQtd18zViUyNCUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5VTSUyMiUzRTElM0MlMkZmaWVsZCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0MlMkZibG9jayUzRSUzQyUyRnN0YXRlbWVudCUzRSUzQ3N0YXRlbWVudCUyMG5hbWUlM0QlMjJFTFNFJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIydmFyaWFibGVzX3NldCUyMiUyMGlkJTNEJTIyM3klNjBqdlQ2ZFMuckMlMjMzNHhtVl9jJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVkFSJTIyJTIwaWQlM0QlMjJiZyU1RSUzREQlM0QlM0QlMjNxTDFEUUYpWEYlNjBsMyUyMiUzRUFud2VzZW5oZWl0TGlzYSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJtYXRoX251bWJlciUyMiUyMGlkJTNEJTIyRGpyJTYwVmMlN0NNJTJCJTI1eDdwd2ZGVXRoNyUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5VTSUyMiUzRTAlM0MlMkZmaWVsZCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0MlMkZibG9jayUzRSUzQyUyRnN0YXRlbWVudCUzRSUzQ25leHQlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJjb250cm9sc19pZiUyMiUyMGlkJTNEJTIyMjElM0IlMjMlNDB1blBVeXpQZHMlN0IlN0RBZ2EpJTIyJTNFJTNDbXV0YXRpb24lMjBlbHNlJTNEJTIyMSUyMiUzRSUzQyUyRm11dGF0aW9uJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIySUYwJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIyZ2V0X3ZhbHVlJTIyJTIwaWQlM0QlMjIhYS1+JTdETzI2JTdDQ0olN0JvX1dtaElmLSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkFUVFIlMjIlM0V2YWwlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk9JRCUyMiUzRXBpbmcuMC5pb0Jyb2tlci1GdXRyby4xOTJfMTY4XzFfMjIxLmFsaXZlJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDc3RhdGVtZW50JTIwbmFtZSUzRCUyMkRPMCUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMnZhcmlhYmxlc19zZXQlMjIlMjBpZCUzRCUyMm4lMkYlMjNnNiUzQXVsVFZKdkElN0Npa1VocyUzQiUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlZBUiUyMiUyMGlkJTNEJTIyYmclNUUlM0REJTNEJTNEJTIzcUwxRFFGKVhGJTYwbDMlMjIlM0VBbndlc2VuaGVpdExpc2ElM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlZBTFVFJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIybWF0aF9udW1iZXIlMjIlMjBpZCUzRCUyMiUyQkpPX1NxWSU0MDFKcjhOZHEtNmdVdSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5VTSUyMiUzRTElM0MlMkZmaWVsZCUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0MlMkZibG9jayUzRSUzQyUyRnN0YXRlbWVudCUzRSUzQ3N0YXRlbWVudCUyMG5hbWUlM0QlMjJFTFNFJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIydmFyaWFibGVzX3NldCUyMiUyMGlkJTNEJTIyRmglMkYlN0RHJTNGbiUyMzhQZFlRKHY2bWVHayUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlZBUiUyMiUyMGlkJTNEJTIyYmclNUUlM0REJTNEJTNEJTIzcUwxRFFGKVhGJTYwbDMlMjIlM0VBbndlc2VuaGVpdExpc2ElM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlZBTFVFJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIybWF0aF9udW1iZXIlMjIlMjBpZCUzRCUyMnl4NF9pdU42VCU0MEYlM0FZWiU0MHYtJTVCJTdCJTYwJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyTlVNJTIyJTNFMCUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGc3RhdGVtZW50JTNFJTNDbmV4dCUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMnZhcmlhYmxlc19zZXQlMjIlMjBpZCUzRCUyMlYxNl93LiU2MDllViUzRG03R0NQVTdBaSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMlZBUiUyMiUyMGlkJTNEJTIyNGZGRipISSU3Ql9FR1RpaCp5JTdESXoxJTIyJTNFQW53ZXNlbmhlaXQlM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMlZBTFVFJTIyJTNFJTNDYmxvY2slMjB0eXBlJTNEJTIybWF0aF9hcml0aG1ldGljJTIyJTIwaWQlM0QlMjJjaWUlNUJMJTIzJTJCUE12SjZ0Sm1YWWYpVyUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk9QJTIyJTNFQUREJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJBJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMm1hdGhfbnVtYmVyJTIyJTIwaWQlM0QlMjJUekVmSyUyQ1QlMkZ3JTdCeiU1QjdNNCUyQ3hLWDklMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOVU0lMjIlM0UxJTNDJTJGZmllbGQlM0UlM0MlMkZzaGFkb3clM0UlM0NibG9jayUyMHR5cGUlM0QlMjJtYXRoX2FyaXRobWV0aWMlMjIlMjBpZCUzRCUyMkZweEElM0RMalMlN0NDISUzQmRMaGN2V1U4JTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyT1AlMjIlM0VBREQlM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMkElMjIlM0UlM0NzaGFkb3clMjB0eXBlJTNEJTIybWF0aF9udW1iZXIlMjIlMjBpZCUzRCUyMmVJT3o1dlMlN0RnTShXJTQwRyFqJTNEdCUzQiUyMyUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5VTSUyMiUzRTElM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMnZhcmlhYmxlc19nZXQlMjIlMjBpZCUzRCUyMlFqSWolMjVlT1olMkZVJTVEd1FIbyUyQ1lYcEolMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJWQVIlMjIlMjBpZCUzRCUyMkJWSGNvJTdEQlQodSUyNVVUY2UlM0ZYUSU3RCU1RSUyMiUzRUFud2VzZW5oZWl0Q2hyaXNzJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyQiUyMiUzRSUzQ3NoYWRvdyUyMHR5cGUlM0QlMjJtYXRoX251bWJlciUyMiUyMGlkJTNEJTIyNU9WMGJvJTJDdktsakxkcDdSMypZVCUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5VTSUyMiUzRTElM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMnZhcmlhYmxlc19nZXQlMjIlMjBpZCUzRCUyMmMlMjNFa2U1MXBIMigqJTVCJTJCZSUzRkwlM0I3JTJDJTIyJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyVkFSJTIyJTIwaWQlM0QlMjJiZyU1RSUzREQlM0QlM0QlMjNxTDFEUUYpWEYlNjBsMyUyMiUzRUFud2VzZW5oZWl0TGlzYSUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGdmFsdWUlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJCJTIyJTNFJTNDc2hhZG93JTIwdHlwZSUzRCUyMm1hdGhfbnVtYmVyJTIyJTIwaWQlM0QlMjI0YiUyNXQtM0JFQWlmJTdEcWVaYSEyJTQwcyUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk5VTSUyMiUzRTElM0MlMkZmaWVsZCUzRSUzQyUyRnNoYWRvdyUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMnZhcmlhYmxlc19nZXQlMjIlMjBpZCUzRCUyMkohemtyeiU1QlYlM0RjWHdJLWNxZCUyQyUzQkwlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJWQVIlMjIlMjBpZCUzRCUyMktEKUszOTUlM0RCczRHJTQwUiU3RHYyNSUzRnUlMjIlM0VBbndlc2VuaGVpdFRWJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ25leHQlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ1cGRhdGUlMjIlMjBpZCUzRCUyMjAlMkNZcVRDVzBMJTQwVyUyM35HZkxnVG1BJTIyJTNFJTNDbXV0YXRpb24lMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMTk5OSUyRnhodG1sJTIyJTIwZGVsYXlfaW5wdXQlM0QlMjJmYWxzZSUyMiUzRSUzQyUyRm11dGF0aW9uJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyT0lEJTIyJTNFMF91c2VyZGF0YS4wLkFud2VzZW5oZWl0LkRldmljZXMlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMldJVEhfREVMQVklMjIlM0VGQUxTRSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ2YXJpYWJsZXNfZ2V0JTIyJTIwaWQlM0QlMjIqJTNBKHlFNGxmaVlicSUyRmMlMkM0JTdEWSU3RHElMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJWQVIlMjIlMjBpZCUzRCUyMjRmRkYqSEklN0JfRUdUaWgqeSU3REl6MSUyMiUzRUFud2VzZW5oZWl0JTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDbmV4dCUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmNvbW1lbnQlMjIlMjBpZCUzRCUyMmY0SDRHcDQlN0MlMjR+LjJDUTMlMjMlNjBEWkslMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJDT01NRU5UJTIyJTNFU2V0enQlMjBkaWUlMjBBbndlc2VuaGVpdCUzQyUyRmZpZWxkJTNFJTNDbmV4dCUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmNvbnRyb2xzX2lmJTIyJTIwaWQlM0QlMjJoWEVRJTJGJTdETWNUQSUyNEc1cCU1RTUlM0F+LkYlMjIlM0UlM0NtdXRhdGlvbiUyMGVsc2UlM0QlMjIxJTIyJTNFJTNDJTJGbXV0YXRpb24lM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJJRjAlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJsb2dpY19jb21wYXJlJTIyJTIwaWQlM0QlMjIyVCUzRn4lN0JYNmM1KFNRd1p5TiUzQXNYSiUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk9QJTIyJTNFTFQlM0MlMkZmaWVsZCUzRSUzQ3ZhbHVlJTIwbmFtZSUzRCUyMkElMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ2YXJpYWJsZXNfZ2V0JTIyJTIwaWQlM0QlMjJNRHpjOSUyNHglMkM0WEVHLXMlM0QlMjNoJTQwQTklMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJWQVIlMjIlMjBpZCUzRCUyMjRmRkYqSEklN0JfRUdUaWgqeSU3REl6MSUyMiUzRUFud2VzZW5oZWl0JTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyQiUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMm1hdGhfbnVtYmVyJTIyJTIwaWQlM0QlMjIlNUIwemVVaDglN0RrS18lMkZLaWclNDB4biU3Q1QlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJOVU0lMjIlM0UxJTNDJTJGZmllbGQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnZhbHVlJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQ3N0YXRlbWVudCUyMG5hbWUlM0QlMjJETzAlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ1cGRhdGUlMjIlMjBpZCUzRCUyMlpIJTdCJTQwYjVZJTNGJTI1RSg5RUdWJTNBcXp2XyUyMiUzRSUzQ211dGF0aW9uJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjE5OTklMkZ4aHRtbCUyMiUyMGRlbGF5X2lucHV0JTNEJTIyZmFsc2UlMjIlM0UlM0MlMkZtdXRhdGlvbiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMk9JRCUyMiUzRTBfdXNlcmRhdGEuMC5Bbndlc2VuaGVpdC5Bbndlc2VuaGVpdCUzQyUyRmZpZWxkJTNFJTNDZmllbGQlMjBuYW1lJTNEJTIyV0lUSF9ERUxBWSUyMiUzRUZBTFNFJTNDJTJGZmllbGQlM0UlM0N2YWx1ZSUyMG5hbWUlM0QlMjJWQUxVRSUyMiUzRSUzQ2Jsb2NrJTIwdHlwZSUzRCUyMmxvZ2ljX2Jvb2xlYW4lMjIlMjBpZCUzRCUyMiFlYWE0c19PZSUyNXN+ekhLJTdEcmJKUSUyMiUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMkJPT0wlMjIlM0VGQUxTRSUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGc3RhdGVtZW50JTNFJTNDc3RhdGVtZW50JTIwbmFtZSUzRCUyMkVMU0UlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJ1cGRhdGUlMjIlMjBpZCUzRCUyMmFPWnRFJTNBbCUyNUxPJTJDTkQpNjElMjVnNDklMjIlM0UlM0NtdXRhdGlvbiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYxOTk5JTJGeGh0bWwlMjIlMjBkZWxheV9pbnB1dCUzRCUyMmZhbHNlJTIyJTNFJTNDJTJGbXV0YXRpb24lM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJPSUQlMjIlM0UwX3VzZXJkYXRhLjAuQW53ZXNlbmhlaXQuQW53ZXNlbmhlaXQlM0MlMkZmaWVsZCUzRSUzQ2ZpZWxkJTIwbmFtZSUzRCUyMldJVEhfREVMQVklMjIlM0VGQUxTRSUzQyUyRmZpZWxkJTNFJTNDdmFsdWUlMjBuYW1lJTNEJTIyVkFMVUUlMjIlM0UlM0NibG9jayUyMHR5cGUlM0QlMjJsb2dpY19ib29sZWFuJTIyJTIwaWQlM0QlMjIlM0IzeldnJTI1RXNfSiU3RFFORFMlN0IlNUI5VHQlMjIlM0UlM0NmaWVsZCUyMG5hbWUlM0QlMjJCT09MJTIyJTNFVFJVRSUzQyUyRmZpZWxkJTNFJTNDJTJGYmxvY2slM0UlM0MlMkZ2YWx1ZSUzRSUzQyUyRmJsb2NrJTNFJTNDJTJGc3RhdGVtZW50JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZuZXh0JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZuZXh0JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZuZXh0JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZuZXh0JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZuZXh0JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZuZXh0JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZuZXh0JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZuZXh0JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZuZXh0JTNFJTNDJTJGYmxvY2slM0UlM0MlMkZzdGF0ZW1lbnQlM0UlM0MlMkZibG9jayUzRSUzQyUyRnhtbCUzRQ==
