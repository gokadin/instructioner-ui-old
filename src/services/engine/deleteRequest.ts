import {EngineRequest} from '@app/services/engine/engineRequest';

export class DeleteRequest extends EngineRequest {
    private readonly _requestName: string = 'delete';

    constructor(requestCallback: any, entity: string, entityObject: any) {
        super(requestCallback, entity, 'delete');

        this.data = {
            [this.requestName]: {
                [entity]: {}
            }
        };

        this.whereId(entityObject.id);
    }
}