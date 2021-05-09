import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IPost } from '@shared/interfaces/post.interface';
import { select, Store } from '@ngrx/store';
import * as fromPosts from '@posts/state/index';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts$?: Observable<Array<IPost>> = this._store.pipe(select(fromPosts.selectPosts));

    constructor(private _store: Store<fromPosts.PostsState>) { }

    ngOnInit(): void {
        this._store.dispatch(fromPosts.loadPosts());
    }

}
