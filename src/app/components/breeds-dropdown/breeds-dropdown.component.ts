import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ElementRef, ViewChild } from '@angular/core';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-breeds-dropdown',
  templateUrl: './breeds-dropdown.component.html',
  styleUrls: ['./breeds-dropdown.component.scss']
})
export class BreedsDropdownComponent implements OnInit, OnChanges {
  @Input() breeds: any;
  @Output() selectedBreed: EventEmitter<string> = new EventEmitter();
  routeParams: string;
  selectedOption: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.breeds && changes.breeds.firstChange) {
      this.route.params.subscribe(params => {
        this.routeParams = params['breed'];
        if (!this.routeParams) {
          this.router.navigate([changes.breeds.currentValue[0]]);
          return;
        }
        this.routeParams = (!!this.routeParams) ? this.routeParams.replace(/-/, ' ') : null;
        this.selectedOption = changes.breeds.currentValue.find(item => item === this.routeParams);
        if (this.selectedOption) {
          this.onChange(this.selectedOption);
        } else {
          this.router.navigate(['/not/found']);
        }
      });
    }
  }

  onChange(e: string) {
    this.selectedBreed.emit(e);
    this.location.replaceState(e.replace(/\s/, '-'));
  }

}
