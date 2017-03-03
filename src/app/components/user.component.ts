import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `
  <h1> {{name}}</h1>
  <p><strong>Email address:</strong>{{email}}</p>
  <p><strong>Address: </strong>{{address.street}}<br>{{address.city}}<br>{{address.state}}</p>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  <div *ngIf="showHobbies">
  <h3> My Hobbies</h3>
  <ul>
        <li *ngFor="let hobby of hobbies;let i = index">
                {{hobby}} <button (click)="deleteHobby(i)">X</button>
        </li>
  </ul>
 
  <form (submit)="addHobby(hobby.value);false">
  <label>Add Hobey:</label><br/>
  <input type="text" #hobby/>
  </form>
   </div>
  <hr/>

  <h3>Edit User</h3>
  <form>
  <label>Name:</label><br>
  <input type="text" name="name" [(ngModel)]="name"/><br>
  <label>Email:</label><br>
 <input type="text" name="email" [(ngModel)]="email"/><br>
  <label>Address:</label><br>
  <input type="text" name="address.street" [(ngModel)]="address.street"/><br>
  <label>City:</label><br>
 <input type="text" name="address.city" [(ngModel)]="address.city"/><br>
   <label>State:</label><br>
 <input type="text" name="address.state" [(ngModel)]="address.state"/>
  </form>
  `,
})
export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;


    constructor() {
        this.name = "Rajdeep";
        this.email = "rajrock38@gmail.com";
        this.address = {
            street: "2 lake Road",
            city: "kolkata",
            state: "WB"
        }
        this.hobbies = ["cycling", "cricket", "football"];
        this.showHobbies = true;
    }

    toggleHobbies() {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    }
    addHobby(hobby) {
        this.hobbies.push(hobby);
    }
    deleteHobby(i) {
        this.hobbies.splice(i, 1);
    }

}
interface address {
    street: string;
    city: string;
    state: string;
}
