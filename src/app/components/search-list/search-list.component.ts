import { Component, OnInit } from '@angular/core';
import { IProject } from './iProject';
import { ProjectService } from '../../services/project.service';
import { ProjectFilterPipe } from './project-filter.pipe';

@Component({
  selector: 'project-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  listFilter: string = "";
  projects: IProject[];
  errorMessage: string;
  alertMessage:string = "";
  selectedProject:IProject = null;
  projectsFilterList : IProject[];
  isDisabled : boolean = true;
  btnClass : string = "btn clearBtnStyle disabled";
  disabledBtn: string = "btn clearBtnStyle disabled";
  normalBtn: string = "btn clearBtnStyle";

  constructor( private _projectService: ProjectService ) { }

  ngOnInit() {
    this._projectService.getProjects()
    .subscribe( projects => {
                              this.projects = projects;
                              this.projectsFilterList = projects;
                            },
                error => this.errorMessage = <any>error )
  }

  showProjectAlert(project : IProject) {
    this.selectedProject = project;
    this.alertMessage = `You selected a project "${this.selectedProject.AccountName}"`;
  }

  showPropertyAlert(property : any) {
    this.alertMessage = `You selected a property "${property.Name}"`;
  }

  clearSearch() {
    this.listFilter = "";
    this.selectedProject = null;
    this.alertMessage = "";
    this.projectsFilterList = this.projects;
    this.btnClass = this.disabledBtn;
    this.isDisabled = true;
  }

  modelUpdateEvent(evt:any) {
    if(evt != "") { this.btnClass = this.normalBtn; this.isDisabled = false; }
    else { this.btnClass = this.disabledBtn; this.isDisabled = true; }
    this.projectsFilterList = new ProjectFilterPipe().transform(this.projects, evt);
  }
}
