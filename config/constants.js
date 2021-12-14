const STATES = {
  ANDAMAN_NICOBAR: "andaman-nicobar",
  ANDHRA_PRADESH: "andhra-pradesh",
  ARUNACHAL_PRADESH: "arunachal-pradesh",
  ASSAM: "assam",
  BIHAR: "bihar",
  CHANDIGARH: "chandigarh",
  CHHATISGARH: "chhatisgarh",
  DADRA_NAGARHAVELI: "dadra-nagarhaveli",
  DAMAN_DIU: "daman-diu",
  DELHI: "delhi",
  GOA: "goa",
  GUJARAT: "gujarat",
  HARYANA: "haryana",
  HIMACHAL_PRADESH: "himachal-pradesh",
  JAMMU_KASHMIR: "jammu-kashmir",
  JHARKHAND: "jharkhand",
  KARNATAKA: "karnataka",
  KERALA: "kerala",
  MADHYA_PRADESH: "madhya-pradesh",
  MAHARASHTRA: "maharashtra",
  MANIPUR: "manipur",
  MEGHALAYA: "meghalaya",
  MIZORAM: "mizoram",
  NAGALAND: "nagaland",
  ODISHA: "odisha",
  PONDICHERRY: "pondicherry",
  PUNJAB: "punjab",
  RAJASTHAN: "rajasthan",
  SIKKIM: "sikkim",
  TAMIL_NADU: "tamil-nadu",
  TELANGANA: "telangana",
  TRIPURA: "tripura",
  UTTAR_PRADESH: "uttar-pradesh",
  UTTARAKHAND: "uttarakhand",
  WEST_BENGAL: "west-bengal",
};

const etMapping = {
  [STATES.ANDHRA_PRADESH]: "andhra-pradesh",
  [STATES.ASSAM]: "assam",
  [STATES.BIHAR]: "bihar",
  [STATES.CHHATISGARH]: "chhattisgarh",
  [STATES.GUJARAT]: "gujarat",
  [STATES.HARYANA]: "haryana",
  [STATES.HIMACHAL_PRADESH]: "himachal-pradesh",
  [STATES.JAMMU_KASHMIR]: "jammu-and-kashmir",
  [STATES.JHARKHAND]: "jharkhand",
  [STATES.KARNATAKA]: "karnataka",
  [STATES.KERALA]: "kerala",
  [STATES.MADHYA_PRADESH]: "madhya-pradesh",
  [STATES.MAHARASHTRA]: "maharashtra",
  [STATES.DELHI]: "nct-of-delhi",
  [STATES.ODISHA]: "odisha",
  [STATES.PUNJAB]: "punjab",
  [STATES.RAJASTHAN]: "rajasthan",
  [STATES.TAMIL_NADU]: "tamil-nadu",
  [STATES.TELANGANA]: "telangana",
  [STATES.UTTAR_PRADESH]: "uttar-pradesh",
  [STATES.UTTARAKHAND]: "uttarakhand",
  [STATES.WEST_BENGAL]: "west-bengal",
};

