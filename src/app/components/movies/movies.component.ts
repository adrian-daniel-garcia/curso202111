import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    private movieService: MoviesService
  ) { }

  movies: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getList().subscribe( movies => this.movies = movies);
  }

}
