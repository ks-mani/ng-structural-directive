import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  trackByAge(index, item) {
    return item.age;
  }

  basicDetails = [
    {
      firstName: "Andrew",
      lastName: "Garfield",
      age: "30"
    },
    {
      firstName: "Hadiqa",
      lastName: "Kiani",
      age: "32"
    },
    {
      firstName: "Tom",
      lastName: "Holland",
      age: "26"
    },
    {
      firstName: "Hugh",
      lastName: "Jackman",
      age: "44"
    },
    {
      firstName: "Peter",
      lastName: "Dinklage",
      age: "22"
    },
    {
      firstName: "Lena",
      lastName: "Headey",
      age: "25"
    },
    {
      firstName: "Kit",
      lastName: "Harrington",
      age: "33"
    },
    {
      firstName: "Rose",
      lastName: "Lesley",
      age: "29"
    },
    {
      firstName: "Atif",
      lastName: "Aslam",
      age: "19"
    },
    {
      firstName: "Abida",
      lastName: "Parveen",
      age: "42"
    }
  ];
}
