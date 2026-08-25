import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePdf } from './share-pdf';

describe('SharePdf', () => {
  let component: SharePdf;
  let fixture: ComponentFixture<SharePdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharePdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharePdf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
