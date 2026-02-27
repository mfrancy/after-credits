import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from "primeng/button";

@Component({
  selector: 'app-banner',
  imports: [MenubarModule, IconFieldModule, InputIconModule, InputTextModule, Button],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner implements OnInit {

  itemsMenu: MenuItem[] | undefined

  ngOnInit(): void {
    this.itemsMenu = [
      {
        icon: 'pi pi-bell'
      },
      {
        icon: 'pi pi-user'
      }
    ]
  }

}
