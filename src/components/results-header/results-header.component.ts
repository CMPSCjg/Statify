import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from 'src/models/UserProfile';

@Component({
  selector: 'app-results-header',
  templateUrl: './results-header.component.html',
  styleUrls: ['./results-header.component.scss'],
})
export class ResultsHeaderComponent implements OnInit {
  @Input() userProfile: UserProfile;

  constructor() {}

  ngOnInit(): void {}
}
