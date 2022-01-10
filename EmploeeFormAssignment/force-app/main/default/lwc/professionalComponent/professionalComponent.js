import { api, LightningElement } from 'lwc';




import { NavigationMixin } from 'lightning/navigation';


export default class ProfessionalComponent extends NavigationMixin(LightningElement) {
    Joiningdatef='';
    fullnamef='';
    designationf='';
    phonef='';
    
    
    
    @api proffChangeVal(event){
        if(event.target.label=='JoiningDate'){
            this.Joiningdatef = event.target.value;
        }
        if(event.target.label=='Fullname'){
            this.fullnamef = event.target.value;
        }
        if(event.target.label=='Designation'){
            this.designationf = event.target.value;
        }
        if(event.target.label=='phone'){
            this.phonef = event.target.value;
        }
        let professionalObj = {
            Joiningdatef, fullnamef, designationf, phonef
        };
        const selectEvent3 = new CustomEvent("professionaldata", {
            detail: professionalObj
        });
        this.dispatchEvent(selectEvent2);
    }
           
    }

