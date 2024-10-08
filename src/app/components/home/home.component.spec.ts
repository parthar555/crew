import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ApiServices } from 'src/app/services/api-services.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { of } from 'rxjs';


describe('HomeComponent', () => {
  let componet: HomeComponent
  let fixture: ComponentFixture<HomeComponent>;

 beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [HomeComponent],
    providers: [ApiServices],
    imports: [HttpClientTestingModule]
  });
  fixture = TestBed.createComponent(HomeComponent)
  componet = fixture.componentInstance;
  componet.allCrew = [];
 })

  it('should create the app', () => {
    expect(componet).toBeTruthy();
  });

  it('should get all crew list', () => {
    componet.getAllCrewList();
    const service = fixture.debugElement.injector.get(ApiServices);
    const mockData: any = [
      {
          "name": "Robert Behnken",
          "agency": "NASA",
          "image": "https://imgur.com/0smMgMH.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Robert_L._Behnken",
          "launches": [
              "5eb87d46ffd86e000604b388"
          ],
          "status": "active",
          "id": "5ebf1a6e23a9a60006e03a7a"
      },
      {
          "name": "Douglas Hurley",
          "agency": "NASA",
          "image": "https://i.imgur.com/ooaayWf.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Douglas_G._Hurley",
          "launches": [
              "5eb87d46ffd86e000604b388"
          ],
          "status": "active",
          "id": "5ebf1b7323a9a60006e03a7b"
      },
      {
          "name": "Shannon Walker",
          "agency": "NASA",
          "image": "https://imgur.com/9z4tRIO.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Shannon_Walker",
          "launches": [
              "5eb87d4dffd86e000604b38e"
          ],
          "status": "active",
          "id": "5f7f1543bf32c864a529b23e"
      },
      {
          "name": "Soichi Noguchi",
          "agency": "JAXA",
          "image": "https://imgur.com/7B1jxl8.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Soichi_Noguchi",
          "launches": [
              "5eb87d4dffd86e000604b38e"
          ],
          "status": "active",
          "id": "5f7f158bbf32c864a529b23f"
      },
      {
          "name": "Victor J. Glover",
          "agency": "NASA",
          "image": "https://imgur.com/Vv5Hgzh.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Victor_J._Glover",
          "launches": [
              "5eb87d4dffd86e000604b38e"
          ],
          "status": "active",
          "id": "5f7f15d5bf32c864a529b240"
      },
      {
          "name": "Michael S. Hopkins",
          "agency": "NASA",
          "image": "https://imgur.com/Dfg8OJ2.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Michael_S._Hopkins",
          "launches": [
              "5eb87d4dffd86e000604b38e"
          ],
          "status": "active",
          "id": "5f7f1614bf32c864a529b241"
      },
      {
          "name": "Shane Kimbrough",
          "agency": "NASA",
          "image": "https://imgur.com/nwxqtcT.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Shane_Kimbrough",
          "launches": [
              "5fe3af58b3467846b324215f"
          ],
          "status": "active",
          "id": "5fe3ba5fb3467846b3242188"
      },
      {
          "name": "K. Megan McArthur",
          "agency": "NASA",
          "image": "https://imgur.com/0VNXcdM.png",
          "wikipedia": "https://en.wikipedia.org/wiki/K._Megan_McArthur",
          "launches": [
              "5fe3af58b3467846b324215f"
          ],
          "status": "active",
          "id": "5fe3bb01b3467846b3242189"
      },
      {
          "name": "Thomas Pesquet",
          "agency": "ESA",
          "image": "https://imgur.com/5iColcZ.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Pesquet",
          "launches": [
              "5fe3af58b3467846b324215f"
          ],
          "status": "active",
          "id": "5fe3bc3db3467846b324218b"
      },
      {
          "name": "Akihiko Hoshide",
          "agency": "JAXA",
          "image": "https://imgur.com/GefuPYs.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Akihiko_Hoshide",
          "launches": [
              "5fe3af58b3467846b324215f"
          ],
          "status": "active",
          "id": "5fe3bc8ab3467846b324218c"
      },
      {
          "name": "Raja Chari",
          "agency": "NASA",
          "image": "https://imgur.com/uKj6DOF.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Raja_Chari",
          "launches": [
              "5fe3b15eb3467846b324216d"
          ],
          "status": "active",
          "id": "5fe3c587b3467846b3242198"
      },
      {
          "name": "Thomas Marshburn",
          "agency": "NASA",
          "image": "https://imgur.com/9RmQJZw.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Thomas_Marshburn",
          "launches": [
              "5fe3b15eb3467846b324216d"
          ],
          "status": "active",
          "id": "5fe3c5beb3467846b3242199"
      },
      {
          "name": "Matthias Maurer",
          "agency": "ESA",
          "image": "https://imgur.com/yBPw4mX.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Matthias_Maurer",
          "launches": [
              "5fe3b15eb3467846b324216d"
          ],
          "status": "active",
          "id": "5fe3c5f6b3467846b324219a"
      },
      {
          "name": "Jared Isaacman",
          "agency": "SpaceX",
          "image": "https://imgur.com/BpdQrMv.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Jared_Isaacman",
          "launches": [
              "607a37565a906a44023e0866"
          ],
          "status": "active",
          "id": "607a3a5f5a906a44023e0870"
      },
      {
          "name": "Hayley Arceneaux",
          "agency": "SpaceX",
          "image": "https://imgur.com/ll7TlwD.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Hayley_Arceneaux",
          "launches": [
              "607a37565a906a44023e0866"
          ],
          "status": "active",
          "id": "607a3ab45a906a44023e0872"
      },
      {
          "name": "Sian Proctor",
          "agency": "SpaceX",
          "image": "https://imgur.com/gcnGDC6.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Sian_Proctor",
          "launches": [
              "607a37565a906a44023e0866"
          ],
          "status": "active",
          "id": "607b48375a906a44023e08b8"
      },
      {
          "name": "Christopher Sembroski",
          "agency": "SpaceX",
          "image": "https://imgur.com/mC9naw6.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Christopher_Sembroski",
          "launches": [
              "607a37565a906a44023e0866"
          ],
          "status": "active",
          "id": "607b48da5a906a44023e08b9"
      },
      {
          "name": "Kayla Barron",
          "agency": "NASA",
          "image": "https://i.imgur.com/2rXxSFw.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Kayla_Barron",
          "launches": [
              "5fe3b15eb3467846b324216d"
          ],
          "status": "active",
          "id": "60c4b5ad4e041c0b356db393"
      },
      {
          "name": "Michael López-Alegría",
          "agency": "Axiom Space",
          "image": "https://i.imgur.com/60YDzr6.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Michael_L%C3%B3pez-Alegr%C3%ADa",
          "launches": [
              "61eefaa89eb1064137a1bd73"
          ],
          "status": "active",
          "id": "61eefc9c9eb1064137a1bd77"
      },
      {
          "name": "Larry Connor",
          "agency": "Axiom Space",
          "image": "https://i.imgur.com/BMJiQ3G.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Larry_Connor",
          "launches": [
              "61eefaa89eb1064137a1bd73"
          ],
          "status": "active",
          "id": "61eefcf89eb1064137a1bd79"
      },
      {
          "name": "Mark Pathy",
          "agency": "Axiom Space",
          "image": "https://i.imgur.com/IFpgQpP.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Mark_Pathy",
          "launches": [
              "61eefaa89eb1064137a1bd73"
          ],
          "status": "active",
          "id": "61eefd5b9eb1064137a1bd7a"
      },
      {
          "name": "Eytan Stibbe",
          "agency": "Axiom Space",
          "image": "https://i.imgur.com/96TBbFB.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Eytan_Stibbe",
          "launches": [
              "61eefaa89eb1064137a1bd73"
          ],
          "status": "active",
          "id": "61eefdbf9eb1064137a1bd7b"
      },
      {
          "name": "Kjell Lindgren",
          "agency": "NASA",
          "image": "https://i.imgur.com/U7o2UX1.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Kjell_N._Lindgren",
          "launches": [
              "6243ade2af52800c6e919255"
          ],
          "status": "active",
          "id": "6243bc5baf52800c6e919276"
      },
      {
          "name": "Robert Hines",
          "agency": "NASA",
          "image": "https://i.imgur.com/1Ca8K9L.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Robert_Hines_(astronaut)",
          "launches": [
              "6243ade2af52800c6e919255"
          ],
          "status": "active",
          "id": "6243bcdcaf52800c6e919277"
      },
      {
          "name": "Samantha Cristoforetti",
          "agency": "ESA",
          "image": "https://i.imgur.com/xtoVDZo.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Samantha_Cristoforetti",
          "launches": [
              "6243ade2af52800c6e919255"
          ],
          "status": "active",
          "id": "6243bd7baf52800c6e919278"
      },
      {
          "name": "Jessica Watkins",
          "agency": "NASA",
          "image": "https://i.imgur.com/bNH8BSo.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Jessica_Watkins",
          "launches": [
              "6243ade2af52800c6e919255"
          ],
          "status": "active",
          "id": "6243bdf8af52800c6e919279"
      },
      {
          "name": "Nicole Aunapu Mann",
          "agency": "NASA",
          "image": "https://i.imgur.com/EW93kmg.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Nicole_Aunapu_Mann",
          "launches": [
              "62dd70d5202306255024d139"
          ],
          "status": "active",
          "id": "62dd7196202306255024d13c"
      },
      {
          "name": "Josh A. Cassada",
          "agency": "NASA",
          "image": "https://i.imgur.com/I7FDypC.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Josh_A._Cassada",
          "launches": [
              "62dd70d5202306255024d139"
          ],
          "status": "active",
          "id": "62dd71c9202306255024d13d"
      },
      {
          "name": "Koichi Wakata",
          "agency": "JAXA",
          "image": "https://i.imgur.com/X2wnqMT.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Koichi_Wakata",
          "launches": [
              "62dd70d5202306255024d139"
          ],
          "status": "active",
          "id": "62dd7210202306255024d13e"
      },
      {
          "name": "Anna Kikina",
          "agency": "Roscosmos",
          "image": "https://i.imgur.com/tKCaih3.png",
          "wikipedia": "https://en.wikipedia.org/wiki/Anna_Kikina",
          "launches": [
              "62dd70d5202306255024d139"
          ],
          "status": "active",
          "id": "62dd7253202306255024d13f"
      }
    ]
    spyOn(service, 'getCrewList').and.returnValue(of(mockData))
    componet.allCrew = mockData
    expect(componet.allCrew).toEqual(mockData)
  });
});
