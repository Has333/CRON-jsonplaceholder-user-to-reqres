import fs from 'fs';
const dateInfo = new Date();
const date = dateInfo.getFullYear()+'-'+(dateInfo.getMonth()+1)+'-'+dateInfo.getDate();
const time = dateInfo.getHours() + ":" + dateInfo.getMinutes() + ":" + dateInfo.getSeconds();
const dateTime = date+' T '+time;

class ErrorReports {
    create(){
        let stack = new Error().stack
        let error = new Error()

        fs.writeFile(`src/reports/errors-report-${date}.txt`, `{ error: "${error}", dataHora: "${dateTime}", stack: "${stack}" }`, function(err) {
            if(err) {
                console.log(err)
            } else {
                return;
            }
        })
    }

    validateIfAlreadyExists(){
       const path = `src/reports/errors-report-${date}.txt`
       if (fs.existsSync(path)){
           return true;
       } else {
           return false;
       }
    }

    update(){
        let stack = new Error().stack
        let error = new Error()

        fs.writeFile(`src/reports/errors-report-${date}.txt`, `{ error: "${error}", dataHora: "${dateTime}", stack: "${stack}" }`, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log('The file was updated!');
            }
        })
    }
}

const ReportsHelper = new ErrorReports();
export { ReportsHelper }