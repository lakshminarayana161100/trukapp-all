import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
@Component({
  selector: 'app-referral',
  templateUrl: './referral.page.html',
  styleUrls: ['./referral.page.scss'],
})
export class ReferralPage implements OnInit {


  text: string='SmartSwag'
  imgurl:string= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFjO6rbNAKcZtfgpqkhnqWGPwcH5hAArN1A&usqp=CAU'
  link: string='https://youtu.be/5BQQM4uvRkw'
  url:string='https://youtu.be/5BQQM4uvRkw'
  constructor(private socialSharing:SocialSharing) { }

  ngOnInit() {
  }
  sShare(){
    var options = {
      message: 'smartSwag',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFjO6rbNAKcZtfgpqkhnqWGPwcH5hAArN1A&usqp=CAU',
     
    };
    this.socialSharing.shareWithOptions(options)
  }




  ShareGeneric(parameter:any){
   
    this.socialSharing.share(this.text, this.link, this.imgurl)
  }
  
  ShareWhatsapp(){
    this.socialSharing.shareViaWhatsApp(this.text, this.imgurl, this.link)
  }

  ShareFacebook(){
    this.socialSharing.shareViaFacebookWithPasteMessageHint(this.text, this.imgurl,this.link )
  }

  SendEmail(){
    this.socialSharing.shareViaEmail(this.text, this.imgurl, ['lakshminarayana161100@gmail.com'])
  }

  SendTwitter(){
    this.socialSharing.shareViaTwitter(this.text, this.imgurl, this.link)
  }

  SendInstagram(){
    this.socialSharing.shareViaInstagram(this.text, this.imgurl)
  }

  SendSmS(){
    this.socialSharing.shareViaSMS('hi...','+919391311615')
  }
}
