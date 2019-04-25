let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
  uri: "mongodb://vivek721:BQ6Y7OfJrTLI8f5M@cluster0-shard-00-00.pgarj.mongodb.net:27017,cluster0-shard-00-01.pgarj.mongodb.net:27017,cluster0-shard-00-02.pgarj.mongodb.net:27017/meetingPlannerDB1?ssl=true&replicaSet=atlas-3uxdmj-shard-0&authSource=admin&retryWrites=true&w=majority"
};
appConfig.apiVersion = "/api/v1";

module.exports = {
  port: appConfig.port,
  allowedCorsOrigin: appConfig.allowedCorsOrigin,
  environment: appConfig.env,
  db: appConfig.db,
  apiVersion: appConfig.apiVersion
};