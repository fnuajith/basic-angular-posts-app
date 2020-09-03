import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() { }

  getPosts(): Post[] {
    return [...this.posts];
  }

  getPostsUpdatedListener(): Observable<Post[]> {
    return this.postsUpdated.asObservable();
  }

  addPost(postTitle: string, postContent: string): void {
    const post: Post = {
      title: postTitle,
      content: postContent
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
