import { BrowserModule } from '@angular/platform-browser';
import { PostService } from './http/post.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule
    ],
})
export class CoreModule {

}
