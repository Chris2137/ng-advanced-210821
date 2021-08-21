import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnDestroy, OnInit } from "@angular/core";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, OnDestroy {
  origClassName: string;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnDestroy(): void {
    this.origClassName = this.document.body.className;
    document.body.className = this.origClassName;
  }

  ngOnInit(): void {
    document.body.className = "bg-gradient-primary";
  }
}
