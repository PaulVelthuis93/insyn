// eslint-disable-next-line no-unused-vars
const makeFetchCustomer = fetcher => service => next => payload => {
    const { action } = payload;
    const { customer } = action;
    if (customer) {
        const customerData = fetcher(customer);
        const decoratedAction = Object.assign({}, action, { customerData });
        const nextPayload = Object.assign({}, payload, { action: decoratedAction });
        return next(nextPayload);
    }
    return next(action);
};

module.exports = makeFetchCustomer;