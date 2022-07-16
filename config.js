/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
  address: "0.0.0.0", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out or empty, is "localhost"
  port: 8090,
  basePath: "/", // The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
  // you must set the sub path here. basePath must end with a /
  ipWhitelist: [], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  useHttps: false, // Support HTTPS or not, default "false" will use HTTP
  httpsPrivateKey: "", // HTTPS private key path, only require when useHttps is true
  httpsCertificate: "", // HTTPS Certificate path, only require when useHttps is true

  language: "en",
  locale: "en-US",
  logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
  timeFormat: 12,
  units: "imperial",
  // serverOnly:  true/false/"local" ,
  // local for armv6l processors, default
  //   starts serveronly and then starts chrome browser
  // false, default for all NON-armv6l devices
  // true, force serveronly mode, because you want to.. no UI on this device

  modules: [
    {
      module: "alert",
    },
    {
      module: "MMM-Breathwork",
      position: "bottom_right",
    },
    {
      module: "MMM-Remote-Control",
      // uncomment the following line to show the URL of the remote control on the mirror
      position: "top_right",
      // you can hide this module afterwards from the remote control itself
      config: {
        apiKey: "d2c03a8a83094983aa1bb616ae84f894",
      },
    },
    {
      module: "updatenotification",
      position: "top_bar",
    },
    {
      module: "clock",
      position: "top_left",
      timeFormat: "12",
      showPeriod: "true",
      showPeriodUpper: "true",
      clockBold: "true",
    },
    {
      module: "calendar",
      header: "US Holidays",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: "calendar-check",
            url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
          },
        ],
      },
    },
    {
      module: "MMM-quote-of-the-day",
      position: "lower_third",
      config: {
        language: "en",
        updateInterval: "1d",
      },
    },
    {
      module: "compliments",
      position: "lower_third",
    },
    {
      module: "MMM-WeatherChart",
      position: "top_right",
      config: {
        apiKey: "ce4671f715742df04bd73bc06028da2d",
        dataNum: 5,
        dataType: "daily",
        height: "300px",
        width: "500px",
        lat: 37.5485,
        lon: 121.9886,
        units: "imperial",
        title: "Kavya's Weather Report",
        dailyLabel: "date+days_of_week",
        iconURLBase: "https://openweathermap.org/img/wn/",
        showIcon: true,
        showRain: true,
        includeSnow: true,
        showSnow: true,
        showIcon: true,
      },
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "New York Times",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
          },
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true,
      },
    },
  ],
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
