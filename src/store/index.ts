import { createStore } from "vuex";
import TabHistory, {TabHistoryState} from '@/store/tab-history'

export type State = {
    tabHistory: TabHistoryState;
}
export const store =  createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        tabHistory: TabHistory
    }
});
