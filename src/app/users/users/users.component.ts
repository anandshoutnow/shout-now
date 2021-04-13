import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: any = [
    {
      parentName: 'categories',
      childProperties: [
        { propertyName: 'All categories' },
        { propertyName: 'Filtered By' },
        { propertyName: 'Filtered By' },
        { propertyName: 'Filtered By' },
        { propertyName: 'Filtered By' },
        { propertyName: 'Filtered By' },
      ],
    },
  ];
}
