import { Component, OnInit } from '@angular/core';
import * as Vis from 'vis'
import { debug } from 'util';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  private graphData: any;
  private options: any;

  constructor() { }

  ngOnInit() {
    let nodeList = new Vis.DataSet([
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
  ]);

  // create an array with edges
  let edgeList = new Vis.DataSet([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5}
  ]);
  this.graphData = {nodes: nodeList, edges: edgeList};

  this.options = {
    manipulation: {
      enabled: true,
      initiallyActive: false,
      addNode: true,
      addEdge: true,
      editNode: undefined,
      editEdge: true,
      deleteNode: function(nodeData,callback) {
        debugger
        this.deletNodeFunction(nodeData);
      },
      deleteEdge: true,
      controlNodeStyle: {
        brokenImage: 'assets/images/openiotfog-node.png',
        shape: 'circularImage',
        color:{
          background:'blue'
        },
        image: 'assets/images/openiotfog-node.png'
        // all node options are valid.
      }
    }
  };

  let network;

  try {
     const container = document.getElementById('test');
    // in-out? just in?
    debugger;
    network = new Vis.Network(container, this.graphData, this.options);

  }catch (e) {
    console.log(e.message)
  }
  }

  deletNodeFunction(nodeData){
    debugger
  }

}
