import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GitHubServiceProvider } from '../../providers/github-service/github.service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'profile/results/:userName'
})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  userName: string;
  user: User;
  repositories: Repository[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private gitHub: GitHubServiceProvider) {
  }

  getUserInfo(): void {
    // this.gitHub.mockGetUserInfo(this.userName).subscribe((data: User) => {
    //   this.user = data;
    //   console.log(data);
    // });

    // this.gitHub.mockGetRepositoryInfo(this.userName).subscribe((data: Repository[]) => {
    //   this.repositories = data;
    //   console.log(data);
    // })

    this.gitHub.getUserInformation(this.userName).subscribe((user: User) => {
      this.user = user;
    })

    this.gitHub.getRepositoryInformation(this.userName).subscribe((repositories: Repository[]) => {
      this.repositories = repositories;
    })
  }

  ionViewWillLoad() {
    this.userName = this.navParams.get("userName");
    console.log(this.userName);

    if (this.userName) {
      this.getUserInfo();
    }
  }

}
