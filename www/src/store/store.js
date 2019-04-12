import { observable, action } from 'mobx';
import { getTest, postTest } from './../service/server';

class Store {
    @observable
    getRes = "";
    @observable
    postRes = "";

    @action
    getHandler = async () => {
        let getRes = await getTest({a: 1});
        this.getRes = JSON.stringify(getRes);
    }

    @action
    postHandler = async () => {
        let postRes = await postTest({a: 1});
        this.postRes = JSON.stringify(postRes);
    }
}

export default new Store();
