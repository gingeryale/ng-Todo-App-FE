import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../services/tasks.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  allMyMembers: any[] = [];
  body: string = "";
  selectedMemeberID = "";

  constructor(private tServe: TaskService) {}

  ngOnInit() {
    this.tServe.getMembersFromServer().subscribe(data => {
      this.allMyMembers = data;
      this.tServe.allMembersInService = data;
      this.tServe.refreshDataEE.emit("refresh");
    });
  }

  onChange(evID) {
    console.log("click");
  }

  sendForm() {
    let formObject = {
      body: this.body,
      memberID: this.selectedMemeberID
    };

    this.tServe.addTask(formObject).subscribe(res => {
      console.log(res);
    });
  }
}
