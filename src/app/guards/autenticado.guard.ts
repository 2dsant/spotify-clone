import { inject } from "@angular/core";
import { Route, Router, UrlSegment } from "@angular/router";
import { SpotifyService } from "../services/spotify.service";

export async function canMatch(route: Route, segments: UrlSegment[]): Promise<boolean> {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  const spotifyService = inject(SpotifyService);

  if (!token) {
    return new Promise(res => res(true));
  } else {
    return new Promise<boolean>(async (res) => {
      const usuarioCriado = await spotifyService.inicializarServico();
      if(usuarioCriado)
          res(true);
        else {
          localStorage.clear();
          router.navigate(['/login'])
          res(false)
        }
    })
  }
}

