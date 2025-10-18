import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent implements OnInit{
    role: string | null;

    ngOnInit(): void {
        this.role = localStorage.getItem('role');
    }
}
