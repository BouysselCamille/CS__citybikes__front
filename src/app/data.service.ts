import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  public sendGetStatusRequest() {
    return this.httpClient.get<any>(`${this.REST_API_SERVER}/station_status`);
  }

  public sendPostAvgFillingRateByIdByDayRequest(
    idStation: Number,
    day: String
  ) {
    return this.httpClient.post<any>(
      `${this.REST_API_SERVER}/stats_avg_filling_rate_by_station`,
      { id: idStation, weekDay: day }
    );
  }

  public sendPostStatsByStationIdRequest(idStation: Number) {
    return this.httpClient.post<any>(
      `${this.REST_API_SERVER}/stats_by_station`,
      { id: idStation }
    );
  }

  public sendPostAvgFillingRateByTimeslotByDayRequest(
    timeSlot: Number,
    day: String
  ) {
    return this.httpClient.post<any>(
      `${this.REST_API_SERVER}/stats_by_timeslot`,
      { weekDay: day, timeSlot: timeSlot }
    );
  }

  public sendPostRankingStationRequest(timeSlot: Number, weekDay: String) {
    return this.httpClient.post<any>(`${this.REST_API_SERVER}/stats_ranking`, {
      timeSlot,
      weekDay,
    });
  }

  public getAddressAutocomplete(q: string) {
    return this.httpClient.post<any>(`${this.REST_API_SERVER}/geocode`, { q });
  }
}
