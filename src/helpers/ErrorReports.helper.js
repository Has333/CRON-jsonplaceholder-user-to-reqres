import fs from 'fs';
import path from 'path';

class ErrorReports {
    create(){
        const dateInfo = new Date();
        const date = dateInfo.getFullYear()+'-'+(dateInfo.getMonth()+1)+'-'+dateInfo.getDate();
        const time = dateInfo.getHours() + ":" + dateInfo.getMinutes() + ":" + dateInfo.getSeconds();
        const dateTime = date+' T '+time;

        let stack = new Error().stack
        let error = new Error()

        fs.writeFile(`errors-report-${date}.txt`, `{ error: "${error}", dataHora: "${dateTime}", stack: "${stack}" }`, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log('The file was saved!');
            }
        })
        
    }


    validateIfAlreadyExists(){

    }

    update(){
    }
}

const ReportsHelper = new ErrorReports();
export { ReportsHelper }

// usar fs para criar o arquivo, criar validação caso o nome do arquivo bata com a data atual, se sim, atualizar o arquivo, caso contrário, criar um novo