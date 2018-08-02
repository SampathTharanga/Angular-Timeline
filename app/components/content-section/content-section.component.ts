import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent implements OnInit {

  actresses: Object[];
  constructor() { 
    enum color1 {
      "border-primary",
      "border-secondary",
      "border-success",
      "border-danger",
      "border-warning",
      "border-info",
      "border-dark"
  } 
  enum color2 {
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
    "bg-warning",
    "bg-info",
    "bg-dark"
} 
    this.actresses = [
      {
        id:"node1",
        color1: color1[0],
        color2: color2[0],
        classType: "left",
        presentYear: "Tamil Actress | 2013–present",
        name: "Meghali",
        description: "Meghali is an Indian actress who has appeared in Tamil cinema . She will make her Tamil debut in P. Vijay's upcoming film ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Meghali",
        photoUrl: "https://i.pinimg.com/originals/3d/b6/41/3db6412a68e022a4ed39cdd97b43fb93.jpg"
      },
      {
        id: "node2",
        color1: color1[1],
        color2: color2[1],
        classType: "right",
        presentYear: "Hindi Actress | 2014–present",
        name: "Deepika Singhe",
        description: "Singh made her debut in the Star Plus series Diya Aur Baati Hum playing the role of Sandhya who is a fun-loving, spirited...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Deepika_Singh",
        photoUrl: "https://i.pinimg.com/originals/61/80/7c/61807c06d3c73d66392f55210ecc1752.jpg"
      },
      {
        id: "node3",
        color1: color1[2],
        color2: color2[2],
        classType: "left",
        presentYear: "Telugu Actress | 2002–present",
        name: "Charmy Kaur",
        description: "Charmy Kaur, also spelt as Charmee or Charmi, (born 27 May 1983) is an Indian film actress, and producer and co-producer ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Charmy_Kaur",
        photoUrl: "https://i.pinimg.com/originals/e5/d2/49/e5d249a34f87f9d8e7a03748feb0fa52.jpg"
      },
      {
        id: "node4",
        color1: color1[3],
        color2: color2[3],
        classType: "right",
        presentYear: "Telugu and Tamil Actress | 2004–present",
        name: "Kajal Aggarwal",
        description: "Kajal Aggarwal (born 19 June 1985) is an Indian film actress and model. She has established a career in the Telugu and ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Kajal_Aggarwal",
        photoUrl: "http://2.bp.blogspot.com/-q9UVPmksmW0/Tzue7DSop1I/AAAAAAAAAMc/cHik9oRu8JA/s1600/kajal_agarwal39.jpg"
      },
      {
        id: "node5",
        color1: color1[4],
        color2: color2[4],
        classType: "left",
        presentYear: "Telugu Actress | 2009–present",
        name: "Rakul Preet Singh",
        description: "Rakul Preet Singh (born 10 October 1990) is an Indian South Indian film actress and model who predominantly works in the ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Rakul_Preet_Singh",
        photoUrl: "http://hl-img.peco.uodoo.com/hubble/app/sm/f6654c4bffa7c6a2019e46ab9ed4cad2.jpg;,,jpg;3,480x"
      },
      {
        id: "node6",
        color1: color1[5],
        color2: color2[5],
        classType: "right",
        presentYear: "Tamil Actress | 2003–present",
        name: "Nayanthara",
        description: "Nayanthara (born Diana Mariam Kuriyan; 18 November 1984), is an Indian film actress who predominantly appears in South ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Nayanthara",
        photoUrl: "https://i.pinimg.com/originals/b8/43/7b/b8437b677becfe8ae7e2d971a062641d.jpg"
      },
      {
        id: "node7",
        color1: color1[6],
        color2: color2[6],
        classType: "left",
        presentYear: "Tamil Actress | 1999–present",
        name: "Trisha Krishnan",
        description: "Trisha Krishnan (born 4 May 1983),[7] known mononymously as Trisha, is an Indian film actress and model, who primarily ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Trisha_(actress)",
        photoUrl: "http://media.onsugar.com/files/2010/07/27/1/900/9005870/24/trisha2.jpg"
      },
      {
        id: "node8",
        color1: color1[0],
        color2: color2[0],
        classType: "right",
        presentYear: "Malayalam Actress | 2002–present",
        name: "Bhavana (Karthika Menon)",
        description: "Karthika Menon (born 6 June 1986), better known by her stage name Bhavana, is an Indian film actress, who works in South ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Bhavana_(actress)",
        photoUrl: "https://i.pinimg.com/originals/60/39/dc/6039dce5538d7d0bba06406d28795c23.jpg"
      },
      {
        id: "node9",
        color1: color1[1],
        color2: color2[1],
        classType: "left",
        presentYear: "Television Actress | 2007–present",
        name: "Mouni Roy",
        description: "Mouni Roy (born 28 September 1985)[3] is an Indian film and television actress and model. She is best known for playing ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Mouni_Roy",
        photoUrl: "https://images.kalaniketan.com/catalog/product/cache/1/image/733x1100/17f82f742ffe127f42dca9de82fb58b1/Z/V/ZV4_1129-A.jpg"
      },
      {
        id: "node10",
        color1: color1[2],
        color2: color2[2],
        classType: "right",
        presentYear: "Tamil Actress | 2001–present",
        name: "Shriya Saran",
        description: "Shriya Saran (pronounced [ʂrɪjaː sərən] (born as Shriya Saran Bhatnagar on 11 September 1982),[4] also known as Shriya ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Shriya_Saran",
        photoUrl: "https://mhlo67ejhd2nsv5t48qml19q-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/SHRIYA-SARAN.jpg"
      },
      {
        id: "node11",
        color1: color1[3],
        color2: color2[3],
        classType: "left",
        presentYear: "Tamil and Telugu Actress | 2000–presen",
        name: "Keerthy Suresh",
        description: "Keerthy Suresh (born 17 October 1992) is an Indian film actress who appears in Tamil, Malayalam and Telugu films ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Keerthy_Suresh",
        photoUrl: "http://tamilnext.com/wp-content/uploads/2017/06/Actress_Keerthi_Suresh_Stills_7.jpg"
      },
      {
        id: "node12",
        color1: color1[4],
        color2: color2[4],
        classType: "right",
        presentYear: "Tamill and Malayalam Actress | 2014–present",
        name: "Nikki Galrani",
        description: "Nikki Galrani (born 3 January 1992) is an Indian film actress, model and fashion designer who works predominantly in Tamil ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Nikki_Galrani",
        photoUrl: "https://3.bp.blogspot.com/-IEcLfypB3hU/Vyv5sbr82oI/AAAAAAAALgc/wImB4e5n9dAbffAuEVQOkpvkalY496Z9gCLcB/s1600/Nikki-Galrani-hot-beautiful-images-salwar-2.jpg"
      },
      {
        id: "node13",
        color1: color1[5],
        color2: color2[5],
        classType: "left",
        presentYear: "Hindi Television Actress | 2003–present",
        name: "Divyanka Tripathi",
        description: "Divyanka Tripathi, also known by her married name Divyanka Tripathi Dahiya (born on 14 December 1984) ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Divyanka_Tripathi",
        photoUrl: "https://1.bp.blogspot.com/-HnriyQJ_xQI/Uqyi-5lzgHI/AAAAAAAAW44/Pj5DG1doq-g/s1600/Star-plus_Yeh-Hain-Mohabbatein_-divyanka-tripathi.jpg.jpg"
      },
      {
        id: "node14",
        color1: color1[6],
        color2: color2[6],
        classType: "right",
        presentYear: "Hindi Actress | 2004–present",
        name: "Ayesha Takia",
        description: "Ayesha Takia (born 10 April 1986) is an Indian former actress who appeared in Bollywood films. She made her film debut in ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Ayesha_Takia",
        photoUrl: "https://i.pinimg.com/originals/38/1c/34/381c34324b2baef803e3db4d5edfc93a.jpg"
      },
      {
        id: "node15",
        color1: color1[0],
        color2: color2[0],
        classType: "left",
        presentYear: "Television Actress | 2012–present",
        name: "Sanaya Irani",
        description: "Sanaya Irani (born 17 September 1983) is an Indian television actress. She is the recipient of several awards including ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Sanaya_Irani",
        photoUrl: "https://4.bp.blogspot.com/-B2oOMP3spsI/WE5jJEfIYoI/AAAAAAAAGCM/TFj6BjW2zvgSQVRhCUCntMHoY2LCb4fKgCLcB/s1600/Khushi-sanaya-irani-32733175-333-500.png"
      },
      {
        id: "node16",
        color1: color1[1],
        color2: color2[1],
        classType: "right",
        presentYear: "Telugu and Tamil Actress | 2008–present",
        name: "Yami Gautam",
        description: "Yami Gautam (born 28 November 1988[3]) is an Indian film actress[4] and model who predominantly appears in Hindi films ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Yami_Gautam",
        photoUrl: "http://cdn29.us1.fansshare.com/images/yamigautam/stunning-yami-gautam-embroidered-churidar-suit-slshtxfn-34218968.jpg"
      },
      {
        id: "node17",
        color1: color1[2],
        color2: color2[2],
        classType: "left",
        presentYear: "Television Actress | 2009–presen",
        name: "Hina Khan",
        description: "Hina Khan (born 2 October 1987)[1] is an Indian television actress.[3] She played the role of Akshara in Yeh Rishta Kya ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Hina_Khan",
        photoUrl: "http://3.bp.blogspot.com/-y36LkFo9LqA/VJlwaY3g80I/AAAAAAAAiHM/6RKlNwtO_b0/s1600/Gorgeous-Wedding-Parrot-Green-Anarkali-Suit-By-Heena-Khan-2.jpg"
      },
      {
        id: "node18",
        color1: color1[3],
        color2: color2[3],
        classType: "right",
        presentYear: "Telugu Actress | 2009–present",
        name: "Deeksha Seth",
        description: "Deeksha Seth (born 14 February 1990)[2][3] is an Indian film actress and model. A finalist in Femina Miss India in 2009 ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Deeksha_Seth",
        photoUrl: "http://3.bp.blogspot.com/-WT4OEznOP38/UyFUmRDNbZI/AAAAAAAAVqs/iOLfQoun9Yo/s1600/Deeksha-Seth-Latest-Photo-Shoot-+(5).jpg"
      },
      {
        id: "node19",
        color1: color1[4],
        color2: color2[4],
        classType: "left",
        presentYear: "Malayalam and Tamil Actress | 2004–present",
        name: "Poorna (Shamna Kasim)",
        description: "Shamna Kasim, also known by the stage name Poorna, is an Indian film actress and model. She started her career as a ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Shamna_Kasim",
        photoUrl: "https://2.bp.blogspot.com/-n-V4XV22K-Y/WD7hNRgZiOI/AAAAAAAAcQE/1-n5-KAxFIcKA_5CUE6BWAVWNXgwvfzxgCLcB/s1600/Poorna%2BLong%2BHair%2BIn%2BBlack%2BDress%2BAt%2BFilm%2BPress%2BMeet%2B%25285%2529.jpg"
      },
      {
        id: "node20",
        color1: color1[5],
        color2: color2[5],
        classType: "right",
        presentYear: "Malayalam Actress | 2012–present",
        name: "Lakshmi Menon",
        description: "Lakshmi Menon (born 19 May 1996) is an Indian film actress and singer, who mainly appears in Tamil films along with few ... ",
        readmoreUrl: "https://en.wikipedia.org/wiki/Lakshmi_Menon_(actress)",
        photoUrl: "http://www.tamilstar.com/gallery/d/161140-1/lakshmi+Menon_001.jpg"
      },
      {
        id: "node21",
        color1: color1[6],
        color2: color2[6],
        classType: "left",
        presentYear: "Tamil and Telugu Actress | 2012–present",
        name: "Sri Divya",
        description: "Sri Divya is an Indian film and television actress, who acts in Tamil and Telugu films ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Sri_Divya",
        photoUrl: "http://cinespot.net/gallery/d/2059251-1/Sri+divya+photoshoot+at+Varadhi+Movie+Press+Meet++_8_.jpg"
      },
      {
        id: "node22",
        color1: color1[0],
        color2: color2[0],
        classType: "right",
        presentYear: "Hindi Actress | 2010–present",
        name: "Zarine Khan",
        description: "Zareen Khan, (born 14 May 1987) also known as Zarine Khan[1][2] is an Indian actress and model who mainly works in the ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Zareen_Khan",
        photoUrl: "http://imagepacific.com/wp-content/uploads/2018/01/zarine-khan-hd-images-1.jpg"
      },
      {
        id: "node23",
        color1: color1[1],
        color2: color2[1],
        classType: "left",
        presentYear: "Tamil and Telugu Actress | 2005–present",
        name: "Tamannaah Bhatia",
        description: "Tamannaah Bhatia (born 21 December 1989[4]) known simply as Tamannaah, is an Indian actress who predominantly appears ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Tamannaah",
        photoUrl: "http://1.bp.blogspot.com/_V6cHkkbjFt8/TIhnD63-8II/AAAAAAAAClE/v_88w99PyOA/s1600/Cute+Indian+Actress+Tamanna+Bhatia+HQ+Photos+%284%29.jpg"
      },
      {
        id: "node24",
        color1: color1[2],
        color2: color2[2],
        classType: "right",
        presentYear: "Television Actress | 2008–present",
        name: "Avika Sameer Gor",
        description: "Avika Sameer Gor (born 30 June 1997)[1] is an Indian film and television actress. Her big break was in the show Balika  ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Avika_Gor",
        photoUrl: "http://indiaz.com/wp-content/themes/twentyfourteen/timthumb.php?src=http://static.indiaz.com/wp-content/blogs.dir/7/files/2014/11/28/Avika-Gar/Avika-Gar-indiamovies.net(129).jpg&w=770&zc=1&a=t&q=100"
      },
      {
        id: "node25",
        color1: color1[3],
        color2: color2[3],
        classType: "left",
        presentYear: "Television and Telugu Actress | 2010–present",
        name: "Niti Taylor",
        description: "Niti Taylor made her television debut with the serial Pyaar Ka Bandhan in 2009. Her big break came through her first lead ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Niti_Taylor",
        photoUrl: "http://1.bp.blogspot.com/-X0hHkcnKvDs/VYhuIHjAUYI/AAAAAAAAD0s/yA1hldD0LXA/s1600/nitit%2Btaylor%2Bwhite%2Bdress.jpg"
      },
      {
        id: "node26",
        color1: color1[4],
        color2: color2[4],
        classType: "right",
        presentYear: "Hindi Actress | 2003–present",
        name: "Genelia D'Souza",
        description: "Genelia D'Souza (born 5 August 1987)[1][2] is an Indian film actress and model. She has appeared in South Indian cinema  ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Genelia_D%27Souza",
        photoUrl: "http://3.bp.blogspot.com/_Q09g8aDEtNc/S7cFEM35evI/AAAAAAAAE48/YxOsum5J85o/s1600/Genelia-Salwar.jpg"
      },
      {
        id: "node27",
        color1: color1[5],
        color2: color2[5],
        classType: "left",
        presentYear: "Hindi Actress | 2010–present",
        name: "Nargis Mohammed Fakhri",
        description: "Nargis Mohammed Fakhri is an American actress and model, who mainly appears in Hindi films.[2][3] Her first role in film ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Nargis_Fakhri",
        photoUrl: "http://media.santabanta.com/wall2009/IndianCelebrities(F)/Nargis%20Fakhri/480x640/Nargis-Fakhri-3172.jpg"
      },
      {
        id: "node28",
        color1: color1[6],
        color2: color2[6],
        classType: "right",
        presentYear: "Telugu Actress | 2010–present",
        name: "Pranitha Subhash",
        description: "Pranitha Subhash is an Indian film actress, model who predominantly appears in Kannada, Telugu and Tamil films. She was ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Pranitha_Subhash",
        photoUrl: "https://lh3.googleusercontent.com/-Uji36Y1aadE/V_oYRaCZqCI/AAAAAAAABUs/h0_QdDSuo3s/s700/pranitha-hot-stills-in-udhayan-movie-2.jpg"
      },
      {
        id: "node29",
        color1: color1[0],
        color2: color2[0],
        classType: "left",
        presentYear: "Malayalam and Tamil Actress | 2004–present",
        name: "Nazriya Nazim",
        description: "Nazriya Nazim (born 20 December 1994) is an Indian film actress and producer who has mainly starred in Malayalam films and ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Nazriya_Nazim",
        photoUrl: "https://i.pinimg.com/originals/f4/f3/1f/f4f31ff6bb77f64ac5f15b47820a7b7b.jpg"
      },
      {
        id: "node30",
        color1: color1[2],
        color2: color2[1],
        classType: "right",
        presentYear: "Hindi Actress | 1984–present",
        name: "Madhuri Dixit Nene",
        description: "Madhuri Dixit Nene (born 15 May 1967)[1] is an Indian actress who is known for her work in Hindi cinema. She has been praised ...",
        readmoreUrl: "https://en.wikipedia.org/wiki/Madhuri_Dixit",
        photoUrl: "https://4.bp.blogspot.com/-0xKbYiGdC00/Wr4QSZOBGnI/AAAAAAAAfP4/jxLkZfYUdochZVIpZe28TV3iWLioAHoEQCLcBGAs/s1600/Madhuri%2BDixit%2B5.jpg"
      }
    ];
   }

   state = true;
  ngOnInit() {
  }

}
