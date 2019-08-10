import {NestedTreeControl} from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface MenuNode {
  name: string;
  children?: MenuNode[];
  color?: string;
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ],
        color: "#000"
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ],
        color: "#000"
      },
    ]
  },
];

@Component({
  selector: 'app-treemenu',
  templateUrl: './treemenu.component.html',
  styleUrls: ['./treemenu.component.css']
})
export class TreemenuComponent implements OnInit {
  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;
  
  ngOnInit() {
  }

}
