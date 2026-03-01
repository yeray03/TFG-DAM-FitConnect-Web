import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../../components/footer/footer";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-public-layout',
  imports: [Navbar, RouterOutlet, Footer, CommonModule],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss',
})
export class PublicLayout {

}
