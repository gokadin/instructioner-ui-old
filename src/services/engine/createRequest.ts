import {EngineRequest} from '@app/services/engine/engineRequest';

export class CreateRequest extends EngineRequest {
    private readonly _requestName: string = 'create';

    constructor(requestCallback: any, entity: string, values: any) {
        super(requestCallback, entity, 'create');

        this.data = {
            create: {
                [entity]: {
                    values: values
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