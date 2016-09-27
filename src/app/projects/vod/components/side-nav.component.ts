import { Component, ViewEncapsulation, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
    selector: 'side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['side-nav.component.css'],

})
export class SideNavComponent {
    @Input() isCollapsed: boolean;
    isListCollapsed = true;
    @Output() sideNavToggle = new EventEmitter();
    items = [
        { name: 'Genre', path: '/grid/0' },
        { name: 'Program', path: '/grid/1' },
        { name: 'Season', path: '/grid/2' },
        { name: 'Episode', path: '/grid/3' },
        { name: 'Feed', path: '/grid/0' }
    ];
    onClose() {
        this.sideNavToggle.emit();
    }
    constructor() { }

}