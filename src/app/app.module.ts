import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MdListModule, MdButtonModule, MdGridListModule, MdCardModule, MdToolbarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import "hammerjs";
import {AppComponent} from "./app.component";
import {UserListComponent} from "./user-list/user-list.component";
import {AppService} from "./app.service";

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdListModule,
        MdCardModule,
        MdButtonModule, MdGridListModule, MdToolbarModule,
        BrowserAnimationsModule
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
