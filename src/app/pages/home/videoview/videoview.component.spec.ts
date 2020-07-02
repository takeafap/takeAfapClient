import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoviewComponent } from './videoview.component';

describe('VideoviewComponent', () => {
  let component: VideoviewComponent;
  let fixture: ComponentFixture<VideoviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
