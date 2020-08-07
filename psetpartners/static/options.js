// This replicates data defined in the database and/or python source code, you need to update both

const studentPreferences = [ "start", "together", "forum", "size", "departments_affinity", "year_affinity", "gender_affinity" ];

const resetOptionValue = '__reset__';

const departmentsOptions = [
      { label: '1 Civil and Environmental Engineering', value: '1', },
      { label: '2 Mechanical Engineering', value: '2', },
      { label: '3 Materials Science and Engineering', value: '3', },
      { label: '4 Architecture', value: '4', },
      { label: '5 Chemistry', value: '5', },
      { label: '6 EECS', value: '6', },
      { label: '7 Biology', value: '7', },
      { label: '8 Physics', value: '8', },
      { label: '9 Brain and Cognitive Sciences', value: '9', },
      { label: '10 Chemical Engineering', value: '10', },
      { label: '11 Urban Studies and Planning', value: '11', },
      { label: '12 EAPS', value: '12', },
      { label: '14 Economics', value: '14', },
      { label: '15 Management', value: '15', },
      { label: '16 Aeronautics and Astronautics', value: '16', },
      { label: '17 Political Science', value: '17', },
      { label: '18 Mathematics', value: '18', },
      { label: '20 Biological Engineering', value: '20', },
      { label: '21 Humanities', value: '21', },
      { label: '21A Anthropology', value: '21A', },
      { label: '21E/21S Humanities + Engineering/Science', value: '21E/21S', },
      { label: '21G Global Studies and Languages', value: '21G', },
      { label: '21H History', value: '21H', },
      { label: '21L Literature', value: '21L', },
      { label: '21M Music and Theater Arts', value: '21M', },
      { label: '22 Nuclear Science and Engineering', value: '22', },
      { label: '24 Linguistics and Philosophy', value: '24', },
      { label: 'CMS/21W Comparative Media Studies/Writing', value: 'CMS/21W', },
      { label: 'IDS Data, Systems, and Society', value: 'IDS', },
      { label: 'IMES Medical Engineering and Science', value: 'IMES', },
      { label: 'MAS Media Arts and Sciences', value: 'MAS', },
      { label: 'STS Science, Technology, and Society', value: 'STS', },
  ];
  const yearOptions = [
      { label: '', value: resetOptionValue },
      { label: 'first year', value: '1', },
      { label: 'sophomore', value: '2', },
      { label: 'junior', value: '3', },
      { label: 'senior or super senior', value: '4', },
      { label: 'graduate student', value: '5', },
  ];
  const genderOptions = [
      { label: '', value: resetOptionValue },
      { label: 'female', value: 'female', },
      { label: 'male', value: 'male', },
      { label: 'non-binary', value: 'non-binary', },
  ];
  const locationOptions = [
      { label: 'on campus or near MIT', value: 'near', },
      { label: 'not hear MIT', value: 'far', },
  ];
  const timezoneOptions = [
      { label: 'MIT time', value: 'MIT', },
      { label: '(MIT -07:00) Pacific/Midway', value: 'Pacific/Midway', },
      { label: '(MIT -07:00) Pacific/Niue', value: 'Pacific/Niue', },
      { label: '(MIT -07:00) Pacific/Pago_Pago', value: 'Pacific/Pago_Pago', },
      { label: '(MIT -06:00) Pacific/Honolulu', value: 'Pacific/Honolulu', },
      { label: '(MIT -06:00) Pacific/Rarotonga', value: 'Pacific/Rarotonga', },
      { label: '(MIT -06:00) Pacific/Tahiti', value: 'Pacific/Tahiti', },
      { label: '(MIT -06:00) US/Hawaii', value: 'US/Hawaii', },
      { label: '(MIT -05:30) Pacific/Marquesas', value: 'Pacific/Marquesas', },
      { label: '(MIT -05:00) America/Adak', value: 'America/Adak', },
      { label: '(MIT -05:00) Pacific/Gambier', value: 'Pacific/Gambier', },
      { label: '(MIT -04:00) America/Anchorage', value: 'America/Anchorage', },
      { label: '(MIT -04:00) America/Juneau', value: 'America/Juneau', },
      { label: '(MIT -04:00) America/Metlakatla', value: 'America/Metlakatla', },
      { label: '(MIT -04:00) America/Nome', value: 'America/Nome', },
      { label: '(MIT -04:00) America/Sitka', value: 'America/Sitka', },
      { label: '(MIT -04:00) America/Yakutat', value: 'America/Yakutat', },
      { label: '(MIT -04:00) Pacific/Pitcairn', value: 'Pacific/Pitcairn', },
      { label: '(MIT -04:00) US/Alaska', value: 'US/Alaska', },
      { label: '(MIT -03:00) America/Creston', value: 'America/Creston', },
      { label: '(MIT -03:00) America/Dawson', value: 'America/Dawson', },
      { label: '(MIT -03:00) America/Dawson_Creek', value: 'America/Dawson_Creek', },
      { label: '(MIT -03:00) America/Fort_Nelson', value: 'America/Fort_Nelson', },
      { label: '(MIT -03:00) America/Hermosillo', value: 'America/Hermosillo', },
      { label: '(MIT -03:00) America/Los_Angeles', value: 'America/Los_Angeles', },
      { label: '(MIT -03:00) America/Phoenix', value: 'America/Phoenix', },
      { label: '(MIT -03:00) America/Tijuana', value: 'America/Tijuana', },
      { label: '(MIT -03:00) America/Vancouver', value: 'America/Vancouver', },
      { label: '(MIT -03:00) America/Whitehorse', value: 'America/Whitehorse', },
      { label: '(MIT -03:00) Canada/Pacific', value: 'Canada/Pacific', },
      { label: '(MIT -03:00) US/Arizona', value: 'US/Arizona', },
      { label: '(MIT -03:00) US/Pacific', value: 'US/Pacific', },
      { label: '(MIT -02:00) America/Belize', value: 'America/Belize', },
      { label: '(MIT -02:00) America/Boise', value: 'America/Boise', },
      { label: '(MIT -02:00) America/Cambridge_Bay', value: 'America/Cambridge_Bay', },
      { label: '(MIT -02:00) America/Chihuahua', value: 'America/Chihuahua', },
      { label: '(MIT -02:00) America/Costa_Rica', value: 'America/Costa_Rica', },
      { label: '(MIT -02:00) America/Denver', value: 'America/Denver', },
      { label: '(MIT -02:00) America/Edmonton', value: 'America/Edmonton', },
      { label: '(MIT -02:00) America/El_Salvador', value: 'America/El_Salvador', },
      { label: '(MIT -02:00) America/Guatemala', value: 'America/Guatemala', },
      { label: '(MIT -02:00) America/Inuvik', value: 'America/Inuvik', },
      { label: '(MIT -02:00) America/Managua', value: 'America/Managua', },
      { label: '(MIT -02:00) America/Mazatlan', value: 'America/Mazatlan', },
      { label: '(MIT -02:00) America/Ojinaga', value: 'America/Ojinaga', },
      { label: '(MIT -02:00) America/Regina', value: 'America/Regina', },
      { label: '(MIT -02:00) America/Swift_Current', value: 'America/Swift_Current', },
      { label: '(MIT -02:00) America/Tegucigalpa', value: 'America/Tegucigalpa', },
      { label: '(MIT -02:00) America/Yellowknife', value: 'America/Yellowknife', },
      { label: '(MIT -02:00) Canada/Mountain', value: 'Canada/Mountain', },
      { label: '(MIT -02:00) Pacific/Easter', value: 'Pacific/Easter', },
      { label: '(MIT -02:00) Pacific/Galapagos', value: 'Pacific/Galapagos', },
      { label: '(MIT -02:00) US/Mountain', value: 'US/Mountain', },
      { label: '(MIT -01:00) America/Atikokan', value: 'America/Atikokan', },
      { label: '(MIT -01:00) America/Bahia_Banderas', value: 'America/Bahia_Banderas', },
      { label: '(MIT -01:00) America/Bogota', value: 'America/Bogota', },
      { label: '(MIT -01:00) America/Cancun', value: 'America/Cancun', },
      { label: '(MIT -01:00) America/Cayman', value: 'America/Cayman', },
      { label: '(MIT -01:00) America/Chicago', value: 'America/Chicago', },
      { label: '(MIT -01:00) America/Eirunepe', value: 'America/Eirunepe', },
      { label: '(MIT -01:00) America/Guayaquil', value: 'America/Guayaquil', },
      { label: '(MIT -01:00) America/Indiana/Knox', value: 'America/Indiana/Knox', },
      { label: '(MIT -01:00) America/Indiana/Tell_City', value: 'America/Indiana/Tell_City', },
      { label: '(MIT -01:00) America/Jamaica', value: 'America/Jamaica', },
      { label: '(MIT -01:00) America/Lima', value: 'America/Lima', },
      { label: '(MIT -01:00) America/Matamoros', value: 'America/Matamoros', },
      { label: '(MIT -01:00) America/Menominee', value: 'America/Menominee', },
      { label: '(MIT -01:00) America/Merida', value: 'America/Merida', },
      { label: '(MIT -01:00) America/Mexico_City', value: 'America/Mexico_City', },
      { label: '(MIT -01:00) America/Monterrey', value: 'America/Monterrey', },
      { label: '(MIT -01:00) America/North_Dakota/Beulah', value: 'America/North_Dakota/Beulah', },
      { label: '(MIT -01:00) America/North_Dakota/Center', value: 'America/North_Dakota/Center', },
      { label: '(MIT -01:00) America/North_Dakota/New_Salem', value: 'America/North_Dakota/New_Salem', },
      { label: '(MIT -01:00) America/Panama', value: 'America/Panama', },
      { label: '(MIT -01:00) America/Rainy_River', value: 'America/Rainy_River', },
      { label: '(MIT -01:00) America/Rankin_Inlet', value: 'America/Rankin_Inlet', },
      { label: '(MIT -01:00) America/Resolute', value: 'America/Resolute', },
      { label: '(MIT -01:00) America/Rio_Branco', value: 'America/Rio_Branco', },
      { label: '(MIT -01:00) America/Winnipeg', value: 'America/Winnipeg', },
      { label: '(MIT -01:00) Canada/Central', value: 'Canada/Central', },
      { label: '(MIT -01:00) US/Central', value: 'US/Central', },
      { label: '(MIT +00:00) America/Anguilla', value: 'America/Anguilla', },
      { label: '(MIT +00:00) America/Antigua', value: 'America/Antigua', },
      { label: '(MIT +00:00) America/Aruba', value: 'America/Aruba', },
      { label: '(MIT +00:00) America/Asuncion', value: 'America/Asuncion', },
      { label: '(MIT +00:00) America/Barbados', value: 'America/Barbados', },
      { label: '(MIT +00:00) America/Blanc-Sablon', value: 'America/Blanc-Sablon', },
      { label: '(MIT +00:00) America/Boa_Vista', value: 'America/Boa_Vista', },
      { label: '(MIT +00:00) America/Campo_Grande', value: 'America/Campo_Grande', },
      { label: '(MIT +00:00) America/Caracas', value: 'America/Caracas', },
      { label: '(MIT +00:00) America/Cuiaba', value: 'America/Cuiaba', },
      { label: '(MIT +00:00) America/Curacao', value: 'America/Curacao', },
      { label: '(MIT +00:00) America/Detroit', value: 'America/Detroit', },
      { label: '(MIT +00:00) America/Dominica', value: 'America/Dominica', },
      { label: '(MIT +00:00) America/Grand_Turk', value: 'America/Grand_Turk', },
      { label: '(MIT +00:00) America/Grenada', value: 'America/Grenada', },
      { label: '(MIT +00:00) America/Guadeloupe', value: 'America/Guadeloupe', },
      { label: '(MIT +00:00) America/Guyana', value: 'America/Guyana', },
      { label: '(MIT +00:00) America/Havana', value: 'America/Havana', },
      { label: '(MIT +00:00) America/Indiana/Indianapolis', value: 'America/Indiana/Indianapolis', },
      { label: '(MIT +00:00) America/Indiana/Marengo', value: 'America/Indiana/Marengo', },
      { label: '(MIT +00:00) America/Indiana/Petersburg', value: 'America/Indiana/Petersburg', },
      { label: '(MIT +00:00) America/Indiana/Vevay', value: 'America/Indiana/Vevay', },
      { label: '(MIT +00:00) America/Indiana/Vincennes', value: 'America/Indiana/Vincennes', },
      { label: '(MIT +00:00) America/Indiana/Winamac', value: 'America/Indiana/Winamac', },
      { label: '(MIT +00:00) America/Iqaluit', value: 'America/Iqaluit', },
      { label: '(MIT +00:00) America/Kentucky/Louisville', value: 'America/Kentucky/Louisville', },
      { label: '(MIT +00:00) America/Kentucky/Monticello', value: 'America/Kentucky/Monticello', },
      { label: '(MIT +00:00) America/Kralendijk', value: 'America/Kralendijk', },
      { label: '(MIT +00:00) America/La_Paz', value: 'America/La_Paz', },
      { label: '(MIT +00:00) America/Lower_Princes', value: 'America/Lower_Princes', },
      { label: '(MIT +00:00) America/Manaus', value: 'America/Manaus', },
      { label: '(MIT +00:00) America/Marigot', value: 'America/Marigot', },
      { label: '(MIT +00:00) America/Martinique', value: 'America/Martinique', },
      { label: '(MIT +00:00) America/Montserrat', value: 'America/Montserrat', },
      { label: '(MIT +00:00) America/Nassau', value: 'America/Nassau', },
      { label: '(MIT +00:00) America/New_York', value: 'America/New_York', },
      { label: '(MIT +00:00) America/Nipigon', value: 'America/Nipigon', },
      { label: '(MIT +00:00) America/Pangnirtung', value: 'America/Pangnirtung', },
      { label: '(MIT +00:00) America/Port-au-Prince', value: 'America/Port-au-Prince', },
      { label: '(MIT +00:00) America/Port_of_Spain', value: 'America/Port_of_Spain', },
      { label: '(MIT +00:00) America/Porto_Velho', value: 'America/Porto_Velho', },
      { label: '(MIT +00:00) America/Puerto_Rico', value: 'America/Puerto_Rico', },
      { label: '(MIT +00:00) America/Santiago', value: 'America/Santiago', },
      { label: '(MIT +00:00) America/Santo_Domingo', value: 'America/Santo_Domingo', },
      { label: '(MIT +00:00) America/St_Barthelemy', value: 'America/St_Barthelemy', },
      { label: '(MIT +00:00) America/St_Kitts', value: 'America/St_Kitts', },
      { label: '(MIT +00:00) America/St_Lucia', value: 'America/St_Lucia', },
      { label: '(MIT +00:00) America/St_Thomas', value: 'America/St_Thomas', },
      { label: '(MIT +00:00) America/St_Vincent', value: 'America/St_Vincent', },
      { label: '(MIT +00:00) America/Thunder_Bay', value: 'America/Thunder_Bay', },
      { label: '(MIT +00:00) America/Toronto', value: 'America/Toronto', },
      { label: '(MIT +00:00) America/Tortola', value: 'America/Tortola', },
      { label: '(MIT +00:00) Canada/Eastern', value: 'Canada/Eastern', },
      { label: '(MIT +00:00) US/Eastern', value: 'US/Eastern', },
      { label: '(MIT +01:00) America/Araguaina', value: 'America/Araguaina', },
      { label: '(MIT +01:00) America/Argentina/Buenos_Aires', value: 'America/Argentina/Buenos_Aires', },
      { label: '(MIT +01:00) America/Argentina/Catamarca', value: 'America/Argentina/Catamarca', },
      { label: '(MIT +01:00) America/Argentina/Cordoba', value: 'America/Argentina/Cordoba', },
      { label: '(MIT +01:00) America/Argentina/Jujuy', value: 'America/Argentina/Jujuy', },
      { label: '(MIT +01:00) America/Argentina/La_Rioja', value: 'America/Argentina/La_Rioja', },
      { label: '(MIT +01:00) America/Argentina/Mendoza', value: 'America/Argentina/Mendoza', },
      { label: '(MIT +01:00) America/Argentina/Rio_Gallegos', value: 'America/Argentina/Rio_Gallegos', },
      { label: '(MIT +01:00) America/Argentina/Salta', value: 'America/Argentina/Salta', },
      { label: '(MIT +01:00) America/Argentina/San_Juan', value: 'America/Argentina/San_Juan', },
      { label: '(MIT +01:00) America/Argentina/San_Luis', value: 'America/Argentina/San_Luis', },
      { label: '(MIT +01:00) America/Argentina/Tucuman', value: 'America/Argentina/Tucuman', },
      { label: '(MIT +01:00) America/Argentina/Ushuaia', value: 'America/Argentina/Ushuaia', },
      { label: '(MIT +01:00) America/Bahia', value: 'America/Bahia', },
      { label: '(MIT +01:00) America/Belem', value: 'America/Belem', },
      { label: '(MIT +01:00) America/Cayenne', value: 'America/Cayenne', },
      { label: '(MIT +01:00) America/Fortaleza', value: 'America/Fortaleza', },
      { label: '(MIT +01:00) America/Glace_Bay', value: 'America/Glace_Bay', },
      { label: '(MIT +01:00) America/Goose_Bay', value: 'America/Goose_Bay', },
      { label: '(MIT +01:00) America/Halifax', value: 'America/Halifax', },
      { label: '(MIT +01:00) America/Maceio', value: 'America/Maceio', },
      { label: '(MIT +01:00) America/Moncton', value: 'America/Moncton', },
      { label: '(MIT +01:00) America/Montevideo', value: 'America/Montevideo', },
      { label: '(MIT +01:00) America/Paramaribo', value: 'America/Paramaribo', },
      { label: '(MIT +01:00) America/Punta_Arenas', value: 'America/Punta_Arenas', },
      { label: '(MIT +01:00) America/Recife', value: 'America/Recife', },
      { label: '(MIT +01:00) America/Santarem', value: 'America/Santarem', },
      { label: '(MIT +01:00) America/Sao_Paulo', value: 'America/Sao_Paulo', },
      { label: '(MIT +01:00) America/Thule', value: 'America/Thule', },
      { label: '(MIT +01:00) Antarctica/Palmer', value: 'Antarctica/Palmer', },
      { label: '(MIT +01:00) Antarctica/Rothera', value: 'Antarctica/Rothera', },
      { label: '(MIT +01:00) Atlantic/Bermuda', value: 'Atlantic/Bermuda', },
      { label: '(MIT +01:00) Atlantic/Stanley', value: 'Atlantic/Stanley', },
      { label: '(MIT +01:00) Canada/Atlantic', value: 'Canada/Atlantic', },
      { label: '(MIT +01:30) America/St_Johns', value: 'America/St_Johns', },
      { label: '(MIT +01:30) Canada/Newfoundland', value: 'Canada/Newfoundland', },
      { label: '(MIT +02:00) America/Godthab', value: 'America/Godthab', },
      { label: '(MIT +02:00) America/Miquelon', value: 'America/Miquelon', },
      { label: '(MIT +02:00) America/Noronha', value: 'America/Noronha', },
      { label: '(MIT +02:00) Atlantic/South_Georgia', value: 'Atlantic/South_Georgia', },
      { label: '(MIT +03:00) Atlantic/Cape_Verde', value: 'Atlantic/Cape_Verde', },
      { label: '(MIT +04:00) Africa/Abidjan', value: 'Africa/Abidjan', },
      { label: '(MIT +04:00) Africa/Accra', value: 'Africa/Accra', },
      { label: '(MIT +04:00) Africa/Bamako', value: 'Africa/Bamako', },
      { label: '(MIT +04:00) Africa/Banjul', value: 'Africa/Banjul', },
      { label: '(MIT +04:00) Africa/Bissau', value: 'Africa/Bissau', },
      { label: '(MIT +04:00) Africa/Conakry', value: 'Africa/Conakry', },
      { label: '(MIT +04:00) Africa/Dakar', value: 'Africa/Dakar', },
      { label: '(MIT +04:00) Africa/Freetown', value: 'Africa/Freetown', },
      { label: '(MIT +04:00) Africa/Lome', value: 'Africa/Lome', },
      { label: '(MIT +04:00) Africa/Monrovia', value: 'Africa/Monrovia', },
      { label: '(MIT +04:00) Africa/Nouakchott', value: 'Africa/Nouakchott', },
      { label: '(MIT +04:00) Africa/Ouagadougou', value: 'Africa/Ouagadougou', },
      { label: '(MIT +04:00) America/Danmarkshavn', value: 'America/Danmarkshavn', },
      { label: '(MIT +04:00) America/Scoresbysund', value: 'America/Scoresbysund', },
      { label: '(MIT +04:00) Atlantic/Azores', value: 'Atlantic/Azores', },
      { label: '(MIT +04:00) Atlantic/Reykjavik', value: 'Atlantic/Reykjavik', },
      { label: '(MIT +04:00) Atlantic/St_Helena', value: 'Atlantic/St_Helena', },
      { label: '(MIT +04:00) GMT', value: 'GMT', },
      { label: '(MIT +04:00) UTC', value: 'UTC', },
      { label: '(MIT +05:00) Africa/Algiers', value: 'Africa/Algiers', },
      { label: '(MIT +05:00) Africa/Bangui', value: 'Africa/Bangui', },
      { label: '(MIT +05:00) Africa/Brazzaville', value: 'Africa/Brazzaville', },
      { label: '(MIT +05:00) Africa/Casablanca', value: 'Africa/Casablanca', },
      { label: '(MIT +05:00) Africa/Douala', value: 'Africa/Douala', },
      { label: '(MIT +05:00) Africa/El_Aaiun', value: 'Africa/El_Aaiun', },
      { label: '(MIT +05:00) Africa/Kinshasa', value: 'Africa/Kinshasa', },
      { label: '(MIT +05:00) Africa/Lagos', value: 'Africa/Lagos', },
      { label: '(MIT +05:00) Africa/Libreville', value: 'Africa/Libreville', },
      { label: '(MIT +05:00) Africa/Luanda', value: 'Africa/Luanda', },
      { label: '(MIT +05:00) Africa/Malabo', value: 'Africa/Malabo', },
      { label: '(MIT +05:00) Africa/Ndjamena', value: 'Africa/Ndjamena', },
      { label: '(MIT +05:00) Africa/Niamey', value: 'Africa/Niamey', },
      { label: '(MIT +05:00) Africa/Porto-Novo', value: 'Africa/Porto-Novo', },
      { label: '(MIT +05:00) Africa/Sao_Tome', value: 'Africa/Sao_Tome', },
      { label: '(MIT +05:00) Africa/Tunis', value: 'Africa/Tunis', },
      { label: '(MIT +05:00) Atlantic/Canary', value: 'Atlantic/Canary', },
      { label: '(MIT +05:00) Atlantic/Faroe', value: 'Atlantic/Faroe', },
      { label: '(MIT +05:00) Atlantic/Madeira', value: 'Atlantic/Madeira', },
      { label: '(MIT +05:00) Europe/Dublin', value: 'Europe/Dublin', },
      { label: '(MIT +05:00) Europe/Guernsey', value: 'Europe/Guernsey', },
      { label: '(MIT +05:00) Europe/Isle_of_Man', value: 'Europe/Isle_of_Man', },
      { label: '(MIT +05:00) Europe/Jersey', value: 'Europe/Jersey', },
      { label: '(MIT +05:00) Europe/Lisbon', value: 'Europe/Lisbon', },
      { label: '(MIT +05:00) Europe/London', value: 'Europe/London', },
      { label: '(MIT +06:00) Africa/Blantyre', value: 'Africa/Blantyre', },
      { label: '(MIT +06:00) Africa/Bujumbura', value: 'Africa/Bujumbura', },
      { label: '(MIT +06:00) Africa/Cairo', value: 'Africa/Cairo', },
      { label: '(MIT +06:00) Africa/Ceuta', value: 'Africa/Ceuta', },
      { label: '(MIT +06:00) Africa/Gaborone', value: 'Africa/Gaborone', },
      { label: '(MIT +06:00) Africa/Harare', value: 'Africa/Harare', },
      { label: '(MIT +06:00) Africa/Johannesburg', value: 'Africa/Johannesburg', },
      { label: '(MIT +06:00) Africa/Khartoum', value: 'Africa/Khartoum', },
      { label: '(MIT +06:00) Africa/Kigali', value: 'Africa/Kigali', },
      { label: '(MIT +06:00) Africa/Lubumbashi', value: 'Africa/Lubumbashi', },
      { label: '(MIT +06:00) Africa/Lusaka', value: 'Africa/Lusaka', },
      { label: '(MIT +06:00) Africa/Maputo', value: 'Africa/Maputo', },
      { label: '(MIT +06:00) Africa/Maseru', value: 'Africa/Maseru', },
      { label: '(MIT +06:00) Africa/Mbabane', value: 'Africa/Mbabane', },
      { label: '(MIT +06:00) Africa/Tripoli', value: 'Africa/Tripoli', },
      { label: '(MIT +06:00) Africa/Windhoek', value: 'Africa/Windhoek', },
      { label: '(MIT +06:00) Antarctica/Troll', value: 'Antarctica/Troll', },
      { label: '(MIT +06:00) Arctic/Longyearbyen', value: 'Arctic/Longyearbyen', },
      { label: '(MIT +06:00) Europe/Amsterdam', value: 'Europe/Amsterdam', },
      { label: '(MIT +06:00) Europe/Andorra', value: 'Europe/Andorra', },
      { label: '(MIT +06:00) Europe/Belgrade', value: 'Europe/Belgrade', },
      { label: '(MIT +06:00) Europe/Berlin', value: 'Europe/Berlin', },
      { label: '(MIT +06:00) Europe/Bratislava', value: 'Europe/Bratislava', },
      { label: '(MIT +06:00) Europe/Brussels', value: 'Europe/Brussels', },
      { label: '(MIT +06:00) Europe/Budapest', value: 'Europe/Budapest', },
      { label: '(MIT +06:00) Europe/Busingen', value: 'Europe/Busingen', },
      { label: '(MIT +06:00) Europe/Copenhagen', value: 'Europe/Copenhagen', },
      { label: '(MIT +06:00) Europe/Gibraltar', value: 'Europe/Gibraltar', },
      { label: '(MIT +06:00) Europe/Kaliningrad', value: 'Europe/Kaliningrad', },
      { label: '(MIT +06:00) Europe/Ljubljana', value: 'Europe/Ljubljana', },
      { label: '(MIT +06:00) Europe/Luxembourg', value: 'Europe/Luxembourg', },
      { label: '(MIT +06:00) Europe/Madrid', value: 'Europe/Madrid', },
      { label: '(MIT +06:00) Europe/Malta', value: 'Europe/Malta', },
      { label: '(MIT +06:00) Europe/Monaco', value: 'Europe/Monaco', },
      { label: '(MIT +06:00) Europe/Oslo', value: 'Europe/Oslo', },
      { label: '(MIT +06:00) Europe/Paris', value: 'Europe/Paris', },
      { label: '(MIT +06:00) Europe/Podgorica', value: 'Europe/Podgorica', },
      { label: '(MIT +06:00) Europe/Prague', value: 'Europe/Prague', },
      { label: '(MIT +06:00) Europe/Rome', value: 'Europe/Rome', },
      { label: '(MIT +06:00) Europe/San_Marino', value: 'Europe/San_Marino', },
      { label: '(MIT +06:00) Europe/Sarajevo', value: 'Europe/Sarajevo', },
      { label: '(MIT +06:00) Europe/Skopje', value: 'Europe/Skopje', },
      { label: '(MIT +06:00) Europe/Stockholm', value: 'Europe/Stockholm', },
      { label: '(MIT +06:00) Europe/Tirane', value: 'Europe/Tirane', },
      { label: '(MIT +06:00) Europe/Vaduz', value: 'Europe/Vaduz', },
      { label: '(MIT +06:00) Europe/Vatican', value: 'Europe/Vatican', },
      { label: '(MIT +06:00) Europe/Vienna', value: 'Europe/Vienna', },
      { label: '(MIT +06:00) Europe/Warsaw', value: 'Europe/Warsaw', },
      { label: '(MIT +06:00) Europe/Zagreb', value: 'Europe/Zagreb', },
      { label: '(MIT +06:00) Europe/Zurich', value: 'Europe/Zurich', },
      { label: '(MIT +07:00) Africa/Addis_Ababa', value: 'Africa/Addis_Ababa', },
      { label: '(MIT +07:00) Africa/Asmara', value: 'Africa/Asmara', },
      { label: '(MIT +07:00) Africa/Dar_es_Salaam', value: 'Africa/Dar_es_Salaam', },
      { label: '(MIT +07:00) Africa/Djibouti', value: 'Africa/Djibouti', },
      { label: '(MIT +07:00) Africa/Juba', value: 'Africa/Juba', },
      { label: '(MIT +07:00) Africa/Kampala', value: 'Africa/Kampala', },
      { label: '(MIT +07:00) Africa/Mogadishu', value: 'Africa/Mogadishu', },
      { label: '(MIT +07:00) Africa/Nairobi', value: 'Africa/Nairobi', },
      { label: '(MIT +07:00) Antarctica/Syowa', value: 'Antarctica/Syowa', },
      { label: '(MIT +07:00) Asia/Aden', value: 'Asia/Aden', },
      { label: '(MIT +07:00) Asia/Amman', value: 'Asia/Amman', },
      { label: '(MIT +07:00) Asia/Baghdad', value: 'Asia/Baghdad', },
      { label: '(MIT +07:00) Asia/Bahrain', value: 'Asia/Bahrain', },
      { label: '(MIT +07:00) Asia/Beirut', value: 'Asia/Beirut', },
      { label: '(MIT +07:00) Asia/Damascus', value: 'Asia/Damascus', },
      { label: '(MIT +07:00) Asia/Famagusta', value: 'Asia/Famagusta', },
      { label: '(MIT +07:00) Asia/Gaza', value: 'Asia/Gaza', },
      { label: '(MIT +07:00) Asia/Hebron', value: 'Asia/Hebron', },
      { label: '(MIT +07:00) Asia/Jerusalem', value: 'Asia/Jerusalem', },
      { label: '(MIT +07:00) Asia/Kuwait', value: 'Asia/Kuwait', },
      { label: '(MIT +07:00) Asia/Nicosia', value: 'Asia/Nicosia', },
      { label: '(MIT +07:00) Asia/Qatar', value: 'Asia/Qatar', },
      { label: '(MIT +07:00) Asia/Riyadh', value: 'Asia/Riyadh', },
      { label: '(MIT +07:00) Europe/Athens', value: 'Europe/Athens', },
      { label: '(MIT +07:00) Europe/Bucharest', value: 'Europe/Bucharest', },
      { label: '(MIT +07:00) Europe/Chisinau', value: 'Europe/Chisinau', },
      { label: '(MIT +07:00) Europe/Helsinki', value: 'Europe/Helsinki', },
      { label: '(MIT +07:00) Europe/Istanbul', value: 'Europe/Istanbul', },
      { label: '(MIT +07:00) Europe/Kiev', value: 'Europe/Kiev', },
      { label: '(MIT +07:00) Europe/Kirov', value: 'Europe/Kirov', },
      { label: '(MIT +07:00) Europe/Mariehamn', value: 'Europe/Mariehamn', },
      { label: '(MIT +07:00) Europe/Minsk', value: 'Europe/Minsk', },
      { label: '(MIT +07:00) Europe/Moscow', value: 'Europe/Moscow', },
      { label: '(MIT +07:00) Europe/Riga', value: 'Europe/Riga', },
      { label: '(MIT +07:00) Europe/Simferopol', value: 'Europe/Simferopol', },
      { label: '(MIT +07:00) Europe/Sofia', value: 'Europe/Sofia', },
      { label: '(MIT +07:00) Europe/Tallinn', value: 'Europe/Tallinn', },
      { label: '(MIT +07:00) Europe/Uzhgorod', value: 'Europe/Uzhgorod', },
      { label: '(MIT +07:00) Europe/Vilnius', value: 'Europe/Vilnius', },
      { label: '(MIT +07:00) Europe/Zaporozhye', value: 'Europe/Zaporozhye', },
      { label: '(MIT +07:00) Indian/Antananarivo', value: 'Indian/Antananarivo', },
      { label: '(MIT +07:00) Indian/Comoro', value: 'Indian/Comoro', },
      { label: '(MIT +07:00) Indian/Mayotte', value: 'Indian/Mayotte', },
      { label: '(MIT +08:00) Asia/Baku', value: 'Asia/Baku', },
      { label: '(MIT +08:00) Asia/Dubai', value: 'Asia/Dubai', },
      { label: '(MIT +08:00) Asia/Muscat', value: 'Asia/Muscat', },
      { label: '(MIT +08:00) Asia/Tbilisi', value: 'Asia/Tbilisi', },
      { label: '(MIT +08:00) Asia/Yerevan', value: 'Asia/Yerevan', },
      { label: '(MIT +08:00) Europe/Astrakhan', value: 'Europe/Astrakhan', },
      { label: '(MIT +08:00) Europe/Samara', value: 'Europe/Samara', },
      { label: '(MIT +08:00) Europe/Saratov', value: 'Europe/Saratov', },
      { label: '(MIT +08:00) Europe/Ulyanovsk', value: 'Europe/Ulyanovsk', },
      { label: '(MIT +08:00) Europe/Volgograd', value: 'Europe/Volgograd', },
      { label: '(MIT +08:00) Indian/Mahe', value: 'Indian/Mahe', },
      { label: '(MIT +08:00) Indian/Mauritius', value: 'Indian/Mauritius', },
      { label: '(MIT +08:00) Indian/Reunion', value: 'Indian/Reunion', },
      { label: '(MIT +08:30) Asia/Kabul', value: 'Asia/Kabul', },
      { label: '(MIT +08:30) Asia/Tehran', value: 'Asia/Tehran', },
      { label: '(MIT +09:00) Antarctica/Mawson', value: 'Antarctica/Mawson', },
      { label: '(MIT +09:00) Asia/Aqtau', value: 'Asia/Aqtau', },
      { label: '(MIT +09:00) Asia/Aqtobe', value: 'Asia/Aqtobe', },
      { label: '(MIT +09:00) Asia/Ashgabat', value: 'Asia/Ashgabat', },
      { label: '(MIT +09:00) Asia/Atyrau', value: 'Asia/Atyrau', },
      { label: '(MIT +09:00) Asia/Dushanbe', value: 'Asia/Dushanbe', },
      { label: '(MIT +09:00) Asia/Karachi', value: 'Asia/Karachi', },
      { label: '(MIT +09:00) Asia/Oral', value: 'Asia/Oral', },
      { label: '(MIT +09:00) Asia/Samarkand', value: 'Asia/Samarkand', },
      { label: '(MIT +09:00) Asia/Tashkent', value: 'Asia/Tashkent', },
      { label: '(MIT +09:00) Asia/Yekaterinburg', value: 'Asia/Yekaterinburg', },
      { label: '(MIT +09:00) Indian/Kerguelen', value: 'Indian/Kerguelen', },
      { label: '(MIT +09:00) Indian/Maldives', value: 'Indian/Maldives', },
      { label: '(MIT +09:30) Asia/Colombo', value: 'Asia/Colombo', },
      { label: '(MIT +09:30) Asia/Kolkata', value: 'Asia/Kolkata', },
      { label: '(MIT +09:45) Asia/Kathmandu', value: 'Asia/Kathmandu', },
      { label: '(MIT +10:00) Antarctica/Vostok', value: 'Antarctica/Vostok', },
      { label: '(MIT +10:00) Asia/Almaty', value: 'Asia/Almaty', },
      { label: '(MIT +10:00) Asia/Bishkek', value: 'Asia/Bishkek', },
      { label: '(MIT +10:00) Asia/Dhaka', value: 'Asia/Dhaka', },
      { label: '(MIT +10:00) Asia/Omsk', value: 'Asia/Omsk', },
      { label: '(MIT +10:00) Asia/Qyzylorda', value: 'Asia/Qyzylorda', },
      { label: '(MIT +10:00) Asia/Thimphu', value: 'Asia/Thimphu', },
      { label: '(MIT +10:00) Asia/Urumqi', value: 'Asia/Urumqi', },
      { label: '(MIT +10:00) Indian/Chagos', value: 'Indian/Chagos', },
      { label: '(MIT +10:30) Asia/Yangon', value: 'Asia/Yangon', },
      { label: '(MIT +10:30) Indian/Cocos', value: 'Indian/Cocos', },
      { label: '(MIT +11:00) Antarctica/Davis', value: 'Antarctica/Davis', },
      { label: '(MIT +11:00) Asia/Bangkok', value: 'Asia/Bangkok', },
      { label: '(MIT +11:00) Asia/Barnaul', value: 'Asia/Barnaul', },
      { label: '(MIT +11:00) Asia/Ho_Chi_Minh', value: 'Asia/Ho_Chi_Minh', },
      { label: '(MIT +11:00) Asia/Hovd', value: 'Asia/Hovd', },
      { label: '(MIT +11:00) Asia/Jakarta', value: 'Asia/Jakarta', },
      { label: '(MIT +11:00) Asia/Krasnoyarsk', value: 'Asia/Krasnoyarsk', },
      { label: '(MIT +11:00) Asia/Novokuznetsk', value: 'Asia/Novokuznetsk', },
      { label: '(MIT +11:00) Asia/Novosibirsk', value: 'Asia/Novosibirsk', },
      { label: '(MIT +11:00) Asia/Phnom_Penh', value: 'Asia/Phnom_Penh', },
      { label: '(MIT +11:00) Asia/Pontianak', value: 'Asia/Pontianak', },
      { label: '(MIT +11:00) Asia/Tomsk', value: 'Asia/Tomsk', },
      { label: '(MIT +11:00) Asia/Vientiane', value: 'Asia/Vientiane', },
      { label: '(MIT +11:00) Indian/Christmas', value: 'Indian/Christmas', },
      { label: '(MIT +12:00) Antarctica/Casey', value: 'Antarctica/Casey', },
      { label: '(MIT +12:00) Asia/Brunei', value: 'Asia/Brunei', },
      { label: '(MIT +12:00) Asia/Choibalsan', value: 'Asia/Choibalsan', },
      { label: '(MIT +12:00) Asia/Hong_Kong', value: 'Asia/Hong_Kong', },
      { label: '(MIT +12:00) Asia/Irkutsk', value: 'Asia/Irkutsk', },
      { label: '(MIT +12:00) Asia/Kuala_Lumpur', value: 'Asia/Kuala_Lumpur', },
      { label: '(MIT +12:00) Asia/Kuching', value: 'Asia/Kuching', },
      { label: '(MIT +12:00) Asia/Macau', value: 'Asia/Macau', },
      { label: '(MIT +12:00) Asia/Makassar', value: 'Asia/Makassar', },
      { label: '(MIT +12:00) Asia/Manila', value: 'Asia/Manila', },
      { label: '(MIT +12:00) Asia/Shanghai', value: 'Asia/Shanghai', },
      { label: '(MIT +12:00) Asia/Singapore', value: 'Asia/Singapore', },
      { label: '(MIT +12:00) Asia/Taipei', value: 'Asia/Taipei', },
      { label: '(MIT +12:00) Asia/Ulaanbaatar', value: 'Asia/Ulaanbaatar', },
      { label: '(MIT +12:00) Australia/Perth', value: 'Australia/Perth', },
      { label: '(MIT +12:45) Australia/Eucla', value: 'Australia/Eucla', },
      { label: '(MIT +13:00) Asia/Chita', value: 'Asia/Chita', },
      { label: '(MIT +13:00) Asia/Dili', value: 'Asia/Dili', },
      { label: '(MIT +13:00) Asia/Jayapura', value: 'Asia/Jayapura', },
      { label: '(MIT +13:00) Asia/Khandyga', value: 'Asia/Khandyga', },
      { label: '(MIT +13:00) Asia/Pyongyang', value: 'Asia/Pyongyang', },
      { label: '(MIT +13:00) Asia/Seoul', value: 'Asia/Seoul', },
      { label: '(MIT +13:00) Asia/Tokyo', value: 'Asia/Tokyo', },
      { label: '(MIT +13:00) Asia/Yakutsk', value: 'Asia/Yakutsk', },
      { label: '(MIT +13:00) Pacific/Palau', value: 'Pacific/Palau', },
      { label: '(MIT +13:30) Australia/Adelaide', value: 'Australia/Adelaide', },
      { label: '(MIT +13:30) Australia/Broken_Hill', value: 'Australia/Broken_Hill', },
      { label: '(MIT +13:30) Australia/Darwin', value: 'Australia/Darwin', },
      { label: '(MIT +14:00) Antarctica/DumontDUrville', value: 'Antarctica/DumontDUrville', },
      { label: '(MIT +14:00) Asia/Ust-Nera', value: 'Asia/Ust-Nera', },
      { label: '(MIT +14:00) Asia/Vladivostok', value: 'Asia/Vladivostok', },
      { label: '(MIT +14:00) Australia/Brisbane', value: 'Australia/Brisbane', },
      { label: '(MIT +14:00) Australia/Currie', value: 'Australia/Currie', },
      { label: '(MIT +14:00) Australia/Hobart', value: 'Australia/Hobart', },
      { label: '(MIT +14:00) Australia/Lindeman', value: 'Australia/Lindeman', },
      { label: '(MIT +14:00) Australia/Melbourne', value: 'Australia/Melbourne', },
      { label: '(MIT +14:00) Australia/Sydney', value: 'Australia/Sydney', },
      { label: '(MIT +14:00) Pacific/Chuuk', value: 'Pacific/Chuuk', },
      { label: '(MIT +14:00) Pacific/Guam', value: 'Pacific/Guam', },
      { label: '(MIT +14:00) Pacific/Port_Moresby', value: 'Pacific/Port_Moresby', },
      { label: '(MIT +14:00) Pacific/Saipan', value: 'Pacific/Saipan', },
      { label: '(MIT +14:30) Australia/Lord_Howe', value: 'Australia/Lord_Howe', },
      { label: '(MIT +15:00) Antarctica/Macquarie', value: 'Antarctica/Macquarie', },
      { label: '(MIT +15:00) Asia/Magadan', value: 'Asia/Magadan', },
      { label: '(MIT +15:00) Asia/Sakhalin', value: 'Asia/Sakhalin', },
      { label: '(MIT +15:00) Asia/Srednekolymsk', value: 'Asia/Srednekolymsk', },
      { label: '(MIT +15:00) Pacific/Bougainville', value: 'Pacific/Bougainville', },
      { label: '(MIT +15:00) Pacific/Efate', value: 'Pacific/Efate', },
      { label: '(MIT +15:00) Pacific/Guadalcanal', value: 'Pacific/Guadalcanal', },
      { label: '(MIT +15:00) Pacific/Kosrae', value: 'Pacific/Kosrae', },
      { label: '(MIT +15:00) Pacific/Norfolk', value: 'Pacific/Norfolk', },
      { label: '(MIT +15:00) Pacific/Noumea', value: 'Pacific/Noumea', },
      { label: '(MIT +15:00) Pacific/Pohnpei', value: 'Pacific/Pohnpei', },
      { label: '(MIT +16:00) Antarctica/McMurdo', value: 'Antarctica/McMurdo', },
      { label: '(MIT +16:00) Asia/Anadyr', value: 'Asia/Anadyr', },
      { label: '(MIT +16:00) Asia/Kamchatka', value: 'Asia/Kamchatka', },
      { label: '(MIT +16:00) Pacific/Auckland', value: 'Pacific/Auckland', },
      { label: '(MIT +16:00) Pacific/Fiji', value: 'Pacific/Fiji', },
      { label: '(MIT +16:00) Pacific/Funafuti', value: 'Pacific/Funafuti', },
      { label: '(MIT +16:00) Pacific/Kwajalein', value: 'Pacific/Kwajalein', },
      { label: '(MIT +16:00) Pacific/Majuro', value: 'Pacific/Majuro', },
      { label: '(MIT +16:00) Pacific/Nauru', value: 'Pacific/Nauru', },
      { label: '(MIT +16:00) Pacific/Tarawa', value: 'Pacific/Tarawa', },
      { label: '(MIT +16:00) Pacific/Wake', value: 'Pacific/Wake', },
      { label: '(MIT +16:00) Pacific/Wallis', value: 'Pacific/Wallis', },
      { label: '(MIT +16:45) Pacific/Chatham', value: 'Pacific/Chatham', },
      { label: '(MIT +17:00) Pacific/Apia', value: 'Pacific/Apia', },
      { label: '(MIT +17:00) Pacific/Enderbury', value: 'Pacific/Enderbury', },
      { label: '(MIT +17:00) Pacific/Fakaofo', value: 'Pacific/Fakaofo', },
      { label: '(MIT +17:00) Pacific/Tongatapu', value: 'Pacific/Tongatapu', },
      { label: '(MIT +18:00) Pacific/Kiritimati', value: 'Pacific/Kiritimati', },
  ];
  const startOptions = [
      { label: '', value: resetOptionValue },
      { label: 'shortly after the problem set is posted', value: '6', },
      { label: '3-4 days before the pset is due', value: '4', },
      { label: '1-2 days before the pset is due', value: '2', },
  ];
  const togetherOptions = [
      { label: '', value: resetOptionValue },
      { label: 'solve the problems together', value: '1', },
      { label: 'discuss strategies, work together if stuck', value: '2', },
      { label: 'work independently but check answers', value: '3', },
  ];
  const forumOptions = [
      { label: '', value: resetOptionValue },
      { label: 'text (e.g. Slack or Zulip)', value: 'text', },
      { label: 'video (e.g. Zoom)', value: 'video', },
      { label: 'in person', value: 'in-person', },
  ];
  const sizeOptions = [
      { label: '', value: resetOptionValue },
      { label: '2 students', value: '2', },
      { label: '3-4 students', value: '3', },
      { label: '5-8 students', value: '5', },
      { label: 'more than 8 students', value: '8', },
  ];
  const department_affinityOptions = [
      { label: '', value: resetOptionValue },
      { label: 'someone else in my department', value: '1', },
      { label: 'only students in my department', value: '2', },
      { label: 'students in many departments', value: '3', },
  ];
  const departments_affinityOptions = [
      { label: '', value: resetOptionValue },
      { label: 'someone else in one of my departments', value: '1', },
      { label: 'only students in one of my departments', value: '2', },
      { label: 'students in many departments', value: '3', },
  ];
  const year_affinityOptions = [
      { label: '', value: resetOptionValue },
      { label: 'someone else in my year', value: '1', },
      { label: 'only students in my year', value: '2', },
      { label: 'students in multiple years', value: '3', },
  ];
  const gender_affinityOptions = [
      { label: '', value: resetOptionValue },
      { label: 'someone else with my gender identity', value: '1', },
      { label: 'only students with my gender identity', value: '2', },
      { label: 'a diversity of gender identities', value: '3', },
  ];
