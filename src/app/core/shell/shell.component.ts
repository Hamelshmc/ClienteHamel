import { Component, OnInit } from '@angular/core';
import { TokenStoreService } from 'src/app/security/services/token-store.service';

@Component({
  selector: 'hamel-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
