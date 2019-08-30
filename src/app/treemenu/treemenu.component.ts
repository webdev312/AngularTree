import {NestedTreeControl} from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { HttpserviceService } from '../httpservice.service';

interface MenuNode {
  name?: string;
  children?: MenuNode[];
  title?: string;
  rpanel?: any;
  color?: string;
  bordercolor?: string;
  isExpanded?: boolean;
}

var treedata : MenuNode[] = [];
var arrcolor : string[] = [
  "#25ace0",
  "#243e8f",
  "#a7cd45",
  "#7441a2"
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

  constructor(private appSettingsService : HttpserviceService ) {
    appSettingsService.getJSON().subscribe(data => {
      this.convertJson2Tree(data, 0);
      this.dataSource.data = treedata;
      this.treeControl.dataNodes = treedata;
      this.onSetTitle(treedata[0]);
      this.onSetRightPanel(treedata[0]);
      this.treeControl.expand(treedata[0]);
    });
  }
  
  convertJson2Tree(data, depth){
    if (depth > 0){
      var arrtree = [];
      for (var i = 0; i < data.length; i ++){
        var eachtree : MenuNode = {name: "", title: "", color: "", bordercolor: "", children: [], rpanel: []};
        eachtree.name = data[i].name;
        eachtree.title = data[i].type;
        eachtree.rpanel = data[i].info;
        eachtree.color = (depth >= arrcolor.length)? arrcolor[arrcolor.length - 1] : arrcolor[depth];
        eachtree.bordercolor = (depth >= arrcolor.length)? arrcolor[arrcolor.length - 1] : arrcolor[depth - 1];
        if (data[i].children != undefined){
          eachtree.children = this.convertJson2Tree(data[i].children, depth+1);
          if (eachtree.children == undefined) eachtree.children = [];
        }else{
          eachtree.children = [];
        }
        arrtree.push(eachtree);
      }
      return arrtree;
    }else{
      treedata[0] = {name: "", title: "", color: "", bordercolor: "", children: [], rpanel: []};
      treedata[0].name = data.name;
      treedata[0].title = data.type;
      treedata[0].rpanel = data.info;
      treedata[0].color = arrcolor[0];
      treedata[0].bordercolor = arrcolor[0];
      if (data.children != undefined){
        treedata[0].children = this.convertJson2Tree(data.children, depth+1);
      }
      return treedata;
    }
  }

  onExpandAll(){
    // this.treeControl.expandAll();
  }

  onCollapseAll(){
    this.treeControl.collapseAll();
  }

  onSetColor(node){
    document.documentElement.style.setProperty('--node-focus-color', node.color);
  }

  onSetTitle(node){
    this.strTitle = node.title;
    this.onSetRightPanel(node);
  }

  onSetRightPanel(node){
    this.rPanel = node.rpanel;
  }

  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;
  
  ngOnInit() {
    
  }

}
