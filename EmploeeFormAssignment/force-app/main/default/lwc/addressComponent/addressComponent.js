import { api, LightningElement, track } from 'lwc';




import { NavigationMixin } from 'lightning/navigation';


export default class AddressComponent extends NavigationMixin(LightningElement) {
    @track Address; City; state; Zipcode;
    
    
    
    @api addressChangeVal(event){
        try{
            console.log(event.target.value)
            console.log(event.target.label)
            let addressf = event.target.value; 
        console.log('before addressf');
        if(event.target.label=='Address'){
             addressf = event.target.value;
           // console.log( this.addressf = event.target.value);
        }
        console.log('before cityf'+addressf);
        if(event.target.label=='City'){
            let cityf = event.target.value;
            console.log(cityf);
        }
        if(event.target.label=='state'){
            let statef = event.target.value;
            console.log(statef);
        }
        if(event.target.label=='Zipcode'){
                let ZipCodef = event.target.value;
                console.log(ZipCodef);
            }
            let addressObj = {
                addressf, cityf, statef, ZipCodef
            };
            const selectEvent3 = new CustomEvent("addressdata", {
                detail: addressObj
            });
            this.dispatchEvent(selectEvent3);

    
        }catch(e){
            console.error(e);
            console.log('exception in addresschange val');
        }

    }

    
}
    
