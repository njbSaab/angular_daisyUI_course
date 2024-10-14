import { ActivatedRoute, Params } from '@angular/router';
import { MyObject, myObjects } from '../object-list/object-list.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-object-item',
  templateUrl: './object-item.component.html',
  styleUrls: ['./object-item.component.scss']
})
export class ObjectItemComponent implements OnInit {
  public object: MyObject | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const objectId = +params['id']; // Получаем id из параметров маршрута и преобразуем в число
      this.object = myObjects.find(obj => obj.id === objectId); // Ищем объект по id
    });

    console.log(this.object);
  }
}
