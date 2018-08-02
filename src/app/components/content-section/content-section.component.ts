import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent implements OnInit {

  actresses: Object[];
  constructor() { 
    this.actresses = [
      {
        classType: "left",
        presentYear: "Tamil Actress | 2013–present",
        name: "Meghali",
        description: "Meghali is an Indian actress who has appeared in Tamil cinema . She will make her Tamil debut in P. Vijay's upcoming film ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Meghali",
        photoUrl: "https://i.pinimg.com/originals/3d/b6/41/3db6412a68e022a4ed39cdd97b43fb93.jpg"
      },
      {
        classType: "left",
        presentYear: "Hindi Actress | 2007–present",
        name: "Meghali",
        description: "Meghali is an Indian actress who has appeared in Tamil cinema . She will make her Tamil debut in P. Vijay's upcoming film ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Meghali",
        photoUrl: "https://i.pinimg.com/originals/61/80/7c/61807c06d3c73d66392f55210ecc1752.jpg"
      },
      {
        classType: "left",
        presentYear: "Tamil Actress | 2013–present",
        name: "Meghali",
        description: "Meghali is an Indian actress who has appeared in Tamil cinema . She will make her Tamil debut in P. Vijay's upcoming film ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Meghali",
        photoUrl: "https://i.pinimg.com/originals/3d/b6/41/3db6412a68e022a4ed39cdd97b43fb93.jpg"
      },
      {
        classType: "left",
        presentYear: "Hindi Actress | 2007–present",
        name: "Meghali",
        description: "Meghali is an Indian actress who has appeared in Tamil cinema . She will make her Tamil debut in P. Vijay's upcoming film ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Meghali",
        photoUrl: "https://i.pinimg.com/originals/61/80/7c/61807c06d3c73d66392f55210ecc1752.jpg"
      },
      {
        classType: "left",
        presentYear: "Tamil Actress | 2013–present",
        name: "Meghali",
        description: "Meghali is an Indian actress who has appeared in Tamil cinema . She will make her Tamil debut in P. Vijay's upcoming film ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Meghali",
        photoUrl: "https://i.pinimg.com/originals/3d/b6/41/3db6412a68e022a4ed39cdd97b43fb93.jpg"
      },
      {
        classType: "left",
        presentYear: "Hindi Actress | 2007–present",
        name: "Meghali",
        description: "Meghali is an Indian actress who has appeared in Tamil cinema . She will make her Tamil debut in P. Vijay's upcoming film ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Meghali",
        photoUrl: "https://i.pinimg.com/originals/61/80/7c/61807c06d3c73d66392f55210ecc1752.jpg"
      }
    ];
   }

   state = true;
  ngOnInit() {
  }

}
