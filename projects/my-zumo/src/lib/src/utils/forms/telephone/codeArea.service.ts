import { Injectable } from '@angular/core';
import { isEmpty } from '../custom-validators/custom-validators';
import { all } from './json.var';

@Injectable({
  providedIn: 'root'
})
export class CodeAreaService {

  public subStringPhone(value: string) {
    if (isEmpty(value)) {
      return null;
    }
    value = value.replace(/\s/g, '');
    const numberPhone = {
      codeArea: '',
      number: '',
      mask: '0000000000'
    };
    const aux = this.numberPhone(value);
    if (aux) {
      numberPhone.codeArea = aux.code;
      numberPhone.number = aux.phone;
      switch (numberPhone.codeArea.length) {
        case 2: {
          numberPhone.mask = '00 00000000';
          break;
        }
        case 3: {
          numberPhone.mask = '000 0000000';
          break;
        }
        case 4: {
          numberPhone.mask = '0000 000000';
          break;
        }
      }
    }
    return numberPhone.codeArea ? numberPhone : {
      codeArea: '',
      number: '',
      mask: '0000000000'
    };
  }

  private numberPhone(value: string) {
    for (let i = 0; i < value.length; i = i + 1) {
      if (all[value.substr(0, i)]) {
        const code = value.substr(0, i);
        const phone = value.substr(code.length, value.length);
        for (let ii = 0; ii < phone.length; ii = ii + 1) {
          if (all[code][phone.substr(0, ii)]) {
            return { code, phone };
          }
        }
      }
    }
  }
}
