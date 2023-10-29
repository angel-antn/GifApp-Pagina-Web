import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GiphyResponse } from '../interfaces/giphy-response.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  gifList: Gif[] = [];

  private _tagHistory: string[] = [];
  private GYPHY_API_KEY = '4GyOyMN2Dr9EtfJNPLfdtQEIpSY8OMpH';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this._getLocalStorage();
  }

  get tagHistory() {
    return [...this._tagHistory];
  }

  private _organizeTags(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((value) => value !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this._saveLocalStorage();
  }

  private _getLocalStorage() {
    if (localStorage.getItem('history')) {
      this._tagHistory = JSON.parse(localStorage.getItem('history')!);
      if (this._tagHistory.length > 0) this.searchTag(this._tagHistory[0]);
    }
  }

  private _saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  searchTag(tag: string) {
    if (tag.length === 0) return;

    this._organizeTags(tag);

    const params = new HttpParams()
      .set('api_key', this.GYPHY_API_KEY)
      .set('q', tag);

    this.http
      .get<GiphyResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((res) => {
        this.gifList = res.data;
      });
  }
}
