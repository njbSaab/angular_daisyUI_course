import { Component } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrl: './object-list.component.scss'
})
export class ObjectListComponent {
  public myObjects = myObjects;

  constructor(private router: Router, private route: ActivatedRoute) {}

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], {relativeTo: this.route});
  }
}
export const myObjects: MyObject[] = [
  {
    title: "first",
    description: "My first description",
    id: 1
  },
  {
    title: "second",
    description: "My second description",
    id: 2
  },
  {
    title: "third",
    description: "My third description",
    id: 3
  },
  {
    title: "four",
    description: "My four description",
    id: 4
  }
]

export interface MyObject{
  id: number;
  title: string;
  description: string;
}
