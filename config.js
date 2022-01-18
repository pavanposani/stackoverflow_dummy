
var config = {
  dev: {
    dbConfig : {
        user:  "SA",
        password: "MyPass@word",
        server: "localhost",
        database: "StackDb",
        trustServerCertificate: true,
        pool: {
           max: 10,
           min: 0,
           idleTimeoutMillis: 30000
       }
    }
  }
};
module.exports =config;
