import { api, LightningElement } from 'lwc';



import { NavigationMixin } from 'lightning/navigation';


export default class PersonalComponent extends NavigationMixin(LightningElement) {
        Companynamef='';
        Employeeidf='';
        Employeridf='';
        Confirmemployeeidf='';
        Confirmemployeridf='';
        Emailf='';
        Confirmmailf='';
        @api progressValuepersonal;
          
        @api Personaldata(event){
            if(event.target.label=='CompanyName'){
                this.Companynamef = event.target.value;
            }
            if(event.target.label=='Employee ID Number'){
                this.Employeeidf = event.target.value;
            }
            if(event.target.label=='Confirm Employee ID Number'){
                this.Confirmemployeeidf = event.target.value;
            }
            if(event.target.label=='Employer ID Number'){
                this.Employeridf = event.target.value;
            }
            if(event.target.label=='Confirm Employer ID Number'){
                this.Confirmemployeridf = event.target.value;
            }
            if(event.target.label=='Email ID'){
                this.Emailf = event.target.value;
            }
            if(event.target.label=='Confirm Email ID'){
                this.Confirmmailf = event.target.value;
            }
            let personalObj = {
                Companynamef, Employeeidf, Employeridf, Confirmemployeeidf, Confirmemployeridf,Emailf,Confirmmailf
            };
            const selectEvent3 = new CustomEvent("personaldata", {
                detail: personalObj
            });
            this.dispatchEvent(selectEvent1);
        }
        
}