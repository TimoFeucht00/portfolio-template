import {Component, computed, input} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-page-container',
  imports: [NgStyle],
  templateUrl: './page-container-component.html',
  styleUrl: './page-container-component.scss',
})
export class PageContainerComponent {
  readonly backgroundImage = input<string | undefined>(undefined);

  protected readonly containerStyles = computed(() => {
    const image = this.backgroundImage();
    return image ? {'background-image': `url('${image}')`} : {};
  });
}

