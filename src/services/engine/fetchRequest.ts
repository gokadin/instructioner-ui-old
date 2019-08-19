import {EngineRequest} from '@app/services/engine/engineRequest';

export class FetchRequest extends EngineRequest {
    private readonly _requestName: string = 'fetch';

    constructor(requestCallback: any, entity: string) {
        super(requestCallback, entity, 'fetch');

        this.data = {
            fetch: {
                [entity]: {

                }
            }
        };

        this.data[this.requestName][this.entity]['fields'] = '*';
    }

    public fields(fields: any) {
        this.data[this.requestName][this.entity]['fields'] = fields;

        return this;
    }
}