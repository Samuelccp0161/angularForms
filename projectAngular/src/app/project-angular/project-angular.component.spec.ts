import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAngularComponent } from './project-angular.component';

describe('ProjectAngularComponent', () => {
  let component: ProjectAngularComponent;
  let fixture: ComponentFixture<ProjectAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
