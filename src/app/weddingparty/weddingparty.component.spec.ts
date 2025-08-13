import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingpartyComponent } from './weddingparty.component';

describe('WeddingpartyComponent', () => {
  let component: WeddingpartyComponent;
  let fixture: ComponentFixture<WeddingpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingpartyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
