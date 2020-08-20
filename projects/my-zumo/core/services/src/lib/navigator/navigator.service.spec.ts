import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PLATFORM_ID } from '@angular/core';
import { WindowService } from '../window/window.service';
import { NavigatorService } from './navigator.service';

describe('NavigatorService', () => {
  let service: NavigatorService;
  let windowService: WindowService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        WindowService,
        { provide: PLATFORM_ID, useValue: 'browser' }]
    });

    service = TestBed.get(NavigatorService);
    windowService = TestBed.get(WindowService);
  }));
});
