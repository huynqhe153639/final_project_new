import { FileUploadService } from "./../file-upload.service";
import {
  Component,
  EventEmitter,
  Injector,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { AppComponentBase } from "@shared/app-component-base";
import {
  UserDto,
  UserServiceProxy,
} from "@shared/service-proxies/service-proxies";
import { ModalDirective } from "ngx-bootstrap/modal";
import { ImageCroppedEvent, ImageTransform } from "ngx-image-cropper";

@Component({
  selector: "app-update-image-modal",
  templateUrl: "./update-image-modal.component.html",
  styleUrls: ["./update-image-modal.component.css"],
})
export class UpdateImageModalComponent
  extends AppComponentBase
  implements OnInit
{
  @ViewChild("createOrEditModal") modal: ModalDirective;
  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

  active = false;
  saving = false;
  user: UserDto = new UserDto();

  constructor(
    injector: Injector,
    private userService: UserServiceProxy,
    private fileUploadService: FileUploadService
  ) {
    super(injector);
  }

  ngOnInit(): void {}

  show(user: UserDto): void {
    this.user = user;
    this.active = true;
    this.modal.show();
  }

  save(): void {
    this.saving = true;
    if (this.user.image == "") {
      this.user.image = null;
    }
    this.user.image=this.croppedImage;
    this.userService.update(this.user).subscribe((result) => {
      this.modalSave.emit(result);
      this.close();
    });
  }

  close(): void {
    this.active = false;
    this.modal.hide();
  }

  onFileSelected(event) {
    this.imageChangedEvent = event;
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event: any) => {
      this.user.image = event.target.result as string;
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  transform: ImageTransform = {};
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    /* show cropper */
  }
  cropperReady() {
    /* cropper ready */
  }
  loadImageFailed() {
    /* show message */
  }
  vol : any= 0;
  zoom() {
    this.scale = this.vol;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }
  scale = 1;
  // ************************************************************************************

  // shortLink: string = "";
  // loading: boolean = false; // Flag variable
  // file: File = null; // Variable to store file
  // onChange(event) {
  //   this.file = event.target.files[0];
  // }

  // // OnClick of button Upload
  // onUpload() {
  //   this.loading = !this.loading;
  //   console.log(this.file);
  //   this.fileUploadService.upload(this.file).subscribe((event: any) => {
  //     if (typeof event === "object") {
  //       // Short link via api response
  //       this.shortLink = event.link;

  //       this.loading = false; // Flag variable
  //     }
  //   });
  // }
}
