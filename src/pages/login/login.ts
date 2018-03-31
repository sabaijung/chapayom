import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { TabsPage } from '../../pages/tabs/tabs';
import { Users } from "../../models/users";
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage  {

  login_form: any;
  register_form: any;
  show_hide_icon = 'md-eye';
  password_input_type = 'password';
  password_max_length = 6;
  login_type = 'login';

  user = {} as Users;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private formBuilder: FormBuilder, 
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private afAuth: AngularFireAuth ) {

    this.login_form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(this.password_max_length),Validators.required]],
    });
                         
    this.register_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(this.password_max_length),Validators.required]],
    });

  }

  showHidePass() {
    setTimeout(()=>{
      if(this.show_hide_icon == 'md-eye') {
        this.show_hide_icon = 'md-eye-off';
        this.password_input_type = 'text';
      }
      else {
        this.show_hide_icon = 'md-eye';
        this.password_input_type = 'password';
      }
    },0);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'อีเมล์หรือรหัสผ่านไม่ถูกต้อง',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  async login(user: Users) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      } 

        console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  }

  async register(user: Users) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }
    } catch (e) {
      console.error(e);
    }
  }

  forgotPassword() {
    let alert = this.alertCtrl.create({
      inputs: [{
          name: 'email',
          type: 'email'
      }],
      title: "กรุณากรอกอีเมล์",
      buttons: [
        {
            text: 'ยกเลิก',
            role: 'cancel',
            handler: () => {console.log('ยกเลิกการคลิก');}
          },
          {
            text: 'ตกลง',
            handler: data => {
              console.log('คลิกปุ่มตกลง ' + data.email);
            }
          }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


}
