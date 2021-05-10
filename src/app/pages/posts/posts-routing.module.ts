import { PostListComponent } from './components/post-list/post-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostsComponent } from './components/posts.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '', component: PostsComponent,
        children: [
            { path: '', redirectTo: 'list' },
            { path: 'list', component: PostListComponent },
            { path: 'add-post', component: AddPostComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PostsRoutingModule {

}
