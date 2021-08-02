export default {
    indexBy(list, iteratee, context) {
        return list.reduce((map, obj) => {
            const key = typeof iteratee === 'string' ? obj[iteratee] : iteratee.call(context, obj);
            map[key] = obj;
            return map;
        }, {});
    }
};