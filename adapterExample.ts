interface IWebPage {
    goWithdataThroughDOM();
}

interface ICorailWebPage extends IWebPage {
    takeDataFromWebPage();
}

interface IMaestroWebPage extends IWebPage {
    takeDataFromWebPage();
}

interface IMGO {
    takeDataFromMainframe();
}


class Corail implements ICorailWebPage  {
    goWithdataThroughDOM() {
        this.takeDataFromWebPage();
    }
    takeDataFromWebPage() {
        console.log("taking data from Corail System");
        
    }
}


class Maestro implements IMaestroWebPage {

    goWithdataThroughDOM() {
        this.takeDataFromWebPage();
    }
    takeDataFromWebPage() {
        console.log("taking data from Maestro System");
    }
}


class MGO implements IMGO {
    takeDataFromMainframe() {
        console.log("take data from mainframe system");
    }
}



class WebPageIntoSomeKindOfMainframe implements IMGO {

    private webPagePSASystem: IWebPage;

    constructor(system: IWebPage) {
        this.webPagePSASystem = system;
    }


    takeDataFromMainframe() {
        console.log("Now im using method from mainframe but at the end in guts we are using web page methods connected with DOM");
        this.webPagePSASystem.goWithdataThroughDOM();
        
    }
}


class FF {
    generateReport(typeOfTheReport: String) {
        console.log("ff generates report");


        if(typeOfTheReport == "MGO") {
            (new MGO).takeDataFromMainframe();
        } else {
            (new WebPageIntoSomeKindOfMainframe(new Maestro)).takeDataFromMainframe();
        }
        
    }
}


let ff = new FF();
ff.generateReport("MGO");
ff.generateReport("Other");