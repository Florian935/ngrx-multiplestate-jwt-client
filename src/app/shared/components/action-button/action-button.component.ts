import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-action-button',
    templateUrl: './action-button.component.html',
    styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
    @Input() text?: string;
    @Output() actionButtonEvent: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void {
    }

    onClickActionButton(): void {
        this.actionButtonEvent.emit();
    }
}
