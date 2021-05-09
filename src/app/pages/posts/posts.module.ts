import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PostsRoutingModule } from './posts-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts.component';
import * as fromPosts from './state';
import { PostItemComponent } from './components/post-list/post-item.component';

@NgModule({
    declarations: [
        PostsComponent,
        PostItemComponent
    ],
    imports: [
        CommonModule,
        PostsRoutingModule,
        StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.postsReducer),
        EffectsModule.forFeature([fromPosts.PostsEffects])
    ]
})
export class PostsModule {

}
