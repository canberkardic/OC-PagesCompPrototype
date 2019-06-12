import { Component, OnInit } from "@angular/core";
import { single } from "./data";
import { ToolboxComponent } from "../toolbox-decorator";

@ToolboxComponent({
  desc: " Energy Bar Chart",
  icon: "fa fa-chart-bar",
  componentName: "BarchartComponent"
})
@Component({
  selector: "app-barchart",
  templateUrl: "./barchart.component.html",
  styleUrls: ["./barchart.component.css"]
})
export class BarchartComponent {
  single: any[];
  view: any[];
  constructor() {
    Object.assign(this, { single });
  }

  onResize(event) {
    this.view = [event.target.innerWidth / 1.15, 400];
  }
}
