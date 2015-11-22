import { inject } from "aurelia-framework";
import { DataService } from "../../services/data-service";
import { Demo } from "./demo";

@inject(DataService)
export class AureliaDatagridDemo extends Demo {
}