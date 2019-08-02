import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as _ from "underscore";

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {
  jsonTeamData: any;
  labels = {
    teamNameHeader: "Categories",
    teamNickNameHeader: "Nick Name",
    teamPlayerCountHeader: "Player Count",
    displayName: "Item Name"
  }
  categoryName: string = "";
  category = {
    "id": 4,
    "name": "aaa",
    "roster": []
  }

  teamData: any;
  itemName: string = "";
  item = {
    "id": 4,
    "unit": "aaa",
    "done": false
  }


  constructor(private route: Router) { }

  ngOnInit() {

    this.jsonTeamData = JSON.parse(sessionStorage.getItem("teamJSON"));
    sessionStorage.setItem("teamJSON",JSON.stringify(this.jsonTeamData));

  }

  rosterView(teamData){
    sessionStorage.setItem("selected-team-roster",JSON.stringify(teamData));
    this.teamData = JSON.parse(sessionStorage.getItem("selected-team-roster"));
  }

  addCategory() {
    if(this.categoryName.length > 0) {
      let listOfItemLength = this.jsonTeamData.teams.length + 1;
      this.category.id = listOfItemLength;
      this.category.name = this.categoryName;
      this.jsonTeamData.teams.push(_.clone(this.category));
      console.log("item check");
      sessionStorage.setItem("teamJSON",JSON.stringify(this.jsonTeamData));
    }
  }

  addItem () {
    if(this.itemName.length > 0) {
      let listOfItemLength = this.teamData.roster.length + 1;
      this.item.id = listOfItemLength;
      this.item.unit = this.itemName;
      this.teamData.roster.push(_.clone(this.item));
      sessionStorage.setItem("selected-team-roster",JSON.stringify(this.teamData));
      this.jsonTeamData = JSON.parse(sessionStorage.getItem("teamJSON"));
      this.jsonTeamData.teams[this.teamData.id - 1].roster = this.teamData.roster;
      sessionStorage.setItem("teamJSON",JSON.stringify(this.jsonTeamData));
    }

  }

  itemChecked(itemId){
    let itemName = "item_"+(itemId-1);
    document.getElementById(itemName).className = 'fontChange';
  }

}
