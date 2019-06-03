const XLSX=require('xlsx');
const emailModule=require('./emailModule');
const workbook=XLSX.readFile('book1.xlsx');

const sheet_name_list=workbook.SheetNames;
console.log(sheet_name_list[0]);
console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]));

emailModule.SendEmailNotification();


