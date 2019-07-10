import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ChuckService} from "../chuck.service";
import {MatListModule} from '@angular/material/list';

interface response {
  result: String
}

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
  providers: [MatListModule]
})


export class JokesComponent implements OnInit {

  constructor(private service: ChuckService, private Router: Router, private route: ActivatedRoute) {
  }

  private jokes;

  ngOnInit() {

    this.route.params.subscribe(params => {
      // let id = +params['id']; // (+) converts string 'id' to a number
      console.log(params.category)
      const data = this.service.fetchJokes(params.category)
      data.subscribe((res: response) => {
        console.log(res)
        this.jokes = res.result;
      })
    });

    this.Router.events.subscribe((res) => {
      // console.log(this.route, res)
      // this.selectedCategory = route.snapshot.params['category']

    })
  }

}
