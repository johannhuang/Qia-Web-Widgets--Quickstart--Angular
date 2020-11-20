import { Component, AfterViewInit, ElementRef } from '@angular/core'

import {
  QiaSkeleton,
  QiaPaginator
} from 'qia-widgets'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Qia Web Widgets - Quickstart'

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    const containerElement = this.element.nativeElement

    const qiaSkeletonContainer = containerElement.querySelector('.qia-skeleton-container')
    const qiaSkeleton = new QiaSkeleton({}, qiaSkeletonContainer)

    const qiaPaginatorContainer = containerElement.querySelector('.qia-paginator-container')
    const qiaPaginator = new QiaPaginator({current: 92, total: 97}, qiaPaginatorContainer)
    const qiaPaginatorElement = qiaPaginator.element

    const pageContainer = containerElement.querySelector('.page-container')
    pageContainer.innerHTML = `Qia Paginator demo - paged content for page ${92}`

    qiaPaginatorElement.addEventListener('pageChanged', function (event) {
      pageContainer.innerHTML = `Qia Paginator demo - paged content for page ${event.detail.current}`
    })
  }
}
