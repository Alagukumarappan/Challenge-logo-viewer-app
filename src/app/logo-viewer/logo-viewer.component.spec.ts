import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoViewerComponent } from './logo-viewer.component';

describe('LogoViewerComponent', () => {
  let component: LogoViewerComponent;
  let fixture: ComponentFixture<LogoViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
