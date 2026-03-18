import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private deletedKey = 'deleted_albums';

  constructor(private http: HttpClient) {}

  private getDeletedIds(): number[] {
    const stored = localStorage.getItem(this.deletedKey);
    return stored ? JSON.parse(stored) : [];
  }

  private saveDeletedId(id: number): void {
    const ids = this.getDeletedIds();
    if (!ids.includes(id)) {
      ids.push(id);
      localStorage.setItem(this.deletedKey, JSON.stringify(ids));
    }
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`).pipe(
        map(albums => albums.filter(a => !this.getDeletedIds().includes(a.id)))  // ← изменить
    );
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    this.saveDeletedId(id);
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }
}