const makeMockMiddleware = spy => next => payload => {
    const {action} = payload;
    spy(action);
    const result = next(Object.assign({}, payload, {mockMiddleware: true}));
    spy(result);
    return result;
};

module.exports = makeMockMiddleware;