const goodReturnsMapping = {
  [STATES.ANDAMAN_NICOBAR]: "andaman-nicobar-s1",
  [STATES.ANDHRA_PRADESH]: "andhra-pradesh-s2",
  [STATES.ARUNACHAL_PRADESH]: "arunachal-pradesh-s3",
  [STATES.ASSAM]: "assam-s4",
  [STATES.BIHAR]: "bihar-s5",
  [STATES.CHANDIGARH]: "chandigarh-s6",
  [STATES.CHHATISGARH]: "chhatisgarh-s7",
  [STATES.DADRA_NAGARHAVELI]: "dadra-nagarhaveli-s8",
  [STATES.DAMAN_DIU]: "daman-diu-s9",
  [STATES.DELHI]: "delhi-s10",
  [STATES.GOA]: "goa-s11",
  [STATES.GUJARAT]: "gujarat-s12",
  [STATES.HARYANA]: "haryana-s13",
  [STATES.HIMACHAL_PRADESH]: "himachal-pradesh-s14",
  [STATES.JAMMU_KASHMIR]: "jammu-kashmir-s15",
  [STATES.JHARKHAND]: "jharkhand-s16",
  [STATES.KARNATAKA]: "karnataka-s17",
  [STATES.KERALA]: "kerala-s18",
  [STATES.MADHYA_PRADESH]: "madhya-pradesh-s19",
  [STATES.MAHARASHTRA]: "maharashtra-s20",
  [STATES.MANIPUR]: "manipur-s21",
  [STATES.MEGHALAYA]: "meghalaya-s22",
  [STATES.MIZORAM]: "mizoram-s23",
  [STATES.NAGALAND]: "nagaland-s24",
  [STATES.ODISHA]: "odisha-s25",
  [STATES.PONDICHERRY]: "pondicherry-s26",
  [STATES.PUNJAB]: "punjab-s27",
  [STATES.RAJASTHAN]: "rajasthan-s28",
  [STATES.SIKKIM]: "sikkim-s29",
  [STATES.TAMIL_NADU]: "tamil-nadu-s30",
  [STATES.TELANGANA]: "telangana-s31",
  [STATES.TRIPURA]: "tripura-s32",
  [STATES.UTTAR_PRADESH]: "uttar-pradesh-s33",
  [STATES.UTTARAKHAND]: "uttarakhand-s34",
  [STATES.WEST_BENGAL]: "west-bengal-s35",
};

const ndtvMapping = {
  [STATES.ANDAMAN_NICOBAR]: "andaman-and-nicobar",
  [STATES.ANDHRA_PRADESH]: "andhra-pradesh",
  [STATES.ARUNACHAL_PRADESH]: "arunachal-pradesh",
  [STATES.ASSAM]: "assam",
  [STATES.BIHAR]: "bihar",
  [STATES.CHANDIGARH]: "chandigarh",
  [STATES.CHHATISGARH]: "chhatisgarh",
  [STATES.DADRA_NAGARHAVELI]: "dadra-and-nagar-haveli",
  [STATES.DAMAN_DIU]: "daman-and-diu",
  [STATES.DELHI]: "delhi",
  [STATES.GOA]: "goa",
  [STATES.GUJARAT]: "gujarat",
  [STATES.HARYANA]: "haryana",
  [STATES.HIMACHAL_PRADESH]: "himachal-pradesh",
  [STATES.JAMMU_KASHMIR]: "jammu-and-kashmir",
  [STATES.JHARKHAND]: "jharkhand",
  [STATES.KARNATAKA]: "karnataka",
  [STATES.KERALA]: "kerala",
  [STATES.MADHYA_PRADESH]: "madhya-pradesh",
  [STATES.MAHARASHTRA]: "maharashtra",
  [STATES.MANIPUR]: "manipur",
  [STATES.MEGHALAYA]: "meghalaya",
  [STATES.MIZORAM]: "mizoram",
  [STATES.NAGALAND]: "nagaland",
  [STATES.ODISHA]: "odisha",
  [STATES.PONDICHERRY]: "pondicherry",
  [STATES.PUNJAB]: "punjab",
  [STATES.RAJASTHAN]: "rajasthan",
  [STATES.SIKKIM]: "sikkim",
  [STATES.TAMIL_NADU]: "tamil-nadu",
  [STATES.TELANGANA]: "telangana",
  [STATES.TRIPURA]: "tripura",
  [STATES.UTTAR_PRADESH]: "uttar-pradesh",
  [STATES.UTTARAKHAND]: "uttarakhand",
  [STATES.WEST_BENGAL]: "west-bengal",
};

module.exports = {
  goodReturnsMapping,
  STATES,
  etMapping,
  ndtvMapping,
};