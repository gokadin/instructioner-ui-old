import {EngineRequest} from '@app/services/engine/engineRequest';

export class UpdateRequest extends EngineRequest {
    private readonly _requestName: string = 'update';

    constructor(requestCallback: any, entity: string, values: any) {
        super(requestCallback, entity, 'update');

        this.data = {
            create: {
                [entity]: {
                    values: values
                }
            }
        };
    }

    public fields(fields: any) {
        this.data[this.requestName][this.entity]['fields'] = fields;

        return this;
    }
}