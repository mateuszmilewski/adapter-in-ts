var Corail = /** @class */ (function () {
    function Corail() {
    }
    Corail.prototype.goWithdataThroughDOM = function () {
        this.takeDataFromWebPage();
    };
    Corail.prototype.takeDataFromWebPage = function () {
        console.log("taking data from Corail System");
    };
    return Corail;
}());
var Maestro = /** @class */ (function () {
    function Maestro() {
    }
    Maestro.prototype.goWithdataThroughDOM = function () {
        this.takeDataFromWebPage();
    };
    Maestro.prototype.takeDataFromWebPage = function () {
        console.log("taking data from Maestro System");
    };
    return Maestro;
}());
var MGO = /** @class */ (function () {
    function MGO() {
    }
    MGO.prototype.takeDataFromMainframe = function () {
        console.log("take data from mainframe system");
    };
    return MGO;
}());
var WebPageIntoSomeKindOfMainframe = /** @class */ (function () {
    function WebPageIntoSomeKindOfMainframe(system) {
        this.webPagePSASystem = system;
    }
    WebPageIntoSomeKindOfMainframe.prototype.takeDataFromMainframe = function () {
        console.log("Now im using method from mainframe but at the end in guts we are using web page methods connected with DOM");
        this.webPagePSASystem.goWithdataThroughDOM();
    };
    return WebPageIntoSomeKindOfMainframe;
}());
var FF = /** @class */ (function () {
    function FF() {
    }
    FF.prototype.generateReport = function (typeOfTheReport) {
        console.log("ff generates report");
        if (typeOfTheReport == "MGO") {
            (new MGO).takeDataFromMainframe();
        }
        else {
            (new WebPageIntoSomeKindOfMainframe(new Maestro)).takeDataFromMainframe();
        }
    };
    return FF;
}());
var ff = new FF();
ff.generateReport("MGO");
ff.generateReport("Other");
