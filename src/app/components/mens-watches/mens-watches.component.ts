import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-mens-watches',
  templateUrl: './mens-watches.component.html',
  styleUrls: ['./mens-watches.component.css']
})
export class MensWatchesComponent {


  constructor(private router: Router, private postService: PostService) { }

  
  mensWactchList: any;
  error = "";

  ngOnInit(): void {

    this.postService.getMensWatches().subscribe(res => {
      debugger;
      this.mensWactchList = res;
    }, (error) => {
      this.error = error;
    });


  }

  // onEditUser(user: any) {
  //   this.router.navigateByUrl("views/user/edituser/" + user.UserId);
  // }


  // onClose(event: any) {
  //   this.error = "";
  // }

}
