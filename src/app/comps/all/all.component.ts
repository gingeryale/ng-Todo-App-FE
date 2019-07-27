import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../services/tasks.service";
@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.scss"]
})
export class AllComponent implements OnInit {
  allMyTasks: any[] = [];

  constructor(private tServ: TaskService) {}

  ngOnInit() {
    // before sorting data and join or map
    // this.tServ.getDataFromServer().subscribe(data => {
    //   this.allMyTasks = data;
    // });

    // adding mapping join
    this.tServ
      .getDataFromServer()
      .subscribe(allMyTasksFromServerwithMemberID => {
        this.allMyTasks = allMyTasksFromServerwithMemberID.map(tsk => {
          let memberDetails = this.tServ.allMembersInService.find(
            el => el._id == tsk.memberID
          );
          return {
            body: tsk.body,
            member: memberDetails.name
          };
        });
      });
  }
}
