import {NgModule} from "@angular/core";
import {AlertComponent} from "./alert/alert.component";
import {LoadingSpinerComponent} from "./loading-spiner/loading-spiner.component";
import {PlaceholderDirective} from "./placeholder/placeholder.directive";
import {DropdownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";
import {LoggingService} from "../logging.service";

@NgModule({
  declarations:[
    AlertComponent,
    LoadingSpinerComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports:[
    CommonModule
  ],
  exports:[
    AlertComponent,
    LoadingSpinerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  providers:[LoggingService]
})
export class SharedModule{}
