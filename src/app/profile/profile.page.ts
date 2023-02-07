import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import{ActionSheetController, ModalController,PopoverController}from '@ionic/angular'
import { Router, NavigationExtras } from '@angular/router';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { ImagePicker, ImagePickerOptions } from '@awesome-cordova-plugins/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { File } from '@awesome-cordova-plugins/file/ngx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
logindata:any
boss!:boolean
otp:any
  dropdownList:any[]= [];
 selectedItems:any= [];
 dropdownSettings!: IDropdownSettings;
 AadharNumber:any
 gstinNumber:any
 userName:any
 addressdetail:any =[]
 routes:any=[]
 passdata:any


 imageurl: any;
 securepath: any = window;
 url: any;
  
  constructor(private modal:ModalController,private router: Router,private actionsheet:ActionSheetController,
   private camera:Camera,private file:File, private imagepicker:ImagePicker ,private crop:Crop,private domsanitize: DomSanitizer
    ) { }
  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '45px',
      height: '45px',
    },
  };
  ngOnInit() {

  this.logindata=  JSON.parse(localStorage.getItem('regdata')|| '{}')
  console.log(this.logindata._id)
  this.hide()
  this.getaddressdetails()
    this.dropdownList = [
      { item_id: 1, item_text: 'Andaman and Nicobar Islands' },
      { item_id: 2, item_text: 'Andhra Pradesh' },
      { item_id: 3, item_text: 'Arunachal Pradesh' },
      { item_id: 4, item_text: 'Assam' },
      { item_id: 5, item_text: 'Bihar' },
      { item_id: 6, item_text: 'Chandigarh' },
      { item_id: 7, item_text: 'Chhattisgarh' },
      { item_id: 8, item_text: 'Dadra Nagar Haveli and Daman Diu' },
      { item_id: 9, item_text: 'Goa' },
      { item_id: 10, item_text: 'Gujarat' },
      { item_id: 11, item_text: 'Haryana' },
      { item_id: 12, item_text: 'Himachal Pradesh' },
      { item_id: 13, item_text: 'Jammu and Kashmir' },
      { item_id: 14, item_text: 'Jharkhand' },
      { item_id: 15, item_text: 'Karnataka' },
      { item_id: 16, item_text: 'Kerala' },
      { item_id: 17, item_text: 'Lakshadweep' },
      { item_id: 18, item_text: 'Ladakh' },
      { item_id: 19, item_text: 'Madhya Pradesh' },
      { item_id: 20, item_text: 'Maharashtra' },
      { item_id: 21, item_text: 'Manipur' },
      { item_id: 22, item_text: 'Meghalaya' },
      { item_id: 23, item_text: 'Mizoram' },
      { item_id: 24, item_text: 'Nagaland' },
      { item_id: 25, item_text: 'National Capital Territory (Delhi)' },
      { item_id: 26, item_text: 'Odisha' },
      { item_id: 27, item_text: 'Puducherry' },
      { item_id: 28, item_text: 'Punjab' },
      { item_id: 29, item_text: 'Rajasthan' },
      { item_id: 30, item_text: 'Tamil Nadu' },
      { item_id: 31, item_text: 'Telangana' },
      { item_id: 32, item_text: 'Tripura' },
      { item_id: 33, item_text: 'Uttar Pradesh' },
      { item_id: 34, item_text: 'Uttarakhand' },
      { item_id: 35, item_text: 'West Bengal' },
    
    ];
    this.selectedItems = [
     
    ];
    
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onOtpChange(otp: string) {
    this.otp = otp;
  }
  hide(){
    if(this.logindata.role === 'Shipper' || this.logindata.role === 'Fleet Owner'){
      this.boss = true
    }else{
      this.boss =false
    }
  }

  passData() {
  
    localStorage.setItem('detailsforEdit',JSON.stringify(this.passdata))
    this.router.navigate(['editalldetails'])
  }
  chooseFromCamera(sourceType:any){
    const options: CameraOptions = {
       quality: 100,
       mediaType: this.camera.MediaType.PICTURE,
       destinationType: this.camera.DestinationType.FILE_URI,
       encodingType: this.camera.EncodingType.JPEG,
       sourceType: sourceType,
    };

    this.camera.getPicture(options).then((result:any) => {
      console.log('Camera URL',result);
      // this.imageurl = result;
      this.imageurl = this.securepath.Ionic.WebView.convertFileSrc(result);
    }, error=>{
      console.log('Error CAMERA', error);
    });
  }

  santizeUrl(imageUrl:any){
    return this.domsanitize.bypassSecurityTrustUrl(imageUrl);
  }

  pickImagesFromLibrary(){
    const options: ImagePickerOptions = {
      quality: 100,
      maximumImagesCount: 1,
    };
    this.imagepicker.getPictures(options).then((imageresult)=> {
    console.log('image Picker Results', imageresult);

     for(let i=0; i<imageresult.length; i++){
      this.url = this.securepath.Ionic.WebView.convertFileSrc(imageresult[i]);
     }
    }, (error: any)=>{
      console.log('Image Picker Error:', error);
    });
  }

  async choosePhotos(){
    const actionsheet = await this.actionsheet.create({
      header: 'Select image Source',
      buttons: [
        {
          text: 'Load from Gallery',
          handler: ()=>{
            this.pickImagesFromLibrary();
            console.log('Image Selected from Gallery');
          }
        },
        {
          text: 'Select Camera',
          handler: ()=>{
            this.chooseFromCamera(this.camera.PictureSourceType.CAMERA);
            console.log('Camera Selected');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
     });
     await actionsheet.present();
   }

  

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  async verifyAadhar(){
 
    
  console.log(this.AadharNumber)

    const final ={
      aadhaarNumber:this.AadharNumber,
    
    }
    console.log(final)
    fetch("https://api.emptra.com/aadhaarVerification/requestOtp",{
        //fetch("https://api.emptra.com/aadhaarVerification/requestOtp", {
          
          method:'post',
          headers:{
                    "Access-Control-Allow-Origin": "*",
                      "Content-Type":'application/json',
                      "clientId":'773901a84fd7da63fb77100ad2cefcf9:c5ba2d212af3d978c2a857062001a431',
                      "secretKey":'FEwoB08LfXN7ie8m5y1JgQL8TSj0bO6adngxGoa5Yfc4XeXd9Pe3I2VEfGh7ZAap9'
                  },
          body:JSON.stringify(final),
          }).then(res => res.json())
          
          .then(
            async result =>{
         console.log(result)
         var sai =result
            console.log(result.result.data.client_id)
           localStorage.setItem("client_id",JSON.stringify(result.result.data.client_id))

              
           
           
      const ele =await this.modal.getTop()
    if(ele){
      ele.dismiss();
      return;
    }
        this.router.navigate(['vrifyaadharotp'])
  
            }
            ).catch(
                error =>{
                  alert('Enter valid AadharNumber');
                 console.log(error)
                });
              
      
    }





      async verifygstin(){
        /*const ele =await this.modal.getTop()
        if(ele){
          ele.dismiss();
          return;
        }*/
      console.log(this.gstinNumber)
    
        const final ={
        
          gstin:this.gstinNumber ,
          username: this.userName
        
        }
        console.log(final)
        fetch("https://api.emptra.com/gstOtp",{
            //fetch("https://api.emptra.com/aadhaarVerification/requestOtp", {
              
              method:'post',
              headers:{
                        "Access-Control-Allow-Origin": "*",
                          "Content-Type":'application/json',
                          "clientId":'773901a84fd7da63fb77100ad2cefcf9:c5ba2d212af3d978c2a857062001a431',
                          "secretKey":'FEwoB08LfXN7ie8m5y1JgQL8TSj0bO6adngxGoa5Yfc4XeXd9Pe3I2VEfGh7ZAap9'
                      },
              body:JSON.stringify(final),
              }).then(res => res.json())
              
              .then(
                result =>{
             console.log(result)
             var sai =result
                console.log(result.result.data.client_id)
               localStorage.setItem("gst",JSON.stringify(this.gstinNumber))
               localStorage.setItem("gstusername",JSON.stringify(this.userName))
              this.router.navigate(['verifygstotp'])
                }
                ).catch(
                    error =>{
                      alert('Enter valid AadharNumber');
                     console.log(error)
                    });
                  
          
        }




       


  getaddressdetails(){
    fetch("http://localhost:3000/TruckAppUsers/getprofiledetails/" + this.logindata._id, {
      
      method:'get',
      headers:{
                "Access-Control-Allow-Origin": "*",
                  "Content-Type":'application/json'
              },
      
      }).then(res => res.json())
      
      .then(
        result =>{
     
         console.log(result)
         this.addressdetail = result.data
     

         for(let i=0;i<this.addressdetail.length;i++)
         this.routes=this.addressdetail[i]
         this.passdata =this.routes
         console.log(this.routes)
        }
        ).catch(
            error =>{
              alert('unable to get address details');
             console.log(error)
            });
           
  
  }


  //addroutes
  addroutes(){
    var data ={
      routes:this.selectedItems
    
    }
    console.log(data)
    fetch("http://localhost:3000/TruckAppUsers/putprofile/" +this.logindata._id, {
      
    method:'put',
    headers:{
              "Access-Control-Allow-Origin": "*",
                "Content-Type":'application/json'
            },
    body:JSON.stringify(data),
    }).then(res => res.json())
    
    .then(
      result =>{
   console.log(result.routes)
      
      
      
    
      }
      ).catch(
          error =>{
            alert('unable to add routes');
           console.log(error)
          });
          // localStorage.removeItem('selectType');
           //localStorage.removeItem('language');
          // localStorage.removeItem('allDetails');
           //localStorage.removeItem('mobileNo');
  
  }
    
}
