"use strict";

var server = require("./app");
var app = server.app;
var addon = server.addon;

var debug = require("debug")("express:server");
var http = require("http");
var os = require("os");
var hbs = require("express-hbs");

var port = normalizePort(process.env.PORT || 3000);
app.set("port", port);
// Add an hbs helper to fingerprint static resource urls
hbs.registerHelper('furl', function(url) { return app.locals.furl(url); });

var httpServer = http.createServer(app);
httpServer.listen(port, function() {
    console.log('Add-on server running at http://' + os.hostname() + ':' + port);
    // Enables auto registration/de-registration of add-ons into a host in dev mode
    addon.register();
});

httpServer.on("error", onError);
httpServer.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    var bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = httpServer.address();
    var bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    debug("Listening on " + bind);
}
