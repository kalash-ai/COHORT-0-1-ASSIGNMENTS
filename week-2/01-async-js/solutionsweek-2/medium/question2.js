// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric", 
// //   timeZoneName: "short",

// };
// Whatver the date or time content is not needed we can remove it manually from the options properties
// tolocalString convert the date into beautiful format
setInterval(() => {
    
    const currentDateTimeString = new Date().toLocaleString();
    console.log(currentDateTimeString);
}, 1000);
