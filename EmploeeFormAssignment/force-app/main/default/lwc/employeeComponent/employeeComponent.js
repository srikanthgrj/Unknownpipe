import { LightningElement, track } from 'lwc';
import emploee from "@salesforce/schema/Employee__c";
import address from '@salesforce/schema/Employee__c.Address__c';
import city from '@salesforce/schema/Employee__c.City__c';
import state from '@salesforce/schema/Employee__c.States__c';
//import ZipCode from '@salesforce/schema/Employee__c.ZipCode__c';
import Companynamejs from "@salesforce/schema/Employee__c.Company_Name__c";
import Employeeidjs from "@salesforce/schema/Employee__c.Emploee_Identification_Number__c";
import employeridjs from "@salesforce/schema/Employee__c.Employer_Identification_Number__c";
//import Confirmemployeeidjs from "@salesforce/schema/Employee__c.Confirm_Emploee_Identification_Number__c";
//import Confirmemployeridjs from "@salesforce/schema/Employee__c.Confirm_Employer_Identification_Number__c";
import Emailjs from "@salesforce/schema/Employee__c.Email__c";
//import Confirmmailjs from "@salesforce/schema/Employee__c.Confirm_Email__c";
import Joiningdatejs from '@salesforce/schema/Employee__c.Joining_Date__c';
import fullnamejs from '@salesforce/schema/Employee__c.Type_full_Name__c';
import designationjs from '@salesforce/schema/Employee__c.Designation__c';
import phonejs from '@salesforce/schema/Employee__c.Phone__c';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import { createRecord } from 'lightning/uiRecordApi';


export default class EmployeeComponent extends NavigationMixin(LightningElement){
    @track addressdata;
    changeaddress(event){
        this.addressdata = event.detail
    }
    @track personaldata;
    changepersonal(event){
        this.personaldata=event.detail
    }
    @track professionaldata;
    changeprofessional(event){
        this.professionaldata = event.detail
    }
    
    
    insertemployeeAction(event){
        try{
            this.template.querySelector("c-address-component").addressChangeVal(event);
            this.template.querySelector("c-personal-component").Personaldata(event);
            this.template.querySelector("c-professional-component").proffChangeVal(event);
            let formData = {
                addressdata: this.addressdata,
                personaldata: this.personaldata,
                professionaldata: this.professionaldata
            }
            console.log('inside action in employee')
            console.log('inside action in employee')
            console.log('inside action in employee')
       const fields = {};
       fields[address.fieldApiName]= this.addressf;
       console.log('address in parent'+addressf)
       fields[city.fieldApiName]= this.cityf;
       fields[state.fieldApiName]= this.statef;
       fields[ZipCode.fieldApiName]= this.ZipCodef;
       console.log('zipcode'+ ZipCodef);
       fields[Companynamejs.fieldApiName]= this.Companynamef;
       fields[Employeeidjs.fieldApiName]= this.Employeeidf;
       fields[Confirmemployeeidjs.fieldApiName]= this.Confirmemployeeidf;
            fields[employeridjs.fieldApiName]= this.Employeridf;
            fields[Confirmemployeridjs.fieldApiName]= this.Confirmemployeridf;
            fields[Emailjs.fieldApiName]= this.Emailf;
            fields[Confirmmailjs.fieldApiName]= this.Confirmmailf;
            fields[Joiningdatejs.fieldApiName]= this.Joiningdatef;
            fields[fullnamejs.fieldApiName]= this.fullnamef;
            fields[designationjs.fieldApiName]= this.designationf;
            fields[phonejs.fieldApiName]= this.phonef;
            
       const recordInput = { apiName: emploee.objectApiName, fields };
       console.log(recordInput);
       createRecord(recordInput)
       .then(emploeeobj=> {
           
           this.dispatchEvent(
               new ShowToastEvent({
                   title: 'Success',
                   message: 'address record has been created',
                   variant: 'success',
               }),
           );
           this[NavigationMixin.Navigate]({
               type: 'standard__recordPage',
               attributes: {
                   recordId: emploeeobj.id,
                   objectApiName: 'Employee',
                   actionName: 'view'
               },
           });



       })
       .catch(error => {
           this.dispatchEvent(
               new ShowToastEvent({
                   title: 'Error creating record',
                   message: error.body.message,
                   variant: 'error',
               }),
           );
       });
   }catch {
       console.log('exception in insert action onclick')
   }    
    }
}