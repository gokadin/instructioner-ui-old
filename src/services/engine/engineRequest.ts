import {map, catchError} from 'rxjs/operators';

export abstract class EngineRequest {
    protected readonly entity: string;
    protected readonly requestCallback: any;
    protected readonly requestName: string;
    protected data: any;
    private conditions: any;

    protected constructor(requestCallback, entity: string, requestName: string) {
        this.entity = entity;
        this.requestCallback = requestCallback;
        this.requestName = requestName;
    }

    private addCondition(condition) {
        if (this.requestName == 'create') {
            return this;
        }

        if (!this.conditions) {
            this.conditions = [];
        }

        this.conditions.push(condition);

        return this;
    }

    public where(variable: string, operator: string, value: any) {
        return this.addCondition(['where', variable, operator, value]);
    }

    public orWhere(variable: string, operator: string, value: any) {
        return this.addCondition(['orWhere', variable, operator, value]);
    }

    public whereId(id: any) {
        return this.where('id', '=', id);
    }

    public limit(limit: number) {
        return this.addCondition(['limit', limit]);
    }

    public sort(variable: string, descending: boolean = false) {
        return this.addCondition(['sort', variable, descending ? 'DESC' : 'ASC']);
    }

    public send(ok: any, error) {
        if (this.conditions) {
            this.data[this.requestName][this.entity]['conditions'] = this.conditions;
        }

        return this.requestCallback({
            data: this.data
        })
            .pipe(
                map(ok),
                catchError(error)
            );
    }
}