import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Fish extends mixin(Model, {
    round_id: Model.attribute('round_id'), // Just for the creation apiEndpoint creation
    placement: Model.attribute('placement'), // Object
    name: Model.attribute('name'),
    image_url: Model.attribute('image_url'),
    canSee: Model.attribute('canSee'),
    canCatch: Model.attribute('canCatch'),
    canName: Model.attribute('canName'),
    canPlace: Model.attribute('canPlace'),
    placeUntil: Model.attribute('placeUntil'),
    namedBy: Model.hasOne('lastUserNaming'),
    placedBy: Model.hasOne('lastUserPlacement'),
    round: Model.hasOne('round'),
}) {
    apiEndpoint() {
        return '/catch-the-fish/' + (this.exists ? 'fishes/' + this.data.id : 'rounds/' + this.data.attributes.round_id + '/fishes');
    }
}
