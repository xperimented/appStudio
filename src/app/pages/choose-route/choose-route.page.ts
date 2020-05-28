import { Component, OnInit } from '@angular/core';
import {PickerController} from '@ionic/angular';
import {PickerOptions} from '@ionic/core';
@Component({
  selector: 'app-choose-route',
  templateUrl: './choose-route.page.html',
  styleUrls: ['./choose-route.page.scss'],
})
export class ChooseRoutePage implements OnInit {
  //selected=['',''];
  departure=''
  destination=''
  constructor(private pickerCtrl: PickerController) { }

  ngOnInit() {
  }
  
  async showAdvncePicker(){
    let opts: PickerOptions={
      buttons:[
        {
        text:'cancel',
        role: 'cancel'
        },
        {
          text:'done',
        }

      ],
      columns:[
        {
          name: 'depart',
          options:[
            { text: 'Guelma', value:'1'},
            { text: 'Annaba', value:'2'},
            { text: 'Alger', value:'3'},
          ]
        },
        {
          name: 'destination',
          options:[
            { text: 'Guelma', value:'A'},
            { text: 'Annaba', value:'B'},
            { text: 'Alger', value:'C'},
          ]
        }

      ]
    };
    let picker= await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data=>{
        let depart=await picker.getColumn('depart');
        let dest=await picker.getColumn('destination');

        this.departure=depart.options[depart.selectedIndex].text;
        this.destination=dest.options[dest.selectedIndex].text;
        //this.selected=[
          //depart.options[depart.selectedIndex].text,
          //dest.options[dest.selectedIndex].text
      //];
    });

  }
  public form = [
    { val: 'Papers', isChecked: false },
    { val: 'Small package', isChecked: false },
    { val: 'Medium package', isChecked: false },
    { val: 'Large package', isChecked: false },
  ];
}
