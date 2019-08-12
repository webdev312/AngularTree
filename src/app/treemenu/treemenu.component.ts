import {NestedTreeControl} from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface MenuNode {
  name: string;
  children?: MenuNode[];
  color?: string;
  bordercolor?: string;
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'TAGNOS',
    color: '#25ace0',
    children: [
      {
        name: 'Fruit',
        color: '#243e8f',
        bordercolor: '#25ace0',
        children: [
          {
            name: 'Apple',
            bordercolor: '#243e8f'
          },
          {
            name: 'Banana',
            bordercolor: '#243e8f'
          },
          {
            name: 'Fruit loops',
            bordercolor: '#243e8f'
          },
        ]
      }, {
        name: 'Vegetables',
        color: '#243e8f',
        bordercolor: '#25ace0',
        children: [
          {
            name: 'Green',
            color: '#a7cd45',
            bordercolor: '#243e8f',
            children: [
              {
                name: 'Broccoli',
                bordercolor: '#a7cd45'
              },
              {
                name: 'Brussel sprouts',
                bordercolor: '#a7cd45'
              },
            ],
          }, {
            name: 'Orange',
            color: '#a7cd45',
            bordercolor: '#243e8f',
            children: [
              {
                name: 'Pumpkins',
                bordercolor: '#a7cd45'
              },
              {
                name: 'Carrots',
                bordercolor: '#a7cd45'
              },
            ],
          },
        ]
      },
    ]
  }
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
    this.treeControl.dataNodes = TREE_DATA;
  }

  onExpandAll(){
    this.treeControl.expandAll();
  }

  onCollapseAll(){
    this.treeControl.collapseAll();
  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;
  
  ngOnInit() {
  }

}
