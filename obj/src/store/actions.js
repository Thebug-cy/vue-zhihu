import {
    UPDATE_HOME,
    UPDATE_BANNER,
    UPDATE_COLUMN,
    UPDATE_FIND,
    UPDATE_DETAIL,
    UPDATE_USER,
} from './types.js'

import { getQuery } from '../services/getQueryList.js'
let actions = {
    [UPDATE_HOME]: ({ state, commit }) => getQuery({ collectionName: 'home' })
        .then(res => res && commit(UPDATE_HOME, res)),
    [UPDATE_BANNER]: ({ state, commit }) => getQuery({ collectionName: 'banner', params: { _limit: 5 } })
        .then(res => res && commit(UPDATE_BANNER, res)),
    [UPDATE_COLUMN]: ({ state, commit }) => getQuery({ collectionName: 'column', params: { _limit: 50, _sort: 'commentNum', _order: 'desc' } })
        .then(res => commit(UPDATE_COLUMN, res)),
    [UPDATE_FIND]: ({ state, commit }) => getQuery({ collectionName: 'find', params: { _limit: 10 } })
        .then(res => commit(UPDATE_FIND, res)),
    [UPDATE_DETAIL]: ({ state, commit }, { _id, collectionName }) => getQuery({ collectionName, _id })
        .then(res => commit(UPDATE_DETAIL, res)),
    [UPDATE_USER]: ({ state, commit }) => getQuery({ collectionName: 'home' })
        .then(res => commit(UPDATE_USER, res))
}
export default actions