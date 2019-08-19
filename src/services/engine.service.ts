import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FetchRequest} from '@app/services/engine/fetchRequest';
import {CreateRequest} from '@app/services/engine/createRequest';
import {DeleteRequest} from '@app/services/engine/deleteRequest';

@Injectable()
export class EngineService {
    private BASE_URL: string = 'http://localhost:5561';

    constructor(private http: HttpClient) { }

    public create(entity: string, values: any) {
        return new CreateRequest((data: any) => this.sendRequest(data), entity, values);
    }

    public fetch(entity: string) {
        return new FetchRequest((data: any) => this.sendRequest(data), entity);
    }

    public delete(entity: string, values: any) {
        return new DeleteRequest((data: any) => this.sendRequest(data), entity, values);
    }

    private sendRequest(data: any) {
        return this.http.post(this.BASE_URL + '/api/engine', data);
    }
}