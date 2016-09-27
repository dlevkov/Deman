import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Dal } from '../../common/services/dal.service';
import { IService } from './../../common/Iservice';
import { GenreModel } from './../models//genre';
import { AbstractBase } from './../../common/services/absract-base.service';

@Injectable()
export class GenreService extends AbstractBase implements IService<GenreModel> {
  errorMessage: string;

  constructor(http: Http) {
    super(http);
  }
  getAll(top: number, skip: number): Observable<GenreModel[]> {
    return this
      .dal.GetItemsByUri('/vod/genre/get?$top=' + top + '&$skip=' + skip + '&$orderby=DisplayOrder desc')
      .map((genres) => {
        let result: Array<GenreModel> = [];
        if (genres) {
          genres.forEach((genre) => {
            result.push(new GenreModel(genre));
          });
        }
        return result;
      });
  }
}