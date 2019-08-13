import {NestedTreeControl} from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface MenuNode {
  name: string;
  children?: MenuNode[];
  title?: string;
  rpanel?: any;
  color?: string;
  bordercolor?: string;
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'TAGNOS',
    color: '#25ace0',
    title: 'company',
    rpanel: [
      {id: 1, title:'what does tagnos do', placeholder:'impact'},
      {id: 1, title:'benefits', placeholder:'impact'},
      {id: 2, title:'media', src:[
        {type: 1, link: 'http://www.digitalcamerareview.com/wp-content/uploads/sites/5/24790-752x499.jpg'},
        {type: 2, link: 'https://www.youtube.com/watch?v=RHLknisJ-Sg'},
        {type: 1, link: 'http://www.digitalcamerareview.com/wp-content/uploads/sites/5/24792-752x499.jpg'}
      ]}
    ],
    children: [
      {
        name: 'Fruit',
        color: '#243e8f',
        title: 'solution area',
        bordercolor: '#25ace0',
        children: [
          {
            name: 'Apple',
            title: 'product A',
            color: '#7441a2',
            bordercolor: '#243e8f'
          },
          {
            name: 'Banana',
            title: 'product B',
            color: '#7441a2',
            bordercolor: '#243e8f'
          },
          {
            name: 'Fruit loops',
            title: 'product C',
            color: '#7441a2',
            bordercolor: '#243e8f'
          },
        ]
      }, {
        name: 'Vegetables',
        color: '#243e8f',
        bordercolor: '#25ace0',
        title: 'solution area',
        children: [
          {
            name: 'Green',
            color: '#a7cd45',
            title: 'product d',
            bordercolor: '#243e8f',
            children: [
              {
                name: 'Broccoli',
                title: 'product d - test view 1',
                color: '#7441a2',
                bordercolor: '#a7cd45'
              },
              {
                name: 'Brussel sprouts',
                title: 'product d - test view 2',
                color: '#7441a2',
                bordercolor: '#a7cd45'
              },
            ],
          }, {
            name: 'Orange',
            color: '#a7cd45',
            title: 'product e',
            bordercolor: '#243e8f',
            children: [
              {
                name: 'Pumpkins',
                title: 'product e - test view x',
                color: '#7441a2',
                bordercolor: '#a7cd45'
              },
              {
                name: 'Carrots',
                title: 'product e - test view y',
                color: '#7441a2',
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
  strTitle: string;
  rPanel: any;

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

  onSetColor(node){
    document.documentElement.style.setProperty('--node-focus-color', node.color);
  }

  onSetTitle(node){
    this.strTitle = node.title.toUpperCase();
  }

  onSetRightPanel(node){
    this.rPanel = node.rpanel;
  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;
  
  ngOnInit() {
    this.onSetTitle(TREE_DATA[0]);
    this.onSetRightPanel(TREE_DATA[0]);
  }

}
